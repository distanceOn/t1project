import { createSlice } from '@reduxjs/toolkit';

type SelectionState = {
  selected: string[];
};

const initialState: SelectionState = {
  selected: [],
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
  },
});

export const { addSelected, removeSelected } = selectionSlice.actions;

export const selectionSliceReducer = selectionSlice.reducer;
