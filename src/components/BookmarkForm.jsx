import { Send } from 'lucide-react'
import { useState } from 'react'
import { addSubmission } from '../services/data'
import { notifyPartner } from '../services/workerNotifications'

export function BookmarkForm({ user, notificationsEnabled }) {
  const [value, setValue] = useState('none')
  const [link, setLink] = useState('')
  const [state, setState] = useState('idle')
  const choices = [['none', 'None'], ['bookmark_now', 'Bookmark now'], ['bookmark_later', 'Bookmark later']]
  const formDisabled = state === 'sending' || !notificationsEnabled
  async function submit(e) {
    e.preventDefault()
    if (formDisabled) return
    const cleanLink = link.trim()
    if (!cleanLink && value === 'none') return setState('required')
    if (cleanLink && !/^https?:\/\/.+/i.test(cleanLink)) return setState('invalid')
    setState('sending')
    try { const submission = await addSubmission(user, value, cleanLink); notifyPartner(submission.id, user).catch(() => {}); setState('done'); setLink(''); setValue('none') } catch { setState('error') }
  }
  return <section className={`card form-card ${!notificationsEnabled ? 'form-locked' : ''}`}><h2>New bookmark</h2><p>Share a link, choose a bookmark option, or do both.</p>{!notificationsEnabled && <p className="form-lock-message" role="status">Enable notifications above to unlock this form.</p>}<form onSubmit={submit}><label htmlFor="bookmark-link">Link <span className="optional">(optional)</span><input id="bookmark-link" type="url" value={link} onChange={e => { setLink(e.target.value); setState('idle') }} placeholder="https://example.com" disabled={formDisabled} /></label><fieldset className="choice-group" disabled={formDisabled}><legend>Bookmark timing</legend><div className="chips">{choices.map(([key, label]) => <label className={`chip ${value === key ? 'selected' : ''}`} key={key}><input type="radio" name="bookmark-choice" value={key} checked={value === key} onChange={() => { setValue(key); setState('idle') }} /><span>{label}</span></label>)}</div></fieldset><button className="primary" disabled={formDisabled}><Send size={18}/>{state === 'sending' ? 'Submitting…' : 'Submit'}</button>{state === 'done' && <p className="success" role="status">Saved</p>}{state === 'required' && <p className="error" role="alert">Add a link or choose Bookmark now / Bookmark later.</p>}{state === 'invalid' && <p className="error" role="alert">Enter a valid link beginning with http:// or https://.</p>}{state === 'error' && <p className="error" role="alert">Couldn’t save that. Please try again.</p>}</form></section>
}
