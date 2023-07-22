import { Link } from 'react-router-dom'

export function RegisterButton(): JSX.Element {
  return (
    <button className="bg-beige rounded-xl p-3 text-6xl">
      <Link to="/signup">REGISTER</Link>
    </button>
  )
}
