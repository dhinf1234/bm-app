/* Firebase config is intentionally public; authorization is enforced by Firestore rules. */
importScripts('https://www.gstatic.com/firebasejs/11.10.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/11.10.0/firebase-messaging-compat.js')
firebase.initializeApp({ apiKey: 'AIzaSyBxlG_O8h-d8fHku5iNLNrCkyXVYxa7vC8', authDomain: 'bm-app-ae5f1.firebaseapp.com', projectId: 'bm-app-ae5f1', messagingSenderId: '555817344714', appId: '1:555817344714:web:3a614cd195626f21cade33' })
firebase.messaging()
const CACHE = 'bookmark-pair-v1'
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(['./', './index.html', './manifest.webmanifest', './favicon.svg']))))
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()))
self.addEventListener('fetch', event => { if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) return; event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => { const copy = response.clone(); caches.open(CACHE).then(cache => cache.put(event.request, copy)); return response }).catch(() => caches.match('./index.html')))) })
