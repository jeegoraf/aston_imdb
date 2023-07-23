import { Header } from '../components/Header'
import { Register } from '../components/Register'

export default function RegisterPage(): JSX.Element {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Register />
    </div>
  )
}
