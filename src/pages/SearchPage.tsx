import { useParams } from 'react-router-dom'

import { useGetFilmsByKeywordQuery } from '../api'
import { FilmsList } from '../components/FilmsList'
import { Header } from '../components/Header'
import { SearchPanel } from '../components/SearchPanel'
import { type Response } from '../types/types'

export function SearchPage() {
  const { keyWord } = useParams()

  const definedKeyWord = keyWord ?? ''

  const { data, error, isLoading } = useGetFilmsByKeywordQuery({ keyWord: definedKeyWord, page: 1, count: 24 })

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
