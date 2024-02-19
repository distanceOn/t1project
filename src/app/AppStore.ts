import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './reducers/ProductsSlice';
import { baseApi } from './api/baseApi';

export const appStore = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    products: productsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;
