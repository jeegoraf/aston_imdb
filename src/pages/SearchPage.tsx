import { useLocation } from 'react-router-dom'

import { FilmsList } from '../components/FilmsList'
import { Header } from '../components/Header'
import { SearchPanel } from '../components/SearchPanel'

export function SearchPage() {
  const location = useLocation()
  return (
    <div className="flex flex-col">
        <Header />
        <SearchPanel />
        <FilmsList films={location.state} />
    </div>
  )
}
