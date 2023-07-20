export function AddToFavouritesButton(props: { id: string | undefined }) {
  const addToFavourites = () => {}
  return (
    <button
      className="bg-lightBlue p-3 rounded-xl text-4xl"
      onClick={addToFavourites}
    >
      Добавить в Избранное
    </button>
  )
}
