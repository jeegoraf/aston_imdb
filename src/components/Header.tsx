import { getAuth, getIdToken, onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useAuth } from '../hooks/useAuth'
import { setUser } from '../store/slices/userSlice'
import { HomeButton } from './HomeButton'
import { SignInAndRegister } from './SignInAndRegister'
import { SignOutButton } from './SignOutButton'

export function Header(): JSX.Element {
  const dispatch = useDispatch()

  // локальные данные о пользователе
  const localUser = useAuth()

  const auth = getAuth()

  useEffect(() => {
    // onAuthStateChanged возвращает функцию отписки от события
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        user
          .getIdToken()
          .then((result) => {
            dispatch(
              setUser({
                email: user.email,
                token: result,
                id: user.uid,
              })
            )
          })
          .catch((err) => {
            alert(err)
          })
      }
    })
    // отписка
    unsubscribe()
  }, [auth])

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
