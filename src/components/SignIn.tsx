import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

import { db } from '../firebase'
import { useAppDispatch } from '../hooks/hooks'
import { setUser } from '../store/slices/userSlice'
import { Form } from './Form'

export function SignIn(): JSX.Element {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const handleLogin = (
    email: string,
    password: string,
    event: Event | undefined
  ) => {
    event?.preventDefault()
    const auth = getAuth()

    // авторизация
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
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
              setDoc(docRef, data, { merge: true })
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
            navigate('/')
          })
          .catch(() => {
            alert('UNABLE TO GET TOKEN')
          })
      })
      .catch(() => {
        alert('Такого пользователя не существует')
      })
  }
  return <Form title="Sign In" handleClick={handleLogin}></Form>
}
