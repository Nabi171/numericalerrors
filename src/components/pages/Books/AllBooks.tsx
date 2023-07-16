/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import SingleBook from "./SingleBook"
import Loading from "../../ui/Loading"
import { useGetBooksQuery } from '../../../features/books/booksApi';
export default function AllBooks() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
 


    const { data, isLoading, error } = useGetBooksQuery(undefined);
    const booksdata=data?.data
      const currentDate = new Date();
const latestPublicationDate = booksdata?.filter(item => new Date(item.publicationDate) <= currentDate)
  .sort((a, b) => new Date(b.publicationDate) - new Date(a.publicationDate));

  const filteredData = latestPublicationDate?.filter((item) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(lowerCaseQuery) ||
      item.author.toLowerCase().includes(lowerCaseQuery) ||
      item.genre.toLowerCase().includes(lowerCaseQuery) ||
      item.publicationDate.toLowerCase().includes(lowerCaseQuery) 
    );
  });
  // console.log(latestPublicationDate)
    return (
        <div >
        
            <div clasName="">
              <div className="flex items-center container mx-auto">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search..."
                  class="p-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={handleSearch}
                />
                
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
         <Loading className=" text-white" ></Loading>
         
         </div>
         }
        </div>
      );;
  }
  