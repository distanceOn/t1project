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
    getSingleProduct: build.query({
      query: (id: string | undefined) => ({
        url: `/products/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetSingleProductQuery,
} = productsApi;
