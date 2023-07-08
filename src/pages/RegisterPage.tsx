import { Header } from '../components/Header'
import { Register } from '../components/Register'

export function RegisterPage(): JSX.Element {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <Register></Register>
    </div>
  )
}
