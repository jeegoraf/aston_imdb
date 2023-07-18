import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { type FilmShort, type Response } from './types/types'

const requestHeaders = {
  'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_KEY,
  'Content-Type': 'application/json'
}

const createRequest = (url: string) => ({ url, headers: requestHeaders })

// API для тестирования, так как количество запросов ограничено
export const filmAPIUO = createApi({
  reducerPath: 'filmAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://kinopoiskapiunofficial.tech/' }),
  endpoints: (build) => ({
    getFilmsByKeyword: build.query({
      query: (keyword: string) => createRequest(`api/v2.1/films/search-by-keyword?keyword=${keyword}&page=1`)
    })
  })
})

export const filmAPI = createApi({
  reducerPath: 'filmAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.kinopoisk.dev/' }),
  endpoints: (build) => ({
    getFilmsByKeyword: build.query<Response, { keyWord: string, page: number, count: number }>({
      query: (arg) => createRequest(`v1.2/movie/search?page=${arg.page}&limit=${arg.count}&query=${arg.keyWord}`),
      transformResponse: (response: Response) => {
        const films = response.docs?.map((film) => {
          const filmShort: FilmShort = {
            id: film.id,
            name: film.name,
            description: film.description,
            year: film.year,
            poster: film.poster
          }
          return filmShort
        })
        const result: Response = {
          docs: films,
          total: response.total,
          limit: response.limit,
          page: response.page,
          pages: response.pages
        }
        return result
      }
    }),
    getTop24: build.query<Response, void>({
      query: () => createRequest('v1.3/movie?page=1&limit=24&selectFields=id&selectFields=name&selectFields=description&selectFields=year&selectFields=poster')
    })
  })
})

export const { useLazyGetFilmsByKeywordQuery, useGetTop24Query } = filmAPI
