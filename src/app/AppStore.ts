import { configureStore } from '@reduxjs/toolkit';
// import { productsCategoryReducer } from './reducers/ProductsCategorySlice';
import { baseApi } from './api/baseApi';
import { productsSliceReducer } from './reducers/ProductsSlice';

export const appStore = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    products: productsSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;
