/* eslint-disable prettier/prettier */
import { useParams } from 'react-router-dom';
import {useSingleBookQuery} from "../../../features/books/booksApi";
import {useDeleteBookMutation} from "../../../features/books/booksApi";
import Loading from "../../ui/Loading"
import { AiFillDelete } from 'react-icons/ai';
import { BsFillEnvelopeFill} from "react-icons/bs";
import { useNavigate } from 'react-router';
const dummyComments = [
  'Bhalo na',
  'Ki shob ghori egula??',
  'Eta kono product holo ??',
  '200 taka dibo, hobe ??',
];


export default function BookDetails({book}) {
    const { bookId } = useParams();
    const {data,isLoading,error}=useSingleBookQuery(bookId);
    const [deleteBook] = useDeleteBookMutation(bookId);
    // const {}
    // const { title, author, genre, publicationDate }=data;
    const navigate = useNavigate();
    const handleDelete = (bookId) => {
        deleteBook(bookId);
        console.log(bookId)
        navigate('/allbooks')
        window.location.reload();
    };


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
        onClick={()=>handleDelete(bookId)}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
           <AiFillDelete/>
       </button>
      </div>
            </div>}

      <div>
        <form className="flex gap-1  justify-center">
      <input
      type="text"
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
        {dummyComments.map((comment:string, index:number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
          
            <BsFillEnvelopeFill className='text-white' /> 
            <p className="text-white"> {comment}</p>
          </div>
        ))}
      </div>


</div>
        </>
          );;
      }
      