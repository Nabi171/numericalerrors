/* eslint-disable prettier/prettier */
import React, { useState,FormEvent } from 'react';
import SingleBook from "./SingleBook"
import Loading from "../../ui/Loading"
import { useGetBooksQuery } from '../../../features/books/booksApi';
export default function AllBooks() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('')
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    setSearchQuery(e.target.value);
  };
  const handleGenreChange = (e: FormEvent<HTMLFormElement>) => {
    setSelectedGenre(e.target.value);
  };

  const handleYearChange = (e: FormEvent<HTMLFormElement>) => {
    setSelectedYear(e.target.value);
  };


    const { data, isLoading, error } = useGetBooksQuery(undefined);
    const booksdata=data?.data
      const currentDate = new Date();
const latestPublicationDate: any[] | undefined  = booksdata?.filter(item => new Date(item.publicationDate) <= currentDate)
  .sort((a, b) => new Date(b.publicationDate) - new Date(a.publicationDate));

  const filteredData: any[] | undefined  = latestPublicationDate?.filter((item) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const lowerCaseGenre = selectedGenre.toLowerCase();
    const publicationYear = item.publicationDate.split(' ')[2];

    return (
      item.title.toLowerCase().includes(lowerCaseQuery) &&
      (lowerCaseGenre === '' || item.genre.toLowerCase() === lowerCaseGenre) &&
      (selectedYear === '' || publicationYear === selectedYear)
    );
  });

  // console.log(latestPublicationDate)
    return (
        <div >
        
        <div className="flex container mx-auto">
  <div className="container mx-auto">
    <input
      type="text"
      placeholder="Search..."
      className="p-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={searchQuery}
      onChange={handleSearch}
    />
  </div>

  <div className="ml-4">
    <div className="flex space-x-2">
      <select
        value={selectedGenre}
        onChange={handleGenreChange}
        className="p-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Genres</option>
        <option value="fiction">Fiction</option>
        <option value="nonfiction">Non-Fiction</option>
        <option value="mystery">Mystery</option>
        {/* Add more genre options */}
      </select>

      <select
        value={selectedYear}
        onChange={handleYearChange}
        className="p-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Years</option>
        {Array.from({ length: 50 }, (_, index) => (
          <option key={index} value={2000 + index}>
            {2000 + index}
          </option>
        ))}
      </select>
    </div>
  </div>
</div>


         { filteredData ? <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto mt-4">
            {
              filteredData?.map(book=><SingleBook key={book._id} book={book} />)
            }
         </div>
         : 
         <div className="ms-40 flex ">
          <p className="text-white">Loading.........</p>
         <Loading ></Loading>
         
         </div>
         }
        </div>
      );;
  }
  