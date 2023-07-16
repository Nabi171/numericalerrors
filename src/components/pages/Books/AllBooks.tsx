/* eslint-disable prettier/prettier */
import SingleBook from "./SingleBook"
import Loading from "../../ui/Loading"
import { useGetBooksQuery } from '../../../features/books/booksApi';
export default function AllBooks() {
    const { data, isLoading, error } = useGetBooksQuery(undefined);
    const booksdata=data?.data
      const currentDate = new Date();
const latestPublicationDate = booksdata?.filter(item => new Date(item.publicationDate) <= currentDate)
  .sort((a, b) => new Date(b.publicationDate) - new Date(a.publicationDate));
  console.log(latestPublicationDate)
    return (
        <div >
         { booksdata ? <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto mt-4">
            {
              booksdata?.map(book=><SingleBook key={book._id} book={book} />)
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
  