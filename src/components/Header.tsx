import { getAuth } from 'firebase/auth'
import { useContext, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDispatch } from 'react-redux'

import { ThemeContext } from '../App'
import { setUser } from '../store/slices/userSlice'
import { FavouritesButton } from './buttons/FavouritesButton'
import { HistoryButton } from './buttons/HistoryButton'
import { HomeButton } from './buttons/HomeButton'
import { SignOutButton } from './buttons/SignOutButton'
import { SwitchThemeButton } from './buttons/SwitchThemeButton'
import { SignInAndRegister } from './SignInAndRegister'

export function Header(): JSX.Element {
  const dispatch = useDispatch()

  const theme = useContext(ThemeContext)

  const className = 'sticky top-0 z-10 flex justify-between px-40 '.concat(
    theme.theme
  )

  // здесь мы проверяем, авторизован ли пользователь на сервере ...
  const [user, loading, error] = useAuthState(getAuth())

  // и синхронизируем redux store
  useEffect(() => {
    if (user) {
      user
        .getIdToken()
        .then((result) => {
          dispatch(
            setUser({
              email: user.email,
              token: result,
              id: user.uid
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
    <div className={className}>
      <HomeButton />
      <div className="flex justify-center content-center gap-8">
        <SwitchThemeButton />
        <FavouritesButton />
        <HistoryButton />
        <SignOutButton />
      </div>
    </div>
  ) : (
    <div className={className}>
      <HomeButton />
      <SwitchThemeButton />
      <SignInAndRegister />
    </div>
  )
}
