# Bookmark Pair

A deliberately small private, two-person bookmark status app. It uses React/Vite, Firebase Authentication, Firestore real-time listeners, FCM web push, and a Cloudflare Worker as the secure notification sender. GitHub Pages hosts only the static client.

## PWA installation

The app now includes a web app manifest, a branded bookmark favicon, and an offline app-shell cache in the same service worker used by Firebase Messaging. On Chrome/Edge, open the deployed HTTPS site and use the browser's **Install app** button in the address bar. On iPhone/iPad Safari, use **Share → Add to Home Screen**. The first online visit populates the shell cache; Firebase data still needs a connection.

## 1. Install and run

```bash
npm install
copy .env.example .env
npm run dev
```

Fill the Firebase web values in `.env` from **Firebase console → Project settings → Your apps → Web app**. Firebase's web config is not a secret; the rules below are the security boundary. Never place an Admin SDK JSON key or FCM server key in this project.

Set `VITE_APPROVED_UIDS` to the two comma-separated Firebase Authentication UIDs. This client check only improves UX; it is not authorization.

## 2. Create and configure Firebase

1. Create a Firebase project and register a Web app.
2. In **Authentication → Sign-in method**, enable Email/Password and Google. Add the GitHub Pages domain under **Authentication → Settings → Authorized domains**.
3. Create the two users. Their UID appears in **Authentication → Users**. Copy it exactly.
4. Create a Firestore database in production mode. In `firestore.rules`, replace both `REPLACE_UID_*` values with those UIDs, then deploy the rules:

   ```bash
   npm install -g firebase-tools
   firebase login
   firebase use YOUR_PROJECT_ID
   firebase deploy --only firestore:rules
   ```

5. Put the same UIDs in `.env` as `VITE_APPROVED_UIDS=uid-one,uid-two`. Rules are authoritative: unauthenticated and non-approved clients cannot read or write, a submission's UID must match the authenticated UID, and submissions are immutable and schema-checked.

The client creates `/users/{uid}` on approved sign-in and writes immutable `/submissions/{id}` documents. Do not change the user document schema without updating the rules.

### Shared links and view status

Each submission includes an HTTPS/HTTP link. Selecting **Open shared link** opens it in a new browser tab/window (including on mobile) and records the signed-in viewer in the submission's `viewedBy` map. The live feed immediately shows both users who have viewed it. Deploy the updated rules after pulling this version:

```bash
firebase deploy --only firestore:rules
```

## 3. Web push notifications

In **Project settings → Cloud Messaging → Web configuration**, generate a Web Push certificate and set its public key as `VITE_FIREBASE_VAPID_KEY`.

FCM requires a service worker with the Firebase web configuration. Before release, replace the five `REPLACE_AT_BUILD_TIME` placeholders in [public/firebase-messaging-sw.js](public/firebase-messaging-sw.js) with the matching non-secret Firebase web config values. This static file is intentionally public, like the rest of the web config.

### Cloudflare Worker notification sender

The Worker is the trusted sender. It verifies the Firebase ID token sent by the browser, confirms that the caller owns the new submission, loads the other approved user's FCM tokens from Firestore, and sends notifications through FCM HTTP v1. No Admin key is ever exposed to the browser.

1. Create a Cloudflare account, then install and authenticate Wrangler:

```bash
npm install -g wrangler
wrangler login
cd worker
npm install
npm run deploy
```

2. In Google Cloud Console → **IAM & Admin → Service Accounts**, create a dedicated service account. Grant it **Firebase Cloud Messaging API Admin** and **Cloud Datastore User** roles. Create a JSON key and keep the downloaded file private. The Worker needs its `client_email` and `private_key` values.

3. Add these Worker secrets—either in Cloudflare Dashboard → **Workers & Pages → bookmark-pair-notifications → Settings → Variables and Secrets**, or with Wrangler:

```bash
npx wrangler secret put ALLOWED_ORIGIN
npx wrangler secret put ALLOWED_UIDS
npx wrangler secret put FIREBASE_PROJECT_ID
npx wrangler secret put SERVICE_ACCOUNT_EMAIL
npx wrangler secret put SERVICE_ACCOUNT_PRIVATE_KEY
```

Use an origin with no trailing slash, for example `https://your-github-username.github.io`. Use the two comma-separated UIDs for `ALLOWED_UIDS`. For local Worker testing, copy `worker/.dev.vars.example` to `worker/.dev.vars` and fill it in; never commit it.

4. Enable the **Firebase Cloud Messaging API (V1)** in Firebase Console → Project settings → Cloud Messaging. Copy the deployed Worker URL (such as `https://bookmark-pair-notifications.your-name.workers.dev`) into your app environment:

```env
VITE_NOTIFICATION_WORKER_URL=https://bookmark-pair-notifications.your-name.workers.dev
```

Add the same `VITE_NOTIFICATION_WORKER_URL` value to GitHub Actions secrets, then redeploy the site. The Worker endpoint is only callable from your configured origin and only with a valid Firebase session belonging to an approved UID.

Do **not** deploy `functions/index.js` when using this Worker, or each submission may generate duplicate notifications. The app asks notification permission only after the signed-in user deliberately selects “Enable notifications”; denial is handled without blocking the app.

## 4. Deploy GitHub Pages

Push this repository to GitHub. In **Settings → Pages**, choose **GitHub Actions** as the source. Add the following repository Actions secrets (the web config may be public, but secrets avoid hardcoding environment-specific values):

`VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`, `VITE_FIREBASE_STORAGE_BUCKET`, `VITE_FIREBASE_MESSAGING_SENDER_ID`, `VITE_FIREBASE_APP_ID`, `VITE_FIREBASE_VAPID_KEY`, `VITE_APPROVED_UIDS`, and `VITE_NOTIFICATION_WORKER_URL`.

The provided workflow sets Vite's Pages base path to `/<repository-name>/`. For an alternative manual deploy, set that same `VITE_BASE_PATH` in `.env` and run `npm run deploy` after configuring GitHub Pages to use the `gh-pages` branch.

## Security checklist

- Keep the UID allowlist in **all three** places aligned: `firestore.rules`, `VITE_APPROVED_UIDS` (UX), and the Worker secret `ALLOWED_UIDS` (notification recipient selection).
- Rules, not hidden UI, enforce access. Test with the Firestore Rules simulator using each UID and an unrelated UID before launch.
- Do not add service-account files, Admin credentials, FCM server keys, or `.env` to git.
- Restrict your Firebase API key in Google Cloud Console to the GitHub Pages domain if feasible, while retaining Firebase services required by the app.
- If either user changes, replace the UID in the rules, client environment setting, and Worker secret, then redeploy the rules and Worker.
