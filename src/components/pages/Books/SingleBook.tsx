/* eslint-disable prettier/prettier */
import {useNavigate} from "react-router-dom"
export default function SingleBook({book}) {
const { title, author, genre, publicationDate }=book;
const id=book?._id;
// console.log(id)
const navigate = useNavigate();
const handleSingleBook=(id)=>{
navigate(`bookdetails/${id}`)
}
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">Author: {author}</p>
      <p className="text-gray-700 mb-2">Genre: {genre}</p>
      <p className="text-gray-700 ">Publication Date: {publicationDate}</p>
      <button
       onClick={()=>handleSingleBook(id)}
      className="bg-blue-500 hover:bg-blue-600 mt-3 text-white font-bold py-2 px-4 rounded ">
      Details
    </button>
        </div>
      );;
  }
  