import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/client'
import { logout } from './services/auth'
import { ensureUser, watchSubmissions } from './services/data'
import { listenForForegroundMessages } from './services/notifications'
import { LoginPage } from './components/LoginPage'
import { HomePage } from './components/HomePage'
import { AccessDenied } from './components/AccessDenied'

// Keep this list identical to firestore.rules and functions/src/index.js.
const approvedUids = (import.meta.env.VITE_APPROVED_UIDS || '').split(',').map(x => x.trim()).filter(Boolean)

export function App() {
  const [user, setUser] = useState(undefined)
  const [denied, setDenied] = useState(false)
  const [items, setItems] = useState([])
  const [pageStarts, setPageStarts] = useState([null])
  const [lastDoc, setLastDoc] = useState(null)
  const [feedError, setFeedError] = useState('')
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && matchMedia('(prefers-color-scheme: dark)').matches))
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; localStorage.setItem('theme', dark ? 'dark' : 'light') }, [dark])
  useEffect(() => onAuthStateChanged(auth, async current => {
    if (!current) { setUser(null); setDenied(false); return }
    if (!approvedUids.includes(current.uid)) { setDenied(true); setUser(null); await logout(); return }
    try { await ensureUser(current); setUser(current) } catch { setDenied(true); await logout() }
  }), [])
  useEffect(() => {
    if (!user) return
    const cursor = pageStarts.at(-1)
    const offFeed = watchSubmissions(result => { setItems(result.items); setLastDoc(result.lastDoc) }, () => setFeedError('Unable to load activity. Please try again.'), cursor)
    let offPush = () => {}
    listenForForegroundMessages().then(off => { offPush = off })
    return () => { offFeed(); offPush() }
  }, [user, pageStarts])
  useEffect(() => { if ('serviceWorker' in navigator) navigator.serviceWorker.register(`${import.meta.env.BASE_URL}firebase-messaging-sw.js`).catch(() => {}) }, [])
  if (denied) return <AccessDenied />
  if (user === undefined) return <main className="center"><span className="spinner" /> Loading securely…</main>
  const previousPage = () => setPageStarts(starts => starts.length > 1 ? starts.slice(0, -1) : starts)
  const nextPage = () => { if (lastDoc) setPageStarts(starts => [...starts, lastDoc]) }
  return user ? <HomePage user={user} items={items} feedError={feedError} dark={dark} setDark={setDark} onLogout={logout} page={pageStarts.length} onPrevious={previousPage} onNext={nextPage} canNext={items.length === 20} /> : <LoginPage />
}
