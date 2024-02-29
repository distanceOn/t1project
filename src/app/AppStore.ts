import { configureStore } from '@reduxjs/toolkit';
// import { productsCategoryReducer } from './reducers/ProductsCategorySlice';
import { baseApi } from './api/baseApi';
import { productsSliceReducer } from './reducers/ProductsSlice';
import { selectionSliceReducer } from './reducers/SelectionSlice';

export const appStore = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    products: productsSliceReducer,
    selection: selectionSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;
