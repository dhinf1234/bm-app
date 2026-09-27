const json = (value, status = 200, origin = '') => new Response(JSON.stringify(value), { status, headers: { 'content-type': 'application/json', ...cors(origin) } })
const cors = origin => ({ 'access-control-allow-origin': origin, 'access-control-allow-methods': 'POST, OPTIONS', 'access-control-allow-headers': 'Authorization, Content-Type', vary: 'Origin' })
const string = field => field?.stringValue || ''
const base64url = value => btoa(String.fromCharCode(...new Uint8Array(value))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

function pemBytes(pem) {
  const raw = atob(pem.replace(/\\n/g, '\n').replace(/-----[^-]+-----/g, '').replace(/\s/g, ''))
  return Uint8Array.from(raw, char => char.charCodeAt(0))
}

async function accessToken(env) {
  const now = Math.floor(Date.now() / 1000)
  const header = base64url(new TextEncoder().encode(JSON.stringify({ alg: 'RS256', typ: 'JWT' })))
  const claims = base64url(new TextEncoder().encode(JSON.stringify({ iss: env.SERVICE_ACCOUNT_EMAIL, scope: 'https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/firebase.messaging', aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 })))
  const key = await crypto.subtle.importKey('pkcs8', pemBytes(env.SERVICE_ACCOUNT_PRIVATE_KEY), { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['sign'])
  const signature = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, new TextEncoder().encode(`${header}.${claims}`))
  const response = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${header}.${claims}.${base64url(signature)}` }) })
  if (!response.ok) throw new Error('Google OAuth failed')
  return (await response.json()).access_token
}

function base64urlBytes(value) {
  const padded = value.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - value.length % 4) % 4)
  return Uint8Array.from(atob(padded), char => char.charCodeAt(0))
}

function jwtPart(value) {
  return JSON.parse(new TextDecoder().decode(base64urlBytes(value)))
}

async function verifiedUid(idToken, env) {
  try {
    const [encodedHeader, encodedClaims, encodedSignature, ...extra] = idToken.split('.')
    if (!encodedHeader || !encodedClaims || !encodedSignature || extra.length) return null
    const header = jwtPart(encodedHeader)
    const claims = jwtPart(encodedClaims)
    const now = Math.floor(Date.now() / 1000)
    const expectedIssuer = `https://securetoken.google.com/${env.FIREBASE_PROJECT_ID}`
    if (header.alg !== 'RS256' || !header.kid || claims.aud !== env.FIREBASE_PROJECT_ID || claims.iss !== expectedIssuer || !claims.sub || claims.exp <= now || claims.iat > now) return null

    const response = await fetch('https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com')
    if (!response.ok) return null
    const jwk = (await response.json()).keys?.find(key => key.kid === header.kid)
    if (!jwk) return null
    const key = await crypto.subtle.importKey('jwk', jwk, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify'])
    const verified = await crypto.subtle.verify('RSASSA-PKCS1-v1_5', key, base64urlBytes(encodedSignature), new TextEncoder().encode(`${encodedHeader}.${encodedClaims}`))
    return verified ? claims.sub : null
  } catch {
    return null
  }
}

async function firestore(path, token, env) {
  const response = await fetch(`https://firestore.googleapis.com/v1/projects/${env.FIREBASE_PROJECT_ID}/databases/(default)/documents/${path}`, { headers: { Authorization: `Bearer ${token}` } })
  if (!response.ok) throw new Error(`Firestore read failed: ${response.status}`)
  return response.json()
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || ''
    if (request.method === 'OPTIONS') return origin === env.ALLOWED_ORIGIN ? new Response(null, { headers: cors(origin) }) : new Response(null, { status: 403 })
    if (request.method !== 'POST' || new URL(request.url).pathname !== '/notify') return json({ error: 'Not found' }, 404, origin)
    if (origin !== env.ALLOWED_ORIGIN) return json({ error: 'Origin denied' }, 403, origin)
    const bearer = request.headers.get('Authorization')?.replace(/^Bearer\s+/i, '')
    const uid = bearer && await verifiedUid(bearer, env)
    const approved = env.ALLOWED_UIDS.split(',').map(value => value.trim())
    if (!uid || !approved.includes(uid)) return json({ error: 'Unauthorized' }, 401, origin)
    const { submissionId } = await request.json().catch(() => ({}))
    if (!/^[A-Za-z0-9_-]{10,}$/.test(submissionId || '')) return json({ error: 'Invalid submission' }, 400, origin)
    try {
      const token = await accessToken(env)
      const submission = await firestore(`submissions/${submissionId}`, token, env)
      const fields = submission.fields || {}
      if (string(fields.userId) !== uid) return json({ error: 'Submission owner mismatch' }, 403, origin)
      const recipient = approved.find(id => id !== uid)
      if (!recipient) return json({ ok: true, sent: 0 }, 200, origin)
      const recipientDoc = await firestore(`users/${recipient}`, token, env)
      const tokens = recipientDoc.fields?.fcmTokens?.arrayValue?.values?.map(string).filter(Boolean) || []
      const title = `${string(fields.userName)} submitted a bookmark`
      const selection = string(fields.value) === 'bookmark_now' ? 'Bookmark now' : string(fields.value) === 'bookmark_later' ? 'Bookmark later' : 'None'
      const appUrl = env.APP_URL || env.ALLOWED_ORIGIN
      const results = await Promise.all(tokens.map(deviceToken => fetch(`https://fcm.googleapis.com/v1/projects/${env.FIREBASE_PROJECT_ID}/messages:send`, { method: 'POST', headers: { Authorization: `Bearer ${token}`, 'content-type': 'application/json' }, body: JSON.stringify({ message: { token: deviceToken, notification: { title, body: `Selected: ${selection}` }, webpush: { fcm_options: { link: appUrl } } } }) })))
      const sent = results.filter(result => result.ok).length
      console.log('Push delivery attempted.', { recipient, registeredDevices: tokens.length, sent, statuses: results.map(result => result.status) })
      return json({ ok: true, sent }, 200, origin)
    } catch (error) { console.error(error); return json({ error: 'Notification failed' }, 500, origin) }
  },
}
