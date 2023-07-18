import { Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { RegisterPage } from './pages/RegisterPage'
import { SearchPage } from './pages/SearchPage'
import { SignInPage } from './pages/SignInPage'

export function App(): JSX.Element {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signin" element={<SignInPage />}></Route>
        <Route path="/signup" element={<RegisterPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
      </Routes>
    </div>
  )
}
