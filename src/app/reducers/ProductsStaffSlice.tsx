import { createSlice } from '@reduxjs/toolkit';

type StaffState = {
  staffProducts: any[];
  total: number;
  showedProducts: number;
  skip: number;
};

const initialState: StaffState = {
  staffProducts: [],
  total: 0,
  showedProducts: 9,
  skip: 0,
};

export const productsStaffSlice = createSlice({
  name: 'productsStaff',
  initialState,
  reducers: {
    setStaffProducts: (state, action) => {
      if (action.payload) {
        if (state.staffProducts.length === 0) {
          state.staffProducts = action.payload;
        } else {
          state.staffProducts = [...state.staffProducts, ...action.payload];
        }
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
    setSkip: (state, action) => {
      if (action.payload) {
        state.skip = action.payload;
      }
    },
    resetAll: () => initialState,
  },
});

export const {
  setStaffProducts,
  setTotal,
  setShowedProducts,
  setSkip,
  resetAll,
} = productsStaffSlice.actions;

export const productsStaffReducer = productsStaffSlice.reducer;
