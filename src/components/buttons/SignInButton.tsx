import { Link } from 'react-router-dom'

export function SignInButton(): JSX.Element {
  return (
    <button className="bg-beige rounded-xl p-3 text-6xl">
      <Link to="/signin">SIGN IN</Link>
    </button>
  )
}
