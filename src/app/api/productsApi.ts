import { baseApi } from './baseApi';

export const productsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getCategories: build.query({
      query: () => ({
        url: `/products/categories`,
        method: 'GET',
      }),
    }),
    getProductsByCategory: build.query({
      query: (category: string) => ({
        url: `/products/category/${category}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useGetProductsByCategoryQuery } =
  productsApi;
