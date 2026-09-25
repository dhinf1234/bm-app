import { useState } from 'react'
import { Bookmark, Chrome, LogIn } from 'lucide-react'
import { loginWithEmail, loginWithGoogle } from '../services/auth'
export function LoginPage() {
  const [email, setEmail] = useState(''), [password, setPassword] = useState(''), [error, setError] = useState(''), [busy, setBusy] = useState(false)
  async function attempt(action) { setBusy(true); setError(''); try { await action() } catch (e) { setError(e.code === 'auth/popup-closed-by-user' ? 'Sign-in was cancelled.' : 'Unable to sign in. Check your details and try again.') } finally { setBusy(false) } }
  return <main className="auth-shell"><section className="auth-card"><div className="brand"><Bookmark /> <span>Bookmark Pair</span></div><h1>A small space for two.</h1><p>Sign in with an approved account to continue.</p><form onSubmit={e => { e.preventDefault(); attempt(() => loginWithEmail(email, password)) }}><label>Email<input type="email" value={email} onChange={e => setEmail(e.target.value)} required autoComplete="email" /></label><label>Password<input type="password" value={password} onChange={e => setPassword(e.target.value)} required autoComplete="current-password" /></label>{error && <p className="error" role="alert">{error}</p>}<button disabled={busy} className="primary"><LogIn size={18} />{busy ? 'Signing in…' : 'Sign in'}</button></form><div className="or">or</div><button disabled={busy} className="secondary" onClick={() => attempt(loginWithGoogle)}><Chrome size={18} />Continue with Google</button></section></main>
}
