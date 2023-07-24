import { getAuth } from 'firebase/auth'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import { useLazyGetFilmsByKeywordQuery } from '../api'
import { updateHistory } from '../firebase'
import { type FilmShort } from '../types/types'

export function SearchPanel() {
  const [items, setItems] = useState<FilmShort[]>([])
  const [input, setInput] = useState<string>('')
  const [getFilmsByKeyword] = useLazyGetFilmsByKeywordQuery()

  const [user] = useAuthState(getAuth())

  const navigate = useNavigate()

  // функция обработки для саджестов
  const handleOnSearch = (keyWord: string) => {
    setInput(keyWord)
    getFilmsByKeyword({ keyWord, page: 1, count: 10 })
      .then((response) => {
        const res = response.data?.docs?.map((item: FilmShort) => {
          const film: FilmShort = {
            id: item.id,
            name: item.name,
            description: item.description,
            year: item.year,
          }
          return film
        })
        setItems(res ?? [])
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  // обработка нажатия на кнопку поиска
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (user) updateHistory(user?.email, `/search/${input}`)
    navigate(`/search/${input}`)
  }

  const handleSelect = (item: FilmShort) => {
    navigate(`/film/${item.id}`)
  }

  const formatResult = (item: FilmShort) => {
    const description = item.description
      ? item.description.slice(0, 18).concat('...')
      : 'Описание недоступно'

    return (
      <div className="flex justify-between pr-5">
        <div>{item.name}</div>
        <div>{description}</div>
        <div>{item.year}</div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2 justify-center pt-2 px-40">
      <ReactSearchAutocomplete
        items={items}
        onSearch={handleOnSearch}
        onSelect={handleSelect}
        autoFocus
        formatResult={formatResult}
        inputDebounce={1000}
        placeholder="What are you looking for?"
      />
      <button
        className="bg-beige h-14 rounded-xl text-xl"
        onClick={handleClick}
      >
        FIND
      </button>
    </div>
  )
}
