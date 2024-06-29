import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import billReducer from './billSlice'
import authReduer from './AuthSlice'
export const store = configureStore({
  reducer: {
    cart:cartReducer,
    bill:billReducer,
    auth:authReduer
  },
})