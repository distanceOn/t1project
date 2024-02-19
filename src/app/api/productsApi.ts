import { baseApi } from './baseApi';

export const integrationsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getCategories: build.query({
      query: () => ({
        url: `/products/categories`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = integrationsApi;
