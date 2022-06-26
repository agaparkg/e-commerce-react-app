import { createSlice } from '@reduxjs/toolkit';
import { products } from './products-data.js';

const initialState = {
  products,
  filteredProducts: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    sendId: (state, action) => {},
    filterProducts: (state, action) => {
      state.filteredProducts = state.products.filter(
        (p) => p.fields.price < action.payload.price
      );
    },
  },
});

export const selectAllProducts = (state) => state.productsState.products;

export const { sendId, filterProducts } = productsSlice.actions;

export default productsSlice.reducer;
