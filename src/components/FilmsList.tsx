import { useContext } from 'react'

import { FilmsContext } from '../pages/HomePage'
import { FilmCard } from './FilmCard'

export function FilmsList() {
  const films = useContext(FilmsContext).docs?.map((film) => {
    return <FilmCard key={film.id} name={film.name} id={film.id} description={film.description} year={film.year} poster={film.poster}></FilmCard>
  })
  return <div className='grid gap-5 grid-cols-4 pt-10'>{films}</div>
}
