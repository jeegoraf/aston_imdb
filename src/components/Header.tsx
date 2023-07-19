import { useAuth } from '../hooks/useAuth'
import { HomeButton } from './HomeButton'
import { SignInAndRegister } from './SignInAndRegister'
import { SignOutButton } from './SignOutButton'

export function Header(): JSX.Element {
  const { isAuth } = useAuth()

  return isAuth ? (
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
