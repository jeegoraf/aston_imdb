import { useNavigate } from 'react-router-dom'

import { signInFirebase } from '../firebase'
import { useAppDispatch } from '../hooks/hooks'
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
    signInFirebase(email, password, dispatch)
    navigate('/')
  }
  return <Form title="Sign In" handleClick={handleLogin}></Form>
}
