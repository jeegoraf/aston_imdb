import { useGetTop24Query } from '../api'
import { FilmsList } from '../components/FilmsList'
import { Header } from '../components/Header'
import { SearchPanel } from '../components/SearchPanel'
import LoadingPage from './LoadingPage'

export default function HomePage(): JSX.Element {
  const { data, isLoading } = useGetTop24Query()

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
