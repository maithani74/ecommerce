import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice.jsx'

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
