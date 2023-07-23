import { useNavigate } from 'react-router-dom'

import { signUpFirebase } from '../firebase'
import { useAppDispatch } from '../hooks/hooks'
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
    signUpFirebase(email, password, dispatch)
    navigate('/')
  }
  return <Form title="Sign Up" handleClick={handleRegister}></Form>
}
