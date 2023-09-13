import { configureStore, createReducer } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice.jsx'
import authReducer from '../features/auth/authSlice'
import cartReducer from '../features/cart/CartSlice.js'
import orderReducer from '../features/order/orderSlice.js'
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth:authReducer,
    cart:cartReducer,
    order:orderReducer
  },
});
