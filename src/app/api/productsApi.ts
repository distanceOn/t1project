import { baseApi } from './baseApi';

export const productsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getCategories: build.query({
      query: () => ({
        url: `/products/categories`,
        method: 'GET',
      }),
    }),
    getProducts: build.query({
      query: ({
        category,
        limit,
        skip,
      }: {
        category?: string;
        limit?: number;
        skip?: number;
      }) => {
        let url = '/products';
        if (category) {
          url = `${url}/category/${category}`;
        }
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
  useGetSingleProductQuery,
  useGetProductsQuery,
} = productsApi;
