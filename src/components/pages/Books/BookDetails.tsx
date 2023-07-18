/* eslint-disable prettier/prettier */
import React, { useState,FormEvent, ChangeEvent  } from 'react';
import { useParams } from 'react-router-dom';
import {useSingleBookQuery} from "../../../features/books/booksApi";
import {useDeleteBookMutation} from "../../../features/books/booksApi";
import Loading from "../../ui/Loading"
import { AiFillDelete } from 'react-icons/ai';
import { BsFillEnvelopeFill} from "react-icons/bs";
import { useNavigate } from 'react-router';
import {usePostCommentMutation } from '../../../features/books/booksApi';
import {useGetReviewQuery } from '../../../features/books/booksApi';





export default function BookDetails({book}:any) {
 
    const { bookId}:any = useParams();
  
    // console.log(data2)
    const {data}=useSingleBookQuery(bookId);
    // console.log('data2',data2)

    // useSingleBookQuery

    const [deleteBook] = useDeleteBookMutation(bookId);
  
    const [inputValue, setInputValue] = useState<string>('');

    const [postComment] =
    usePostCommentMutation();
  
    const navigate = useNavigate();
    const handleDelete = (bookId:any) => {
        deleteBook(bookId);
        // console.log(bookId)
        navigate('/allbooks');
        window.location.reload();
        alert('Are you sure to delete this book?')
    };

  const handleEdit=(bookId:any)=>{
navigate(`/edit/${bookId}`)
console.log(bookId)
  }


  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
     
    event.preventDefault();
    const options = {
      id: bookId,
      data: { review: inputValue },
    };
    
  console.log(options)
  
  postComment(options)
  window.location.reload();
    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

return (
            <>
            <div className="container mx-auto">
           { !data ? <Loading/> :  <div className="bg-white rounded-lg shadow-md p-4 w-96 mx-auto mt-10">
         <h2 className="text-xl font-bold mb-2">{data?.title}</h2><hr/>
         <img
             src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149330605.jpg"
             alt="Image"
             className="w-full"
           />
      <p className="text-gray-700 mb-2">Author:{data?.author} </p>
      <p className="text-gray-700 mb-2">Genre:{data?.genre} </p>
      <p className="text-gray-700 ">Publication Date: {data?.publicationDate}</p>

      <div className="flex justify-between mt-5">
          <button
          onClick={()=>handleEdit(bookId)}
          className="border border-green-500 text-green-800 hover:bg-green-500 hover:text-white font-bold py-2 px-4 rounded ">
          Edit
        </button>
 
        <button
        onClick={()=>handleDelete(bookId)}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
           <AiFillDelete/>
       </button>
      </div>
            </div>}

      <div>
        <form className="flex gap-1  justify-center"
        onSubmit={handleSubmit}>
        
      <input
      type="text"
      onChange={handleChange}
          value={inputValue}
      placeholder="Write your review"
      className="border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md py-2 px-4 mt-6"
     />
        <button className="border border-green-500 text-green-800 hover:bg-green-500 hover:text-white font-bold py-2 px-4 rounded ">
    Add-Review
    </button>
       </form>
    </div>

    <div className="mt-10">
    <h2 className='text-white font-extralight font-extrabold mb-2'>Reviews</h2>
        {data?.reviews?.map((review:string, index:number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
          
            <BsFillEnvelopeFill className='text-white' /> 
            <p className="text-white"> {review}</p>
          </div>
        ))}
      </div>


</div>
        </>
          );;
      }
      