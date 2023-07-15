/* eslint-disable prettier/prettier */
import { api } from '../../components/api/apiSlice';
const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['book'],
    }),
    addBook: builder.mutation({
      query: (data) => ({
          url: "/books",
          method: "POST",
          body: data,
      }),
      // invalidatesTags: ["books"],
  }),
  }),
});

export const {

  useGetBooksQuery,
  useAddBookMutation,
  usePostBookMutation,
  useSingleBookQuery,
} = bookApi;