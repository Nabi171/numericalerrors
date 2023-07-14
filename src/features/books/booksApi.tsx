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
    postBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['book'],
    }),
   
  }),
});

export const {

  useGetBooksQuery,
  usePostBookMutation,
  useSingleBookQuery,
} = bookApi;