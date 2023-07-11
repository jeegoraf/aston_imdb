import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setUser } from '../store/slices/userSlice'
import { Form } from './Form'

export function SignIn(): JSX.Element {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleLogin = (email: string, password: string): void => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        user
          .getIdToken()
          .then((result) => {
            const response = {
              email: user.email,
              id: user.uid,
              token: result,
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
