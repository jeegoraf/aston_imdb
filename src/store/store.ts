import {combineReducers, configureStore, createListenerMiddleware} from '@reduxjs/toolkit'

import {filmAPI} from '../api'
import {removeUser, setUser, userReducer} from './slices/userSlice'

const rootReducer = combineReducers({
  user: userReducer,
  [filmAPI.reducerPath]: filmAPI.reducer
})

const setUserMiddleware = createListenerMiddleware()

const removeUserMiddleware = createListenerMiddleware()

setUserMiddleware.startListening({
  actionCreator: setUser,
  effect: (action) => {
    console.log(`${action.payload.email} just set in user store`)
  }
})

removeUserMiddleware.startListening({
  actionCreator: removeUser,
  effect: () => {
    console.log('user store is clear now')
  }
})
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(removeUserMiddleware.middleware).prepend(setUserMiddleware.middleware).concat(filmAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
