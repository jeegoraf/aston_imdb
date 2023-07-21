import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../hooks/hooks'
import { setUser } from '../store/slices/userSlice'
import { Form } from './Form'

export function Register(): JSX.Element {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const handleRegister = (
    email: string,
    password: string,
    event: Event | undefined
  ): void => {
    event?.preventDefault()
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
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
        alert('REGISTRATION FAILED')
      })
  }
  return <Form title="Sign Up" handleClick={handleRegister}></Form>
}
