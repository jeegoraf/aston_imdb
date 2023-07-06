import { Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { SignInPage } from './pages/SignInPage'

export function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}>
          <Route path="/signin" element={<SignInPage></SignInPage>}></Route>
        </Route>
      </Routes>
    </div>
  )
}
