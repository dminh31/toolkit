import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer/counterSlice'
import cartSlice from './reducer/cartSlice'
import productSlice from './reducer/productSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cartSlice: cartSlice,
    productSlice
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch