import { createSlice } from '@reduxjs/toolkit';

type ProductsState = {
  products: any[];
  total: number;
  skip: number;
  limit: number;
  categories: any[];
  selectedCategory: string;
  selectedCategoryQuery: string;
  query:
    | { search: string }
    | {
        limit: number;
        skip: number;
      }
    | { category: string; limit: number; skip: number };
  searchQuery: string;
};

const initialState: ProductsState = {
  products: [],
  total: 0,
  skip: 0,
  limit: 9,
  categories: [],
  selectedCategory: 'smartphones',
  selectedCategoryQuery: 'smartphones',
  query: { limit: 9, skip: 0 },
  searchQuery: '',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setData: (state, action) => {
      if (action.payload) {
        if (state.skip === 0) {
          state.products = action.payload.products;
        } else {
          state.products = [...state.products, ...action.payload.products];
        }
        state.total = action.payload.total;
      }
    },

    setQuery: (state, action) => {
      if (action.payload) {
        state.query = action.payload;
      }
    },

    setCategories: (state, action) => {
      if (action.payload) {
        state.categories = action.payload;
      }
    },
    setSkip: (state, action) => {
      if (action.payload) {
        state.skip = action.payload;
      }
    },
    setSelectedCategory: (state, action) => {
      if (action.payload) {
        state.selectedCategory = action.payload;
      }
    },
    setSelectedCategoryQuery: (state, action) => {
      if (action.payload) {
        state.skip = 0;
        state.selectedCategoryQuery = action.payload;
      }
    },
    setSearchQuery: (state, action) => {
      state.products = [];
      state.total = 0;
      state.searchQuery = action.payload.trim();
    },
    resetState: () => {
      return initialState;
    },
  },
});

export const {
  setData,
  setCategories,
  setSelectedCategory,
  setSelectedCategoryQuery,
  setSkip,
  setQuery,
  resetState,
  setSearchQuery,
} = productsSlice.actions;

export const productsSliceReducer = productsSlice.reducer;
