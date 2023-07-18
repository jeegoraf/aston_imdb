import { type FilmShort } from '../types/types'

export function FilmCard(props: FilmShort) {
  const imgURL = props.poster ? props.poster.url : ''
  return (
        <div className='border-solid border-2 rounded-lg border-gray bg-beige flex flex-col gap-1 justify-between items-center w-1/2 mx-auto p-2'>
            <span>{props.name}</span>
            <img src={imgURL} alt='Изображение недоступно'></img>
            <span>{props.year}</span>
        </div>
  )
}
