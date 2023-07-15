import { useCallback, useState } from 'react'
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

  const handleOnSearch = useCallback((keyWord: string) => {
    const copy: Film[] = []
    getFilmsByKeyword(keyWord).then((response) => {
      response.data.docs.forEach((item: any) => {
        const film: Film = {
          id: item.id,
          name: item.name,
          description: item.description,
          year: item.year
        }
        copy.push(film)
      })
      setItems(copy)
    }).catch((err) => { alert(err.message) })
  }, [getFilmsByKeyword])

  const formatResult = (item: Film) => {
    return (
      <div className='flex justify-between pr-5'>
        <div>{item.name}</div>
        <div>{item.description?.slice(0, 18).concat('...') || 'Описание недоступно'}</div>
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
