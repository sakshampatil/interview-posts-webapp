import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
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
    listComments: builder.query({
      query: (search) => ({
        url: `comments/listComments?search=${search}`,
      }),
    }),
    createComment: builder.mutation({
      query: (body) => ({
        url: `comments/createComment`,
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useListCommentsQuery, useCreateCommentMutation } = commentsApi;
