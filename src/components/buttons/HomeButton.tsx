import { Link } from 'react-router-dom'

export function HomeButton(): JSX.Element {
  return (
    <button className="text-6xl text-beige">
      <Link to="/"> KINOPOISK </Link>
    </button>
  )
}
