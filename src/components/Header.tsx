import { useDispatch } from 'react-redux'

import { useAuth } from '../hooks/useAuth'
import { HomeButton } from './HomeButton'
import { SignInAndRegister } from './SignInAndRegister'
import { SignOutButton } from './SignOutButton'

export function Header(): JSX.Element {
  const { isAuth } = useAuth()

  return isAuth ?? false
    ? (
    <div className="sticky flex justify-between bg-blue px-52">
      <HomeButton></HomeButton>
      <SignOutButton></SignOutButton>
    </div>
      )
    : (
    <div className="sticky flex justify-between bg-blue px-52">
      <HomeButton></HomeButton>
      <SignInAndRegister></SignInAndRegister>
    </div>
      )
}
