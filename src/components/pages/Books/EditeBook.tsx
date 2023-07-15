/* eslint-disable prettier/prettier */
import { useForm } from 'react-hook-form';
import {useSingleBookQuery} from "../../../features/books/booksApi";
// import { useEditBookMutation } from '../../../features/books/booksApi';
import { useParams } from 'react-router-dom';
import EditForm from "../../../components/pages/Books/EditForm";
import React, { useState } from 'react';
// import { useNavigate } from 'react-router'
export default function EditeBook() {
  const { editId } = useParams();
  const { data, isLoading, error } = useSingleBookQuery(editId);
// console.log('this is data',data);
// console.log(editId)



let content = null;

if (isLoading) {
    content = <div>Loading...</div>;
}
if (!isLoading && error) {
    content = <div>error...</div>;
}
if (!isLoading && !error) {
    content = <EditForm data={data} />;
}

    return(
     <div>
        
{content}

        
    </div>
     );
  }
  