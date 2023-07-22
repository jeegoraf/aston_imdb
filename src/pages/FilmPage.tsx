import { useParams } from 'react-router-dom'

import { useGetFilmByIdQuery } from '../api'
import { AddToFavouritesButton } from '../components/buttons/AddToFavouritesButton'
import { Header } from '../components/Header'
import { SearchPanel } from '../components/SearchPanel'
import { useAuth } from '../hooks/useAuth'
import { LoadingPage } from './LoadingPage'

export function FilmPage() {
  const { id } = useParams()

  const { isAuth } = useAuth()

  const { data, error, isLoading } = useGetFilmByIdQuery(id, {
    skip: !id,
  })

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
          {isAuth ? (
            <AddToFavouritesButton
              name={data.name}
              description={data.description}
              year={data.year}
              poster={data?.poster?.url}
              id={id}
            />
          ) : (
            ''
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
