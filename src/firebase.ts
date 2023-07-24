// Import the functions you need from the SDKs you need
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from '@firebase/auth'
import {type FirebaseApp, initializeApp} from 'firebase/app'
import {arrayRemove, arrayUnion, doc, type DocumentData, type DocumentSnapshot, getDoc, getFirestore, setDoc, updateDoc} from 'firebase/firestore'
import {type AnyAction, type Dispatch} from 'redux'

import {removeUser, setUser} from './store/slices/userSlice'
import {type FilmShort, type Poster} from './types/types'

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
  poster: Poster | undefined
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

export const isFavouriteById = (id: string | undefined, email: string | null | undefined, userData: DocumentSnapshot<DocumentData, DocumentData> | undefined, film: FilmShort | undefined) => {
  const state = userData
    ?.get('favourites')

  const ids = state?.map((item: FilmShort) => {return item.id.toString()})
  return ids?.includes(id)
}

export function signOutFirebase (dispatch: Dispatch<AnyAction>) {
  const auth = getAuth()
  signOut(auth)
    .then(() => {
      dispatch(removeUser())
    })
    .catch((error) => {
      alert(error)
    })
}

export function signUpFirebase (email: string, password: string, dispatch: Dispatch<AnyAction>) {
  const auth = getAuth()
  createUserWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      // создание коллекции для пользователя
      const docRef = doc(db, 'users', email)
      const data = {
        favourites: [],
        history: []
      }
      setDoc(docRef, data)
        .then(() => {})
        .catch((err) => {
          alert(err)
        })

      // запись в стор
      user
        .getIdToken()
        .then((result) => {
          const response = {
            email: user.email,
            id: user.uid,
            token: result
          }
          dispatch(setUser(response))
        })
        .catch(() => {
          alert('UNABLE TO GET TOKEN')
        })
    })
    .catch(() => {
      alert('REGISTRATION FAILED')
    })
}

export const signInFirebase = (email: string, password: string, dispatch: Dispatch<AnyAction>) => {
  const auth = getAuth()

  // авторизация
  signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      // создание коллекции для пользователя
      const docRef = doc(db, 'users', email)

      getDoc(docRef)
        .then((res) => {
          // если коллекции не существует - создаем
          if (!res.data()) {
            const data = {
              favourites: [],
              history: []
            }
            setDoc(docRef, data, {merge: true})
              .then(() => {})
              .catch((err) => {
                alert(err)
              })
          }
        })
        .catch((err) => {
          alert(err)
        })

      // запись пользователя в redux store
      user
        .getIdToken()
        .then((result) => {
          const response = {
            email: user.email,
            id: user.uid,
            token: result
          }
          dispatch(setUser(response))
        })
        .catch(() => {
          alert('UNABLE TO GET TOKEN')
        })
    })
    .catch(() => {
      alert('Такого пользователя не существует')
    })
}

export const removeFromFavourites = (email: string, data: {
  id: string | undefined
  name: string
  year: number
  description: string
  poster: Poster | undefined
}) => {
  const docRef = doc(db, `users/${email}`)
  updateDoc(docRef, {
    favourites: arrayRemove(data)
  })
    .then(() => {})
    .catch((err) => {
      alert(err)
    })
}

// Initialize Firebasesrc\firebase.ts
const app: FirebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore(app)
