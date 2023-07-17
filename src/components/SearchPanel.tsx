import { useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import { useLazyGetFilmsByKeywordQuery } from '../api'
import { type FilmShort } from '../types/Film'
export function SearchPanel() {
  const [items, setItems] = useState<FilmShort[]>([])
  const [getFilmsByKeyword] = useLazyGetFilmsByKeywordQuery()

  const handleOnSearch = (keyWord: string) => {
    getFilmsByKeyword(keyWord).then((response) => {
      const res = response.data.docs.map((item: any) => {
        const film: FilmShort = {
          id: item.id,
          name: item.name,
          description: item.description,
          year: item.year
        }
        return film
      })
      setItems(res)
    }).catch((err) => { alert(err.message) })
  }

  const formatResult = (item: FilmShort) => {
    const description = item.description ? item.description.slice(0, 18).concat('...') : 'Описание недоступно'

    return (
      <div className='flex justify-between pr-5'>
        <div>{item.name}</div>
        <div>{description}</div>
        <div>{item.year}</div>
      </div>
    )
  }

  return (
    <div className='pt-2 px-40'>
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
