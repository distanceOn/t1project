import { configureStore } from '@reduxjs/toolkit';
import { productsCategoryReducer } from './reducers/ProductsCategorySlice';
import { baseApi } from './api/baseApi';
import { productsStaffReducer } from './reducers/ProductsStaffSlice';

export const appStore = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    productsCategory: productsCategoryReducer,
    productsStaff: productsStaffReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;
