import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

import { db } from '../../firebase'
import { useAuth } from '../../hooks/useAuth'

export function AddToFavouritesButton(props: {
  id: string | undefined
  name: string
  year: number
  description: string
  poster: string | undefined
}) {
  const { email } = useAuth()

  const addToFavourites = () => {
    if (email) {
      const docRef = doc(db, `users/${email}`)
      updateDoc(docRef, {
        favourites: arrayUnion(props),
      })
        .then(() => {})
        .catch((err) => {
          alert(err)
        })
    }
  }
  return (
    <button
      className="bg-lightBlue p-3 rounded-xl text-4xl"
      onClick={addToFavourites}
    >
      Добавить в Избранное
    </button>
  )
}
