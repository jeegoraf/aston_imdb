import { ErrorBoundary } from 'react-error-boundary'

import { type FilmShort, type Response } from '../types/types'
import { FilmCard } from './FilmCard'

export function FilmsList(props: { films: Response | { docs: FilmShort[] } }) {
  const films = props.films?.docs?.map((film) => {
    return (
      <FilmCard
        key={film.id}
        name={film.name}
        id={film.id}
        description={film.description}
        year={film.year}
        poster={film.poster}
      ></FilmCard>
    )
  })
  return (
    <ErrorBoundary
      fallback={
        <div className="flex flex-col justify-center items-center text-4xl text-gray pt-[20vh]">
          Nothing found :(
        </div>
      }
    >
      <div className="grid gap-5 grid-cols-4 pt-10">{films}</div>
    </ErrorBoundary>
  )
}
