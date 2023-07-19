import { Header } from '../components/Header'
import { SearchPanel } from '../components/SearchPanel'

export function FilmPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <SearchPanel />
    </div>
  )
}
