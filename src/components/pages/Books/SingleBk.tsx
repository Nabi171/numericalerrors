/* eslint-disable prettier/prettier */
import {useNavigate} from "react-router-dom"
export default function SingleBk({book}) {
const { title, author, genre, publicationDate }=book;

// console.log(id)



    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between ">
      <div className="mb-4">

      <h2 className="text-xl font-bold mb-2">{title}</h2><hr/>
      <img
             src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149330605.jpg"
             alt="Image"
             className="w-full"
           />
      <p className="text-gray-700 mb-2">Author: {author}</p>
      <p className="text-gray-700 mb-2">Genre: {genre}</p>
      <p className="text-gray-700 ">Publication Date: {publicationDate}</p>
      </div>
      
        </div>
      );;
  }
  