import { useState } from 'react'

import { type FilmShort } from '../types/types'

export function FilmCard(props: FilmShort) {
  // запрос к API по разным адресам возвращает объекты разного вида, поэтому нужна проверка

  const [id, setId] = useState(props.id)
  const imgURL = typeof props.poster === 'object' ? props.poster?.url : props.poster

  return (
        <div className='border-solid border-2 rounded-lg border-gray bg-beige flex flex-col gap-1 justify-between items-center w-1/2 mx-auto p-2'>
            <span>{props.name}</span>
            <img src={imgURL} alt='Изображение недоступно'></img>
            <span>{props.year}</span>
        </div>
  )
}
