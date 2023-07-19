/* eslint-disable prettier/prettier */
import React, { useState,FormEvent } from 'react';
import { ChangeEvent } from 'react';
import SingleBook from "./SingleBook"
import Loading from "../../ui/Loading"
import { useGetBooksQuery } from '../../../features/books/booksApi';
export default function AllBooks() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('')
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const handleGenreChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(e.target.value);
  };

  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  };

  interface Book {
    publicationDate: Date;
    // other properties...
  }
    const { data, isLoading, error } = useGetBooksQuery(undefined);
    const booksdata=data?.data
      const currentDate = new Date();
const latestPublicationDate: any[] | undefined   = booksdata?.filter((item:any) => new Date(item.publicationDate) <= currentDate)
  .sort((a:any, b:any) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime());

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
        <option value="Thriller">Thriller</option>
        <option value="mystery">Mystery</option>
        <option value="Islamic collection">Islamic</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Historical Fiction">Historical Fiction</option>
        <option value="Horror">Horror</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Travel">Travel</option>
        <option value="Poetry">Poetry</option>
        <option value="Mathmatics">Mathematics</option>
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
  