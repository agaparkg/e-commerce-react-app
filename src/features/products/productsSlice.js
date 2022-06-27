import { createSlice } from '@reduxjs/toolkit';
import { products } from './products-data.js';

const initialState = {
  products,
  showCart: false,
  cartProducts: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    displayCart: (state) => {
      state.showCart = !state.showCart;
    },
    addProductToCart: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      state.cartProducts.push(product);
    },
    removeProductFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (cp) => cp.id !== action.payload
      );
    },
  },
});

export const { displayCart, addProductToCart, removeProductFromCart } =
  productsSlice.actions;

export default productsSlice.reducer;
