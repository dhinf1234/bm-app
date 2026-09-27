import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth, googleProvider } from '../firebase/client'
import { removeNotificationToken } from './notifications'
export const loginWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password)
export const loginWithGoogle = () => signInWithPopup(auth, googleProvider)
export async function logout() {
  const user = auth.currentUser
  if (user) await removeNotificationToken(user)
  return signOut(auth)
}
