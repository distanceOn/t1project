import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  categoryProducts: [],
  selectedCategory: 'smartphones',
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
    setSelectedCategory: (state, action) => {
      if (action.payload) {
        state.selectedCategory = action.payload;
      }
    },
  },
});

export const { setCategories, setCategoryProducts, setSelectedCategory } =
  productsSlice.actions;

export const productsReducer = productsSlice.reducer;
