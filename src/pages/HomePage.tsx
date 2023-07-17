import { createContext, useEffect } from 'react'

import { useGetTop24Query } from '../api'
import { FilmsList } from '../components/FilmsList'
import { Header } from '../components/Header'
import { SearchPanel } from '../components/SearchPanel'
import { type Response } from '../types/Film'

const defaultValue: Response = {
  docs: null,
  total: 0,
  limit: 0,
  page: 0,
  pages: 0
}
// создаем контекст
export const FilmsContext = createContext(defaultValue)

export function HomePage(): JSX.Element {
  const { data, error, isLoading } = useGetTop24Query()

  const definedData = data ?? defaultValue

  return (
    <div className="flex flex-col">
      <Header />
      <SearchPanel />
      <FilmsContext.Provider value={definedData}>
        <FilmsList />
      </FilmsContext.Provider>
    </div>
  )
}
