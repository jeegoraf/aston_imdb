import { getAuth } from '@firebase/auth'
import { doc } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDocument } from 'react-firebase-hooks/firestore'
import { Navigate } from 'react-router'

import { FilmsList } from '../components/FilmsList'
import { Header } from '../components/Header'
import { SearchPanel } from '../components/SearchPanel'
import { db } from '../firebase'
import { LoadingPage } from './LoadingPage'

export function FavouritesPage() {
  const auth = getAuth()

  const [user, userIsLoading, userError] = useAuthState(auth)

  const [data, dataIsloading, dataError] = useDocument(
    doc(db, '/users', `/${user?.email}`)
  )

  if (userIsLoading) return <LoadingPage></LoadingPage>

  if (!user) return <Navigate to="/signin" />

  return (
    <div className="flex flex-col">
      <Header /> <SearchPanel />{' '}
      <FilmsList films={{ docs: data?.get('favourites') }} />
    </div>
  )
}
