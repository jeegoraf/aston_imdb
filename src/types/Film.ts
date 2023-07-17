export interface FilmShort {
  id: number
  name: string
  description: string
  year: number
  poster?: Poster
}

interface Poster {
  url: string
  previewUrl: string
}

export interface Response {
  docs: FilmShort[] | null
  total: number
  limit: number
  page: number
  pages: number
}
