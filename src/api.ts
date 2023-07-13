import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const requestHeaders = {
  'X-API-KEY': process.env.REACT_APP_KINOPOISK_UO_API_KEY,
  'Content-Type': 'application/json'
}

const createRequest = (url: string) => ({ url, headers: requestHeaders })

export const filmAPI = createApi({
  reducerPath: 'filmAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://kinopoiskapiunofficial.tech/' }),
  endpoints: (build) => ({
    getFilmsByKeyword: build.query({
      query: (keyword: string) => createRequest(`api/v2.1/films/search-by-keyword?keyword=${keyword}&page=1`)
    })
  })
})

export const { useLazyGetFilmsByKeywordQuery } = filmAPI
