import { useParams } from 'react-router-dom'

import { useGetFilmsByKeywordQuery } from '../api'
import { FilmsList } from '../components/FilmsList'
import { Header } from '../components/Header'
import { SearchPanel } from '../components/SearchPanel'
import LoadingPage from './LoadingPage'

export default function SearchPage() {
  const { keyWord } = useParams()

  const definedKeyWord = keyWord ?? ''

  const { data, error, isLoading } = useGetFilmsByKeywordQuery({
    keyWord: definedKeyWord,
    page: 1,
    count: 24
  })

  if (isLoading) return <LoadingPage />

  return data ? (
    <div className="flex flex-col">
      <Header />
      <SearchPanel />
      <FilmsList films={data} />
    </div>
  ) : (
    <div className="flex flex-col">
      <Header />
      <SearchPanel />
    </div>
  )
}
