import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  categoryProducts: [],
  selectedCategory: 'smartphones',
  total: 0,
  showedProducts: 2,
};

export const productsCategorySlice = createSlice({
  name: 'productsCategory',
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
    setTotal: (state, action) => {
      if (action.payload) {
        state.total = action.payload;
      }
    },
    setShowedProducts: (state, action) => {
      if (action.payload) {
        state.showedProducts = action.payload;
      }
    },
  },
});

export const {
  setCategories,
  setCategoryProducts,
  setSelectedCategory,
  setTotal,
  setShowedProducts,
} = productsCategorySlice.actions;

export const productsCategoryReducer = productsCategorySlice.reducer;
