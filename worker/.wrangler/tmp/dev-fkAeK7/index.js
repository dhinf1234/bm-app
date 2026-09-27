var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/index.js
var json = /* @__PURE__ */ __name((value, status = 200, origin = "") => new Response(JSON.stringify(value), { status, headers: { "content-type": "application/json", ...cors(origin) } }), "json");
var cors = /* @__PURE__ */ __name((origin) => ({ "access-control-allow-origin": origin, "access-control-allow-methods": "POST, OPTIONS", "access-control-allow-headers": "Authorization, Content-Type", vary: "Origin" }), "cors");
var string = /* @__PURE__ */ __name((field) => field?.stringValue || "", "string");
var base64url = /* @__PURE__ */ __name((value) => btoa(String.fromCharCode(...new Uint8Array(value))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""), "base64url");
function pemBytes(pem) {
  const raw = atob(pem.replace(/\\n/g, "\n").replace(/-----[^-]+-----/g, "").replace(/\s/g, ""));
  return Uint8Array.from(raw, (char) => char.charCodeAt(0));
}
__name(pemBytes, "pemBytes");
async function accessToken(env) {
  const now = Math.floor(Date.now() / 1e3);
  const header = base64url(new TextEncoder().encode(JSON.stringify({ alg: "RS256", typ: "JWT" })));
  const claims = base64url(new TextEncoder().encode(JSON.stringify({ iss: env.SERVICE_ACCOUNT_EMAIL, scope: "https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/firebase.messaging", aud: "https://oauth2.googleapis.com/token", iat: now, exp: now + 3600 })));
  const key = await crypto.subtle.importKey("pkcs8", pemBytes(env.SERVICE_ACCOUNT_PRIVATE_KEY), { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["sign"]);
  const signature = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", key, new TextEncoder().encode(`${header}.${claims}`));
  const response = await fetch("https://oauth2.googleapis.com/token", { method: "POST", headers: { "content-type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${header}.${claims}.${base64url(signature)}` }) });
  if (!response.ok) throw new Error("Google OAuth failed");
  return (await response.json()).access_token;
}
__name(accessToken, "accessToken");
function base64urlBytes(value) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - value.length % 4) % 4);
  return Uint8Array.from(atob(padded), (char) => char.charCodeAt(0));
}
__name(base64urlBytes, "base64urlBytes");
function jwtPart(value) {
  return JSON.parse(new TextDecoder().decode(base64urlBytes(value)));
}
__name(jwtPart, "jwtPart");
async function verifiedUid(idToken, env) {
  try {
    const [encodedHeader, encodedClaims, encodedSignature, ...extra] = idToken.split(".");
    if (!encodedHeader || !encodedClaims || !encodedSignature || extra.length) return null;
    const header = jwtPart(encodedHeader);
    const claims = jwtPart(encodedClaims);
    const now = Math.floor(Date.now() / 1e3);
    const expectedIssuer = `https://securetoken.google.com/${env.FIREBASE_PROJECT_ID}`;
    if (header.alg !== "RS256" || !header.kid || claims.aud !== env.FIREBASE_PROJECT_ID || claims.iss !== expectedIssuer || !claims.sub || claims.exp <= now || claims.iat > now) return null;
    const response = await fetch("https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com");
    if (!response.ok) return null;
    const jwk = (await response.json()).keys?.find((key2) => key2.kid === header.kid);
    if (!jwk) return null;
    const key = await crypto.subtle.importKey("jwk", jwk, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
    const verified = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", key, base64urlBytes(encodedSignature), new TextEncoder().encode(`${encodedHeader}.${encodedClaims}`));
    return verified ? claims.sub : null;
  } catch {
    return null;
  }
}
__name(verifiedUid, "verifiedUid");
async function firestore(path, token, env) {
  const response = await fetch(`https://firestore.googleapis.com/v1/projects/${env.FIREBASE_PROJECT_ID}/databases/(default)/documents/${path}`, { headers: { Authorization: `Bearer ${token}` } });
  if (!response.ok) throw new Error(`Firestore read failed: ${response.status}`);
  return response.json();
}
__name(firestore, "firestore");
var src_default = {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    if (request.method === "OPTIONS") return origin === env.ALLOWED_ORIGIN ? new Response(null, { headers: cors(origin) }) : new Response(null, { status: 403 });
    if (request.method !== "POST" || new URL(request.url).pathname !== "/notify") return json({ error: "Not found" }, 404, origin);
    if (origin !== env.ALLOWED_ORIGIN) return json({ error: "Origin denied" }, 403, origin);
    const bearer = request.headers.get("Authorization")?.replace(/^Bearer\s+/i, "");
    const uid = bearer && await verifiedUid(bearer, env);
    const approved = env.ALLOWED_UIDS.split(",").map((value) => value.trim());
    if (!uid || !approved.includes(uid)) return json({ error: "Unauthorized" }, 401, origin);
    const { submissionId } = await request.json().catch(() => ({}));
    if (!/^[A-Za-z0-9_-]{10,}$/.test(submissionId || "")) return json({ error: "Invalid submission" }, 400, origin);
    try {
      const token = await accessToken(env);
      const submission = await firestore(`submissions/${submissionId}`, token, env);
      const fields = submission.fields || {};
      if (string(fields.userId) !== uid) return json({ error: "Submission owner mismatch" }, 403, origin);
      const recipient = approved.find((id) => id !== uid);
      if (!recipient) return json({ ok: true, sent: 0 }, 200, origin);
      const recipientDoc = await firestore(`users/${recipient}`, token, env);
      const tokens = recipientDoc.fields?.fcmTokens?.arrayValue?.values?.map(string).filter(Boolean) || [];
      const title = `${string(fields.userName)} submitted a bookmark`;
      const selection = string(fields.value) === "bookmark_now" ? "Bookmark now" : string(fields.value) === "bookmark_later" ? "Bookmark later" : "None";
      const results = await Promise.all(tokens.map((deviceToken) => fetch(`https://fcm.googleapis.com/v1/projects/${env.FIREBASE_PROJECT_ID}/messages:send`, { method: "POST", headers: { Authorization: `Bearer ${token}`, "content-type": "application/json" }, body: JSON.stringify({ message: { token: deviceToken, notification: { title, body: `Selected: ${selection}` }, webpush: { fcm_options: { link: env.ALLOWED_ORIGIN } } } }) })));
      return json({ ok: true, sent: results.filter((result) => result.ok).length }, 200, origin);
    } catch (error) {
      console.error(error);
      return json({ error: "Notification failed" }, 500, origin);
    }
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    const body = JSON.stringify(error);
    const headers = {
      "Content-Type": "application/json",
      "MF-Experimental-Error-Stack": "true"
    };
    const encoded = encodeURIComponent(body);
    if (encoded.length <= 8192) {
      headers["MF-Experimental-Error-Stack-Payload"] = encoded;
    }
    return new Response(body, { status: 500, headers });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-Td3zky/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-Td3zky/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  scheduledTime;
  cron;
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
