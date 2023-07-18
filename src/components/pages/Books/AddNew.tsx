/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../app/hooks';
// import { addBook } from '../../../features/books/booksApi'
import { useAddBookMutation } from '../../../features/books/booksApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddNew() {
  const [title, setTitle] = useState("");
  // console.log('initial',initialTitle)
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publicationDate, setPublicationDate] = useState("");


  const [addBook, { isLoading, isSuccess, isError }] = useAddBookMutation();
  const dispatch=useAppDispatch()
  const navigate = useNavigate();
  // const { register, handleSubmit, reset } = useForm();
  
  const handleNavigate=()=>{
    navigate('/allbooks');
  }


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addBook({
      
     
          title,
          author,
          genre,
          publicationDate,

 
  });
    
    navigate('/allbooks');

  
    alert('are you sure to add the book?')
    // toast.success('the book aded!');
    window.location.reload();
  

};


//another method using react hook form >optional
  // const onSubmit = (data) => {
  //   dispatch(addBook(data));
  //   navigate('/allbooks');
  //   console.log(data)
  //   alert('The book is added successfully')
  
  //   reset(); // Reset the form after submission
  // };


    return(
     <div>
        
        <form 

        // onSubmit={handleSubmit(onSubmit)} 
        onSubmit={handleSubmit} 
        className="max-w-sm mx-auto">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          // {...register('title', { required: true })}
          className={`border focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md py-2 px-4`}
        />
        {/* {errors.title && <p className="text-red-500 text-xs mt-1">Title is required.</p>} */}
      </div>

      <div className="mb-4">
        <label htmlFor="author" className="block text-gray-700 text-sm font-bold mb-2">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          // {...register('author', { required: true })}
          className={`border focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md py-2 px-4`}
        />
        {/* {errors.author && <p className="text-red-500 text-xs mt-1">Author is required.</p>} */}
      </div>

      <div className="mb-4">
        <label htmlFor="genre" className="block text-gray-700 text-sm font-bold mb-2">Genre:</label>
        <input
          type="text"
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          // {...register('genre', { required: true })}
          className={`border focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md py-2 px-4`}
        />
        {/* {errors.genre && <p className="text-red-500 text-xs mt-1">Genre is required.</p>} */}
      </div>

      <div className="mb-4">
        <label htmlFor="publicationDate" className="block text-gray-700 text-sm font-bold mb-2">Publication Date:</label>
        <input
          type="date"
          id="publicationDate"
          value={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)}
          // {...register('publicationDate', { required: true })}
          className={`border focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md py-2 px-4`}
        />
        {/* {errors.publicationDate && <p className="text-red-500 text-xs mt-1">Publication Date is required.</p>} */}
      </div>

      <button 
   
      type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit</button>
    </form>
        
    </div>
     );
  }
  