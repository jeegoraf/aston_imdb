import { getAuth } from '@firebase/auth'
import { doc } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDocument } from 'react-firebase-hooks/firestore'
import { Navigate } from 'react-router'

import { Header } from '../components/Header'
import { HistoryList } from '../components/HistoryList'
import { SearchPanel } from '../components/SearchPanel'
import { db } from '../firebase'
import LoadingPage from './LoadingPage'

export default function FavouritesPage() {
  const auth = getAuth()

  const [user, userIsLoading] = useAuthState(auth)

  const [data] = useDocument(doc(db, '/users', `/${user?.email}`))

  if (userIsLoading) return <LoadingPage />

  if (!user) return <Navigate to="/signin" />

  return (
    <div className="flex flex-col">
      <Header />
      <SearchPanel />
      <HistoryList data={data?.get('history')?.reverse()} />
    </div>
  )
}
