import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { db } from '../firebase'
import { useAuth } from '../hooks/useAuth'

export function FavouritesPage() {
  const { isAuth, email } = useAuth()
  const navigate = useNavigate()

  const [films, setFilms] = useState([])

  useEffect(() => {
    if (!isAuth) navigate('/signin')
  }, [isAuth])

  return <></>
}
