import { getAuth, getIdToken, onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'

import { useAuth } from '../hooks/useAuth'
import { HomeButton } from './HomeButton'
import { SignInAndRegister } from './SignInAndRegister'
import { SignOutButton } from './SignOutButton'

export function Header(): JSX.Element {
  // локальные данные о пользователе
  const user = useAuth()

  // даннные о пользователе с сервера
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('SIGNED IN')
    } else {
      console.log('SIGNED OUT')
    }
  })

  return user.isAuth
    ? (
    <div className="sticky flex justify-between bg-blue px-40">
      <HomeButton />
      <SignOutButton />
    </div>
      )
    : (
    <div className="sticky flex justify-between bg-blue px-40">
      <HomeButton />
      <SignInAndRegister />
    </div>
      )
}
