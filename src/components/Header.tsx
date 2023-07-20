import { getAuth, getIdToken, onAuthStateChanged } from 'firebase/auth'
import { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useAuth } from '../hooks/useAuth'
import { setUser } from '../store/slices/userSlice'
import { HomeButton } from './HomeButton'
import { SignInAndRegister } from './SignInAndRegister'
import { SignOutButton } from './SignOutButton'

export function Header(): JSX.Element {
  const dispatch = useDispatch()
  // локальные данные о пользователе
  // здесь пока пусто, так как при перезагрузке стор очищается
  const localUser = useAuth()
  // даннные о пользователе с сервера
  const auth = getAuth()

  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            email: localUser.email,
            id: localUser.id,
            token: localUser.token,
          })
        )
      }
    })
  })

  return localUser.isAuth ? (
    <div className="sticky top-0 z-10 flex justify-between bg-blue px-40">
      <HomeButton />
      <SignOutButton />
    </div>
  ) : (
    <div className="sticky top-0 z-10 flex justify-between bg-blue px-40">
      <HomeButton />
      <SignInAndRegister />
    </div>
  )
}
