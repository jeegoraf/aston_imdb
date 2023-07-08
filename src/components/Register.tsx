import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setUser } from '../store/slices/userSlice'
import { Form } from './Form'

export function Register(): JSX.Element {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleRegister = (email: string, password: string): void => {
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
          })
          .catch(() => {
            alert('UNABLE TO GET TOKEN')
          })

        navigate('/')
      })
      .catch(() => {
        alert('Регистрация провалена!')
      })
  }
  return <Form title="Sign Up" handleClick={handleRegister}></Form>
}
