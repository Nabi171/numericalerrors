/* eslint-disable prettier/prettier */
export default function SingleBook({book}) {
const { title, author, genre, publicationDate }=book;
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">Author: {author}</p>
      <p className="text-gray-700 mb-2">Genre: {genre}</p>
      <p className="text-gray-700">Publication Date: {publicationDate}</p>
        </div>
      );;
  }
  