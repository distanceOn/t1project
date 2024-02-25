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
        search,
      }: {
        category?: string;
        limit?: number;
        skip?: number;
        search?: string;
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
        if (search !== undefined && search !== '' && search !== null) {
          url = url + `/search?q=${search}`;
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
    updateProduct: build.mutation({
      query: ({ id, data }) => ({
        url: `/products/${Number(id)}`,
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetSingleProductQuery,
  useGetProductsQuery,
  useUpdateProductMutation,
} = productsApi;
