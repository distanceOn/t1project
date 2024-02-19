import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
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
  },
});

export const { setCategories } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
