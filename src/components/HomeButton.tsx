import { Link } from 'react-router-dom'

export function HomeButton(): JSX.Element {
  return (
    <button className="text-6xl">
      <Link to="/"> IMDB </Link>
    </button>
  )
}
