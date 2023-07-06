import { Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/HomePage'

export function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  )
}
