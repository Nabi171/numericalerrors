/* eslint-disable prettier/prettier */
export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <img src='https://img.freepik.com/free-vector/bookshop-concept-illustration_114360-2694.jpg' alt="Home" className="w-64 h-64 rounded-full mb-6" />
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Wellcome to Book-Catalogue
          </h1>
          <p className="text-lg text-gray-600 text-center mb-8 p-4 text-justify">
          Welcome to our Book Catalogue! Explore a vast collection of books across various genres, from thrilling mysteries to heartwarming romances. Dive into captivating stories and embark on incredible journeys with our carefully curated selection. Whether you're a passionate reader or seeking a new literary adventure, our catalog offers something for everyone.
          </p>
          <button className="px-6 py-3 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-600">
            All Books
          </button>
        </div>
      );
  }