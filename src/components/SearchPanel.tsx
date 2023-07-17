import { useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import { useLazyGetFilmsByKeywordQuery } from '../api'

interface Film {
  id: number
  name: string
  description: string
  year: number
}

export function SearchPanel() {
  const [items, setItems] = useState<Film[]>([])
  const [getFilmsByKeyword] = useLazyGetFilmsByKeywordQuery()

  const handleOnSearch = (keyWord: string) => {
    getFilmsByKeyword(keyWord).then((response) => {
      const res = response.data.docs.map((item: any) => {
        const film: Film = {
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

  const formatResult = (item: Film) => {
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
