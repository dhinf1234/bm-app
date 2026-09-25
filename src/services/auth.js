import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth, googleProvider } from '../firebase/client'
export const loginWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password)
export const loginWithGoogle = () => signInWithPopup(auth, googleProvider)
export const logout = () => signOut(auth)
