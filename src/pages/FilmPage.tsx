import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useGetFilmByIdQuery } from '../api'
import { AddToFavouritesButton } from '../components/AddToFavouritesButton'
import { Header } from '../components/Header'
import { SearchPanel } from '../components/SearchPanel'
import { LoadingPage } from './LoadingPage'

export function FilmPage() {
  const { id } = useParams()

  const definedId = id ?? ''

  const { data, error, isLoading } = useGetFilmByIdQuery(definedId)

  if (isLoading) return <LoadingPage />

  return data ? (
    <div className="flex flex-col">
      <Header />
      <SearchPanel />
      <div className="flex gap-5 py-2 h-1/3 mt-5 mx-40 justify-around">
        <img src={data?.poster?.url} alt="Изображение недоступно"></img>
        <div className="flex flex-col justify-between">
          <span>{`Название: ${data.name}`}</span>
          <div>{`Описание: ${data.description}`}</div>
          <div>{`Год: ${data.year}`}</div>
          <AddToFavouritesButton id={definedId} />
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
