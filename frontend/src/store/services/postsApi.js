import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = JSON.parse(localStorage.getItem("user") || "").token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
    },
  }),
  endpoints: (builder) => ({
    listPosts: builder.query({
      query: (search) => ({
        url: `posts/listPosts?search=${search}`,
      }),
    }),
  }),
});

export const { useListPostsQuery } = postsApi;
