import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  staffProducts: [],
  total: 0,
  showedProducts: 2,
};

export const productsStaffSlice = createSlice({
  name: 'productsStaff',
  initialState,
  reducers: {
    setStaffProducts: (state, action) => {
      if (action.payload) {
        state.staffProducts = action.payload;
      }
    },
  },
});

export const { setStaffProducts } = productsStaffSlice.actions;

export const productsStaffReducer = productsStaffSlice.reducer;
