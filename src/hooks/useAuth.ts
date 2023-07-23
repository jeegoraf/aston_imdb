import { type AuthUser } from '../types/types'
import { useAppSelector } from './hooks'

// хук, возвращающий данные о текущей авторизации
export function useAuth (): AuthUser {
  const { email, token, id } = useAppSelector(state => state.user)

  return {
    isAuth: !!email,
    email,
    token,
    id
  }
}
