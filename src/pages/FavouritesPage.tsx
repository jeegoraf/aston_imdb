import { collection, doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { useNavigate } from 'react-router-dom'

import { db } from '../firebase'
import { useAuth } from '../hooks/useAuth'

export function FavouritesPage() {
  const { isAuth, email } = useAuth()
  const navigate = useNavigate()

  const [films, setFilms] = useState([])

  const [value, loading, error] = useDocument(
    doc(db, '/users', '/jeeegor@yandex.ru')
  )

  useEffect(() => {
    console.log(isAuth)
    console.log(value?.data()?.favourites)
  }, [isAuth])

  return <></>
}
