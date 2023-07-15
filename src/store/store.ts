import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { filmAPIUO } from '../api'
import { userReducer } from './slices/userSlice'

const rootReducer = combineReducers({
  user: userReducer,
  [filmAPIUO.reducerPath]: filmAPIUO.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(filmAPIUO.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
