import { Bell, CircleCheck, CircleX, LogOut, Moon, Sun } from 'lucide-react'
import { BookmarkForm } from './BookmarkForm'
import { ActivityFeed } from './ActivityFeed'
import { enableNotifications } from '../services/notifications'
import { useState } from 'react'

export function HomePage({ user, items, feedError, dark, setDark, onLogout, notificationsEnabled, setNotificationsEnabled, page, onPrevious, onNext, canNext }) {
 const [note, setNote] = useState('')
 const [enabling, setEnabling] = useState(false)
 async function push() {
  setEnabling(true)
  try { await enableNotifications(user); setNotificationsEnabled(true); setNote('Notifications are on for this device.') }
  catch (e) { setNotificationsEnabled(false); setNote(e.message) }
  finally { setEnabling(false) }
 }
 const name = user.displayName || user.email?.split('@')[0] || 'there'
 const statusLabel = notificationsEnabled ? 'Notifications enabled' : 'Notifications disabled'
 const statusDescription = notificationsEnabled ? 'This device can receive private bookmark alerts.' : 'Enable notifications before submitting a bookmark.'
 return <main className="app-shell"><header><div><h1>Hello, {name}</h1></div><div className="controls"><button aria-label="Toggle theme" className="icon" onClick={() => setDark(!dark)}>{dark ? <Sun size={19}/> : <Moon size={19}/>}</button><button className="logout" onClick={onLogout}><LogOut size={17}/><span>Logout</span></button></div></header><section className={`push-row notification-status ${notificationsEnabled ? 'enabled' : 'disabled'}`}><div className="notification-copy"><span className="notification-icon" aria-hidden="true">{notificationsEnabled ? <CircleCheck size={20}/> : <CircleX size={20}/>}</span><div><strong>{statusLabel}</strong><small>{statusDescription}</small></div></div><button className="text-button" onClick={push} disabled={notificationsEnabled || enabling}>{enabling ? 'Enabling…' : <><Bell size={16}/> Enable notifications</>}</button></section>{note && <p className="notice" role="status">{note}</p>}<BookmarkForm user={user} notificationsEnabled={notificationsEnabled}/><ActivityFeed items={items} error={feedError} user={user} page={page} onPrevious={onPrevious} onNext={onNext} canNext={canNext}/></main>
}
