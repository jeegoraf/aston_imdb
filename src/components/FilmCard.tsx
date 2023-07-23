import { getAuth } from 'firebase/auth'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

import { updateHistory } from '../firebase'
import { type FilmShort } from '../types/types'

export function FilmCard(props: FilmShort) {
  const [id, setId] = useState(props.id)

  const [user, userLoading, userError] = useAuthState(getAuth())

  // запрос к API по разным адресам возвращает объекты разного вида, поэтому нужна проверка
  const imgURL =
    typeof props.poster === 'object' ? props.poster?.url : props.poster

  const navigate = useNavigate()

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (user) updateHistory(user?.email, `/film/${id}`)
    navigate(`/film/${id}`)
  }

  return (
    <div
      className="border-solid border-2 rounded-lg border-gray bg-beige flex flex-col gap-1 justify-between items-center w-1/2 mx-auto p-2"
      onClick={handleClick}
    >
      <span>{props.name}</span>
      <img src={imgURL} alt="Изображение недоступно"></img>
      <span>{props.year}</span>
    </div>
  )
}
