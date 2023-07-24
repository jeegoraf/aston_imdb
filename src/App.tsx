import React, {
  type Dispatch,
  lazy,
  type SetStateAction,
  Suspense,
  useMemo,
  useState,
} from 'react'
import { Route, Routes } from 'react-router-dom'

import LoadingPage from './pages/LoadingPage'

const HomePage = lazy(async () => await import('./pages/HomePage'))
const SignInPage = lazy(async () => await import('./pages/SignInPage'))
const RegisterPage = lazy(async () => await import('./pages/RegisterPage'))
const SearchPage = lazy(async () => await import('./pages/SearchPage'))
const FilmPage = lazy(async () => await import('./pages/FilmPage'))
const FavouritesPage = lazy(async () => await import('./pages/FavouritesPage'))
const HistoryPage = lazy(async () => await import('./pages/HistoryPage'))

interface IThemeContext {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}

export const ThemeContext = React.createContext<IThemeContext>({
  theme: '',
  setTheme: () => {},
})

export function App(): JSX.Element {
  const [theme, setTheme] = useState('bg-sky-900')

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  )
  return (
    <ThemeContext.Provider value={contextValue}>
      <div className="h-screen">
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/signin" element={<SignInPage />}></Route>
            <Route path="/signup" element={<RegisterPage />}></Route>
            <Route path="/search/:keyWord?" element={<SearchPage />}></Route>
            <Route path="/film/:id" element={<FilmPage />}></Route>
            <Route path="/favourites" element={<FavouritesPage />}></Route>
            <Route path="/history" element={<HistoryPage />}></Route>
          </Routes>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  )
}
