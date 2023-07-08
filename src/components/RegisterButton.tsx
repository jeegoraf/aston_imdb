import { Link } from 'react-router-dom'

export function RegisterButton(): JSX.Element {
  return (
    <button className="bg-beige rounded-xl text-8xl">
      <Link to="/signup">REGISTER</Link>
    </button>
  )
}
