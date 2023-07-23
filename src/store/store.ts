import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { filmAPI } from '../api'
import { userReducer } from './slices/userSlice'

const rootReducer = combineReducers({
  user: userReducer,
  [filmAPI.reducerPath]: filmAPI.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(filmAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
