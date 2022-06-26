import { createSlice } from '@reduxjs/toolkit';
import { products } from './products-data.js';

const initialState = {
  products,
  showCart: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    displayCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const { displayCart } = productsSlice.actions;

export default productsSlice.reducer;
