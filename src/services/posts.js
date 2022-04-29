import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://blog-virtus-it.herokuapp.com/api/' }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `/posts`,
      providesTags: ['Posts'],
    }),
    createPost: builder.mutation({
      query: (message) => ({
        url: `/posts`,
        method: 'POST',
        body: {
          body: message,
        },
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
})

export const { useGetPostsQuery, useCreatePostMutation } = postsApi;