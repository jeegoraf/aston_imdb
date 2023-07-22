import { Link } from 'react-router-dom'

export function FavouritesButton() {
  return (
    <button className="bg-beige p-3 my-10 rounded-xl text-6xl">
      <Link to="/favourites">FAVOURITES</Link>
    </button>
  )
}
