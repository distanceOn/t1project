import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://dummyjson.com`,
    prepareHeaders: headers => headers,
  }),

  endpoints: () => ({}),
});
