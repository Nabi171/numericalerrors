// bookSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

interface Book {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

interface BookState {
  books: Book[];
  loading: boolean;
  error: string | null;
}

const initialState: BookState = {
  books: [],
  loading: false,
  error: null,
};

export const postBook = createAsyncThunk<Book, Book>(
  'books/postBook',
  async (bookData) => {
    try {
      const response: AxiosResponse<Book> = await axios.post('/books', bookData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to post book');
    }
  }
);

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postBook.fulfilled, (state, action: PayloadAction<Book>) => {
        state.books.push(action.payload);
        state.loading = false;
      })
      .addCase(postBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to post book';
      });
  },
});

export default bookSlice.reducer;
