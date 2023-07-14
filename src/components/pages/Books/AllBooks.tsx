/* eslint-disable prettier/prettier */
import SingleBook from "./SingleBook"
import { useGetBooksQuery } from '../../../features/books/booksApi';
export default function AllBooks() {
    const { data, isLoading, error } = useGetBooksQuery(undefined);
    console.log(data?.data)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto mt-4">
         <SingleBook/>
         <SingleBook/>
         <SingleBook/>
         <SingleBook/>
         <SingleBook/>
         <SingleBook/>
        </div>
      );;
  }
  