import { HomeButton } from './HomeButton'
import { SignInAndRegister } from './SignInAndRegister'

export function Header(): JSX.Element {
  return (
    <div className="flex justify-between bg-blue px-52">
      <HomeButton></HomeButton>
      <SignInAndRegister></SignInAndRegister>
    </div>
  )
}
