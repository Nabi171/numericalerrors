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
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/review/${id}`,
        method: 'POST',
        body: data,
      }),
    
    }),
    getReview: builder.query({
      query: (id) => `/review/${id}`,
     
    }),
    addBook: builder.mutation({
      query: (data) => ({
          url: "/books",
          method: "POST",
          body: data,
      }),
      invalidatesTags: ["books"],
  }),
  deleteBook: builder.mutation({
    query: (id) => ({
        url: `/book/${id}`,
        method: "DELETE",
    }),
    invalidatesTags: ["books"],
}), 
   
  editBook: builder.mutation({
  query: ({ _id, data }) => ({
      url: `/book/${_id}`,
      method: "PUT",
      body: data,
  }),
  invalidatesTags:['books'],
   }),  

  }),
});

export const {

  useGetBooksQuery,
  usePostCommentMutation,
  useGetReviewQuery,
  useAddBookMutation,
 
  useSingleBookQuery,
  useDeleteBookMutation,
  useEditBookMutation,
} = bookApi;