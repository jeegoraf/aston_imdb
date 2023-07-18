import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useLazyGetFilmsByKeywordQuery } from '../api'
import { FilmsList } from '../components/FilmsList'
import { Header } from '../components/Header'
import { SearchPanel } from '../components/SearchPanel'
import { type Response } from '../types/types'

export function SearchPage() {
  const { keyWord } = useParams()

  const defaultValue: Response = {
    docs: null,
    total: 0,
    limit: 0,
    page: 0,
    pages: 0
  }

  const [items, setItems] = useState<Response>(defaultValue)

  const [getFilmsByKeyword] = useLazyGetFilmsByKeywordQuery()

  useEffect(() => {
    getFilmsByKeyword({ keyWord: keyWord ?? '', page: 1, count: 24 }).then((response) => {
      const definedResponse = response.data ?? defaultValue
      setItems(definedResponse)
    }).catch((err) => { alert(err.message) })
  }, [keyWord])

  return (
    <div className="flex flex-col">
        <Header />
        <SearchPanel />
        <FilmsList films={items} />
    </div>
  )
}
