import {configureStore} from '@reduxjs/toolkit'
import {peepApi} from './services/peepApi';

export const store = configureStore({
  reducer: {
    [peepApi.reducerPath]: peepApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(peepApi.middleware)
})