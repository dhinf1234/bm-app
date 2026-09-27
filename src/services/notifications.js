import { getToken, onMessage } from 'firebase/messaging'
import { messaging } from '../firebase/client'
import { removeToken, saveToken } from './data'

export async function enableNotifications(user) {
  if (!import.meta.env.VITE_FIREBASE_VAPID_KEY) throw new Error('Push notifications are not configured.')
  if (!('Notification' in window)) throw new Error('This browser does not support notifications.')
  const permission = await Notification.requestPermission()
  if (permission !== 'granted') throw new Error('Notification permission was not granted.')
  const registration = await navigator.serviceWorker.register(`${import.meta.env.BASE_URL}firebase-messaging-sw.js`)
  const instance = await messaging()
  if (!instance) throw new Error('Messaging is unavailable in this browser.')
  const token = await getToken(instance, { vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY, serviceWorkerRegistration: registration })
  if (!token) throw new Error('No notification token was returned.')
  await saveToken(user.uid, token)
  return token
}
export async function notificationsAreEnabled(user) {
  if (!import.meta.env.VITE_FIREBASE_VAPID_KEY || !('Notification' in window) || Notification.permission !== 'granted') return false
  try {
    const registration = await navigator.serviceWorker.register(`${import.meta.env.BASE_URL}firebase-messaging-sw.js`)
    const instance = await messaging()
    if (!instance) return false
    const token = await getToken(instance, { vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY, serviceWorkerRegistration: registration })
    if (!token) return false
    await saveToken(user.uid, token)
    return true
  } catch {
    return false
  }
}
export async function removeNotificationToken(user) {
  if (!import.meta.env.VITE_FIREBASE_VAPID_KEY || !('Notification' in window) || Notification.permission !== 'granted') return
  try {
    const registration = await navigator.serviceWorker.register(`${import.meta.env.BASE_URL}firebase-messaging-sw.js`)
    const instance = await messaging()
    if (!instance) return
    const token = await getToken(instance, { vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY, serviceWorkerRegistration: registration })
    if (token) await removeToken(user.uid, token)
  } catch {
    // Logging out must still succeed if token cleanup is unavailable.
  }
}
export async function listenForForegroundMessages() {
  const instance = await messaging()
  return instance ? onMessage(instance, payload => new Notification(payload.notification?.title || 'Bookmark update', { body: payload.notification?.body })) : () => {}
}
