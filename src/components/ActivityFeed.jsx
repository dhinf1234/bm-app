import { Eye, ExternalLink, Inbox } from 'lucide-react'
import { markLinkViewed } from '../services/data'

const labels = { none: 'None', bookmark_now: 'Bookmark now', bookmark_later: 'Bookmark later' }

export function ActivityFeed({ items, error, user, page, onPrevious, onNext, canNext }) {
  function view(item) { markLinkViewed(item.id, user).catch(() => {}) }
  return <section className="activity"><h2 className="activity-heading">Recent activity</h2>{error ? <p className="error">{error}</p> : items.length === 0 ? <div className="empty"><Inbox size={26}/><p>No bookmarks yet.</p></div> : <div className="feed">{items.map(item => {
    const viewers = Object.values(item.viewedBy || {})
    return <article className="activity-item link-item" key={item.id}><div className="avatar">{item.userName?.charAt(0).toUpperCase()}</div><div className="activity-content"><strong>{item.userName}</strong><p>{labels[item.value] || item.value}</p>{item.link && <a className="shared-link" href={item.link} target="_blank" rel="noopener noreferrer" onClick={() => view(item)}><ExternalLink size={14}/> Open shared link</a>}{viewers.length > 0 && <p className="viewed"><Eye size={14}/> Viewed by {viewers.join(', ')}</p>}</div><time>{item.createdAt?.toDate ? item.createdAt.toDate().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) : 'Just now'}</time></article>
  })}</div>}<nav className="pagination" aria-label="Activity pages"><button className="page-button" onClick={onPrevious} disabled={page === 1}>Previous</button><span>Page {page}</span><button className="page-button" onClick={onNext} disabled={!canNext}>Next</button></nav></section>
}
