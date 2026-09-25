import { LogOut, Moon, Sun } from 'lucide-react'
import { BookmarkForm } from './BookmarkForm'
import { ActivityFeed } from './ActivityFeed'
import { enableNotifications } from '../services/notifications'
import { useState } from 'react'
export function HomePage({ user, items, feedError, dark, setDark, onLogout, page, onPrevious, onNext, canNext }) {
 const [note, setNote] = useState('')
 async function push() { try { await enableNotifications(user); setNote('Notifications are on for this device.') } catch (e) { setNote(e.message) } }
 const name = user.displayName || user.email?.split('@')[0] || 'there'
 return <main className="app-shell"><header><div><h1>Hello, {name}</h1></div><div className="controls"><button aria-label="Toggle theme" className="icon" onClick={() => setDark(!dark)}>{dark ? <Sun size={19}/> : <Moon size={19}/>}</button><button className="logout" onClick={onLogout}><LogOut size={17}/><span>Logout</span></button></div></header><BookmarkForm user={user}/><section className="push-row"><div><strong>Stay in sync</strong><small>Receive a private alert when the other person submits.</small></div><button className="text-button" onClick={push}>Enable notifications</button></section>{note && <p className="notice" role="status">{note}</p>}<ActivityFeed items={items} error={feedError} user={user} page={page} onPrevious={onPrevious} onNext={onNext} canNext={canNext}/></main>
}
