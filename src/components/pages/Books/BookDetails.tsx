/* eslint-disable prettier/prettier */
import { useParams } from 'react-router-dom';
import {useSingleBookQuery} from "../../../features/books/booksApi";
import Loading from "../../ui/Loading"
import { AiFillDelete } from 'react-icons/ai';

export default function BookDetails({book}) {
    const { bookId } = useParams();
    const {data,isLoading,error}=useSingleBookQuery(bookId);
    // const {}
    // const { title, author, genre, publicationDate }=data;
        return (
            <>
            <div className="container mx-auto">
           { !data ? <Loading/> :  <div className="bg-white rounded-lg shadow-md p-4 w-96 mx-auto mt-10">
         <h2 className="text-xl font-bold mb-2">{data?.title}</h2><hr/>
      <p className="text-gray-700 mb-2">Author:{data?.author} </p>
      <p className="text-gray-700 mb-2">Genre:{data?.genre} </p>
      <p className="text-gray-700 ">Publication Date: {data?.publicationDate}</p>

      <div className="flex justify-between mt-5">
          <button className="border border-green-500 text-green-800 hover:bg-green-500 hover:text-white font-bold py-2 px-4 rounded ">
          Edit
        </button>
 
        <button
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
           <AiFillDelete/>
       </button>
      </div>
            </div>}
            </div>
        </>
          );;
      }
      