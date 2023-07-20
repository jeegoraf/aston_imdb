import {type User} from './types/types'

export const setUserToSessionStorage = (user: User) => {
  try {
    sessionStorage.setItem('user', JSON.stringify(user))
  } catch (err) {
    alert(err)
  }
}

export const removeUserFromSessionStorage = (key: string) => {
  try {
    sessionStorage.removeItem('user')
  } catch (err) {
    alert(err)
  }
}

export const loadUserFromSessionStorage = () => {
  try {
    const stateStr = sessionStorage.getItem('user')
    return stateStr ? JSON.parse(stateStr) : undefined
  } catch (err) {
    alert(err)
    return undefined
  }
}
