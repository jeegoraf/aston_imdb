import { updateFavourites } from '../../firebase'
import { useAuth } from '../../hooks/useAuth'

export function AddToFavouritesButton(props: {
  id: string | undefined
  name: string
  year: number
  description: string
  poster: string | undefined
}) {
  // мы знаем, что пользователь точно авторизован и можем взять email из локального хранилища
  const { email } = useAuth()

  const addToFavourites = () => {
    if (email) {
      updateFavourites(email, props)
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
