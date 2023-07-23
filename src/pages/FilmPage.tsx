import { getAuth } from '@firebase/auth'
import { doc } from '@firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDocument } from 'react-firebase-hooks/firestore'
import { useParams } from 'react-router-dom'

import { useGetFilmByIdQuery } from '../api'
import { AddToFavouritesButton } from '../components/buttons/AddToFavouritesButton'
import { DeleteFromFavouritesButton } from '../components/buttons/DeleteFromFavouritesButton'
import { Header } from '../components/Header'
import { SearchPanel } from '../components/SearchPanel'
import { db, isFavouriteById } from '../firebase'
import LoadingPage from './LoadingPage'

export default function FilmPage() {
  const { id } = useParams()

  // получаем данные с API
  const { data: film, isLoading: filmIsLoading } = useGetFilmByIdQuery(id, {
    skip: !id,
  })

  // получаем пользователя
  const [user] = useAuthState(getAuth())

  const [data] = useDocument(doc(db, '/users', `/${user?.email}`))

  if (filmIsLoading) return <LoadingPage />

  return film ? (
    <div className="flex flex-col">
      <Header />
      <SearchPanel />
      <div className="flex gap-5 py-2 h-1/3 mt-5 mx-40 justify-around">
        <img src={film?.poster?.url} alt="Изображение недоступно"></img>
        <div className="flex flex-col justify-between">
          <span>{`Название: ${film.name}`}</span>
          <div>{`Описание: ${film.description}`}</div>
          <div>{`Год: ${film.year}`}</div>
          {!isFavouriteById(id, user?.email, data, film) ? (
            <AddToFavouritesButton
              id={id}
              name={film.name}
              description={film.description}
              poster={film.poster?.url}
              year={film.year}
            ></AddToFavouritesButton>
          ) : (
            <DeleteFromFavouritesButton
              id={id}
              name={film.name}
              description={film.description}
              poster={film.poster?.url}
              year={film.year}
            />
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col">
      <Header />
      <SearchPanel />
    </div>
  )
}
