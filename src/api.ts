import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const requestHeaders = {
  'X-API-KEY': process.env.REACT_APP_KINOPOISK_API_KEY,
  'Content-Type': 'application/json'
}

const createRequest = (url: string) => ({ url, headers: requestHeaders })

export const filmAPI = createApi({
  reducerPath: 'filmAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://kinopoiskapiunofficial.tech/api' }),
  endpoints: (build) => ({
    fetchFiveByQuery: build.query({
      query: (keyword: string) => createRequest(`/search-by-keyword?keyword=${keyword}&page=1`)
    })
  })
})
