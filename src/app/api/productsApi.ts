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
    getAllProducts: build.query({
      query: ({ limit, skip }: { limit?: number; skip?: number }) => {
        let url = '/products';
        if (limit !== undefined) {
          url += `?limit=${limit}`;
        }
        if (skip !== undefined) {
          url += limit !== undefined ? `&skip=${skip}` : `?skip=${skip}`;
        }

        return {
          url,
          method: 'GET',
        };
      },
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
  useGetAllProductsQuery,
} = productsApi;
