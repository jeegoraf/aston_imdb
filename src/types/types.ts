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
