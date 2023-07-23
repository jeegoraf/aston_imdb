import {getAuth} from '@firebase/auth'
import {useEffect} from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useDispatch} from 'react-redux'

import {setUser} from '../store/slices/userSlice'

export function useSyncFirebase () {
  // здесь мы проверяем, авторизован ли пользователь на сервере ...
  const [user, loading] = useAuthState(getAuth())

  const dispatch = useDispatch()

  // ... и синхронизируем redux store
  useEffect(() => {
    if (user) {
      user
        .getIdToken()
        .then((result) => {
          dispatch(
            setUser({
              email: user.email,
              token: result,
              id: user.uid
            })
          )
        })
        .catch((err) => {
          alert(err)
        })
    }
  }, [user])

  return [user, loading]
}
