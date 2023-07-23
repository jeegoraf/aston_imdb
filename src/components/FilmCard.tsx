import { doc } from '@firebase/firestore'
import { getAuth } from 'firebase/auth'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDocument } from 'react-firebase-hooks/firestore'
import { useNavigate } from 'react-router-dom'

import { useGetFilmByIdQuery } from '../api'
import { db, isFavouriteById } from '../firebase'
import { type FilmShort } from '../types/types'
import { AddToFavouritesButton } from './buttons/AddToFavouritesButton'
import { DeleteFromFavouritesButton } from './buttons/DeleteFromFavouritesButton'

export function FilmCard(props: FilmShort) {
  const [id] = useState(props.id)

  const [user] = useAuthState(getAuth())

  // получаем данные с API
  const { data: film } = useGetFilmByIdQuery(id.toString(), {
    skip: !id,
  })

  const [data] = useDocument(doc(db, '/users', `/${user?.email}`))

  // запрос к API по разным адресам возвращает объекты разного вида, поэтому нужна проверка
  const imgURL =
    typeof props.poster === 'object' ? props.poster?.url : props.poster

  const navigate = useNavigate()

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    navigate(`/film/${id}`)
  }

  return (
    <div className="border-solid border-2 rounded-lg border-gray bg-beige flex flex-col gap-1 justify-between items-center w-1/2 mx-auto p-2">
      <span>{props.name}</span>
      <img
        src={imgURL}
        alt="Изображение недоступно"
        onClick={handleClick}
      ></img>
      <span>{props.year}</span>
      {!isFavouriteById(id.toString(), user?.email, data, film) ? (
        <AddToFavouritesButton
          id={props.id.toString()}
          name={props.name}
          description={props.description}
          poster={props.poster?.url}
          year={props.year}
        ></AddToFavouritesButton>
      ) : (
        <DeleteFromFavouritesButton
          id={props.id.toString()}
          name={props.name}
          description={props.description}
          poster={props.poster?.url}
          year={props.year}
        />
      )}
    </div>
  )
}
