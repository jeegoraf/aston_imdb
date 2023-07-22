import { getAuth } from 'firebase/auth'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDispatch } from 'react-redux'

import { setUser } from '../store/slices/userSlice'
import { FavouritesButton } from './buttons/FavouritesButton'
import { HistoryButton } from './buttons/HistoryButton'
import { HomeButton } from './buttons/HomeButton'
import { SignOutButton } from './buttons/SignOutButton'
import { SignInAndRegister } from './SignInAndRegister'

export function Header(): JSX.Element {
  const dispatch = useDispatch()

  // данные о пользователе с сервера
  // здесь мы проверяем, авторизован ли пользователь на сервере, и синхронизируем redux store
  const [user, loading, error] = useAuthState(getAuth())

  useEffect(() => {
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
  }, [user])

  if (loading) return <></>

  return user ? (
    <div className="sticky top-0 z-10 flex justify-between bg-blue px-40">
      <HomeButton />
      <div className="flex justify-center content-center gap-8 py-10">
        <FavouritesButton />
        <HistoryButton />
        <SignOutButton />
      </div>
    </div>
  ) : (
    <div className="sticky top-0 z-10 flex justify-between bg-blue px-40">
      <HomeButton />
      <SignInAndRegister />
    </div>
  )
}
