import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  categoryProducts: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      if (action.payload) {
        state.categories = action.payload;
      }
    },
    setCategoryProducts: (state, action) => {
      if (action.payload) {
        state.categoryProducts = action.payload;
      }
    },
  },
});

export const { setCategories, setCategoryProducts } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
