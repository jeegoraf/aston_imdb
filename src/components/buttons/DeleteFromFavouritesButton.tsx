import { removeFromFavourites } from '../../firebase'
import { useAuth } from '../../hooks/useAuth'
import { type Poster } from '../../types/types'

export function DeleteFromFavouritesButton(props: {
  id: string | undefined
  name: string
  year: number
  description: string
  poster: Poster | undefined
}) {
  // мы знаем, что пользователь точно авторизован и можем взять email из локального хранилища
  const { email } = useAuth()

  const deleteFromFavourites = () => {
    if (email) {
      removeFromFavourites(email, props)
    }
  }
  return (
    <button
      className="bg-lightBlue p-3 rounded-xl text-4xl"
      onClick={deleteFromFavourites}
    >
      Delete from Favourites
    </button>
  )
}
