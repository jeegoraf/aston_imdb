import { useEffect, useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import { useLazyGetFilmsByKeywordQuery } from '../api'

interface Film {
  id: number
  name: string
  shortDescription: string
  description: string
  year: number
  rating: number
  poster: string | null
}

interface FilmRu {
  id: number
  name: string
  description: string
  year: number
}

export function SearchPanel(): JSX.Element {
  const [keyWord, setKeyWord] = useState('')
  const [items, setItems] = useState<FilmRu[]>([])

  const [getFilmsByKeyword, results] = useLazyGetFilmsByKeywordQuery()

  useEffect(() => {
    const copy = Object.assign([], items)
    getFilmsByKeyword(keyWord).then((response) => {
      response.data.films.forEach((item: any) => {
        const film: FilmRu = {
          id: item.filmId,
          name: item.nameRu,
          description: item.description,
          year: item.year
        }
        copy.push(film)
      })
      setItems(copy)
    }).catch((err) => { console.error(err) })

    // заполнение массива будет происходить в onSearch
    // самому дебаунс писать не нужно!!
    // data.docs.forEach((item: any) => {
    //   const film: Film = {
    //     id: item.id,
    //     name: item.name,
    //     shortDescription: item.shortDescription,
    //     description: item.description,
    //     year: item.year,
    //     rating: item.rating,
    //     poster: item.poster
    //   }
    //   films.push(item)
    // })
    // setItems(films)
  }, [keyWord])

  const handleOnSearch = (keyWord: string) => {
    setKeyWord(keyWord)
    console.log(items)
  }

  const formatResult = (item: FilmRu) => {
    return (
      <div className='flex justify-between pr-5'>
        <div>{item.name}</div>
        <div>{item.description?.slice(0, 180).concat('...') || 'Описание недоступно'}</div>
        <div>{item.year}</div>
      </div>
    )
  }

  return (
    <div className='pt-2 px-2'>
      <ReactSearchAutocomplete
        items={items}
        onSearch={handleOnSearch}
        autoFocus
        formatResult={formatResult}
        inputDebounce={1000}
      />
  </div>

  )
}
