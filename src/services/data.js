import { addDoc, arrayRemove, arrayUnion, collection, doc, limit, onSnapshot, orderBy, query, serverTimestamp, setDoc, startAfter, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/client'

export function ensureUser(user) {
  return setDoc(doc(db, 'users', user.uid), {
    name: user.displayName || user.email?.split('@')[0] || 'User', email: user.email || '', fcmTokens: [], approved: true,
  }, { merge: true })
}
export function addSubmission(user, value, link) {
  return addDoc(collection(db, 'submissions'), { userId: user.uid, userName: user.displayName || user.email?.split('@')[0] || 'User', value, link, viewedBy: {}, createdAt: serverTimestamp() })
}
export function watchSubmissions(callback, fail, cursor = null) {
  const constraints = [orderBy('createdAt', 'desc')]
  if (cursor) constraints.push(startAfter(cursor))
  constraints.push(limit(20))
  return onSnapshot(query(collection(db, 'submissions'), ...constraints), snapshot => callback({ items: snapshot.docs.map(d => ({ id: d.id, ...d.data() })), lastDoc: snapshot.docs.at(-1) || null }), fail)
}
export function saveToken(uid, token) { return setDoc(doc(db, 'users', uid), { fcmTokens: arrayUnion(token) }, { merge: true }) }
export function removeToken(uid, token) { return setDoc(doc(db, 'users', uid), { fcmTokens: arrayRemove(token) }, { merge: true }) }
export function markLinkViewed(submissionId, user) {
  const name = user.displayName || user.email?.split('@')[0] || 'User'
  return updateDoc(doc(db, 'submissions', submissionId), { [`viewedBy.${user.uid}`]: name })
}
