export interface FilmShort {
  id: number
  name: string
  description: string
  year: number
  poster?: Poster
}

export interface Poster {
  url: string | undefined
  previewUrl: string | undefined
}

export interface Response {
  docs: FilmShort[] | null | undefined
  total: number
  limit: number
  page: number
  pages: number
}

export interface User {
  email: string | null
  token: string | null
  id: string | null
}

export interface AuthUser extends User {
  isAuth: boolean | null
}
