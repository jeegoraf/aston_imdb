import { getAuth } from 'firebase/auth'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { useGetTop24Query } from '../api'
import { FilmsList } from '../components/FilmsList'
import { Header } from '../components/Header'
import { SearchPanel } from '../components/SearchPanel'
import { updateHistory } from '../firebase'
import LoadingPage from './LoadingPage'

export default function HomePage(): JSX.Element {
  const { data, error, isLoading } = useGetTop24Query()

  const [user, userIsLoading, userError] = useAuthState(getAuth())

  useEffect(() => {
    if (user) updateHistory(user.email, '/')
  }, [user])

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
