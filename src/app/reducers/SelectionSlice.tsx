import { createSlice } from '@reduxjs/toolkit';

type SelectionState = {
  selected: string[];
  total: any[];
  step: 1 | 2;
};

const initialState: SelectionState = {
  selected: [],
  total: [],
  step: 1,
};

export const selectionSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    addSelected: (state, action) => {
      if (state.selected.length < 3) {
        if (action.payload) {
          state.selected = [...state.selected, action.payload];
        }
      }
    },
    removeSelected: (state, action) => {
      if (action.payload) {
        state.selected = state.selected.filter(item => item !== action.payload);
      }
    },
    changeStep: (state, action) => {
      if (action.payload) {
        state.step = action.payload;
      }
    },
    setTotal: (state, action) => {
      if (action.payload) {
        state.total = action.payload;
      }
    },
  },
});

export const { addSelected, removeSelected, changeStep, setTotal } =
  selectionSlice.actions;

export const selectionSliceReducer = selectionSlice.reducer;
