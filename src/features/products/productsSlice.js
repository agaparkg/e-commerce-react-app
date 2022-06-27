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
      let cartProduct = state.cartProducts.find(
        (cp) => cp.id === action.payload
      );
      if (cartProduct) {
        cartProduct.count++;
      } else {
        cartProduct = product;
        cartProduct['count'] = 1;
        state.cartProducts.push(product);
      }
    },
    removeProductFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (cp) => cp.id !== action.payload
      );
    },
    increaseCartProductCount: (state, action) => {
      state.cartProducts.forEach((cp) => {
        if (cp.id === action.payload) {
          cp.count++;
        }
      });
    },
    decreaseCartProductCount: (state, action) => {
      state.cartProducts.forEach((cp) => {
        if (cp.id === action.payload) {
          cp.count--;
        }
      });
    },
  },
});

export const {
  displayCart,
  addProductToCart,
  removeProductFromCart,
  increaseCartProductCount,
  decreaseCartProductCount,
} = productsSlice.actions;

export default productsSlice.reducer;
