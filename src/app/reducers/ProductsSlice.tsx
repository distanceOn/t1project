import { createSlice } from '@reduxjs/toolkit';

type ProductsState = {
  products: any[];
  total: number;
  skip: number;
  categories: any[];
  selectedCategory: string;
  selectedCategoryQuery: string;
};

const initialState: ProductsState = {
  products: [],
  total: 0,
  skip: 0,
  categories: [],
  selectedCategory: 'smartphones',
  selectedCategoryQuery: 'smartphones',
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
  },
});

export const {
  setData,
  setCategories,
  setSelectedCategory,
  setSelectedCategoryQuery,
  setSkip,
} = productsSlice.actions;

export const productsSliceReducer = productsSlice.reducer;
