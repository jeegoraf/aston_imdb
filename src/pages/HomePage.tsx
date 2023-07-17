import { createContext, useEffect } from 'react'

import { FilmsList } from '../components/FilmsList'
import { Header } from '../components/Header'
import { SearchPanel } from '../components/SearchPanel'
import films from '../films.json'

export const FilmsContext = createContext(films)

export function HomePage(): JSX.Element {
  return (
    <div className="flex flex-col">
      <Header />
      <SearchPanel />
      <FilmsContext.Provider value={films}>
        <FilmsList />
      </FilmsContext.Provider>
    </div>
  )
}
