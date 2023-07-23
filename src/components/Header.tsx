import { useContext } from 'react'

import { ThemeContext } from '../App'
import { useSyncFirebase } from '../hooks/useSyncFirebase'
import { FavouritesButton } from './buttons/FavouritesButton'
import { HistoryButton } from './buttons/HistoryButton'
import { HomeButton } from './buttons/HomeButton'
import { SignOutButton } from './buttons/SignOutButton'
import { SwitchThemeButton } from './buttons/SwitchThemeButton'
import { SignInAndRegister } from './SignInAndRegister'

export function Header(): JSX.Element {
  const theme = useContext(ThemeContext)

  const className = 'sticky top-0 z-10 flex justify-between px-40 '.concat(
    theme.theme
  )

  // здесь происходит и синхронизация в том числе
  const [user, loading] = useSyncFirebase()

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
