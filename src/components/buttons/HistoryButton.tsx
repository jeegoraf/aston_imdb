import { Link } from 'react-router-dom'

export function HistoryButton() {
  return (
    <button className="bg-beige p-3 my-10 rounded-xl text-6xl">
      <Link to="/history">HISTORY</Link>
    </button>
  )
}
