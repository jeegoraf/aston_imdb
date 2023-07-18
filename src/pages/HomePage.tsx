import { useEffect } from 'react'

import { useGetTop24Query } from '../api'
import { FilmsList } from '../components/FilmsList'
import { Header } from '../components/Header'
import { SearchPanel } from '../components/SearchPanel'
import { type Response } from '../types/types'

export function HomePage(): JSX.Element {
  const { data, error, isLoading } = useGetTop24Query()

  const defaultValue: Response = {
    docs: null,
    total: 0,
    limit: 0,
    page: 0,
    pages: 0
  }

  const definedData = data ?? defaultValue

  return (
    <div className="flex flex-col">
      <Header />
      <SearchPanel />
      <FilmsList films={definedData} />
    </div>
  )
}
