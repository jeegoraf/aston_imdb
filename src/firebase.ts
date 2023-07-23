// Import the functions you need from the SDKs you need
import { type FirebaseApp, initializeApp } from 'firebase/app'
import { arrayUnion, doc, getFirestore, updateDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

export const updateFavourites = (email: string, data: {
  id: string | undefined
  name: string
  year: number
  description: string
  poster: string | undefined
}) => {
  const docRef = doc(db, `users/${email}`)
  updateDoc(docRef, {
    favourites: arrayUnion(data)
  })
    .then(() => {})
    .catch((err) => {
      alert(err)
    })
}

export const updateHistory = (email: string | null, data: string) => {
  const docRef = doc(db, `users/${email}`)
  updateDoc(docRef, {
    history: arrayUnion(data)
  })
    .then(() => {})
    .catch((err) => {
      alert(err)
    })
}
// Initialize Firebasesrc\firebase.ts
const app: FirebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore(app)
