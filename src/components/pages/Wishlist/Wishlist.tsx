/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import { useGetBooksQuery } from '../../../features/books/booksApi';
export default function Wishlist() {
    const { data, isLoading, error } = useGetBooksQuery(undefined);
const books=data?.data
// const [books, setBooks] = useState([Books]);
// Add a book to the wishlist
// const addToWishlist = (bookId) => {
//     setBooks((prevBooks) =>
//       prevBooks.map((book) =>
//         book.id === bookId ? { ...book, status: "wishlist" } : book
//       )
//     );
//   };
  
  // Move a book to "currently reading"
//   const startReading = (bookId) => {
//     setBooks((prevBooks) =>
//       prevBooks.map((book) =>
//         book.id === bookId ? { ...book, status: "reading" } : book
//       )
//     );
//   };
  
  // Move a book to "plan to read soon"
//   const planToRead = (bookId) => {
//     setBooks((prevBooks) =>
//       prevBooks.map((book) =>
//         book.id === bookId ? { ...book, status: "planned" } : book
//       )
//     );
//   };
  
  // Move a book to "finished reading"
//   const finishReading = (bookId) => {
//     setBooks((prevBooks) =>
//       prevBooks.map((book) =>
//         book.id === bookId ? { ...book, status: "finished" } : book
//       )
//     );
//   };
  

    
return(
    <div className="text-white text-center">
    {books ? (
      <ul className="mt-4">
        {books.map((book) => (
          <li key={book.id} className="mb-4">
            <h3 className="text-xl font-bold">{book.title}</h3>
            <p className="text-gray-400">Author: {book.author}</p>
            <p className="text-gray-400">Status: {book.status}</p>
  
            {/* Wishlist */}
            {book.status !== "wishlist" && (
              <button
                className="btn-wishlist bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => addToWishlist(book.id)}
              >
                Add to Wishlist
              </button>
            )}
  
            {/* Start Reading */}
            {book.status !== "reading" && (
              <button
                className="btn-reading bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => startReading(book.id)}
              >
                Start Reading
              </button>
            )}
  
            {/* Plan to Read */}
            {book.status !== "planned" && (
              <button
                className="btn-plan bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => planToRead(book.id)}
              >
                Plan to Read
              </button>
            )}
  
            {/* Finish Reading */}
            {book.status !== "finished" && (
              <button
                className="btn-finish bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => finishReading(book.id)}
              >
                Finish Reading
              </button>
            )}
          </li>
        ))}
      </ul>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  
     );
  }
  