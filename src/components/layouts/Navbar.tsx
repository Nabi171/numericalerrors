/* eslint-disable prettier/prettier */
// import React from 'react';
import { Link } from "react-router-dom";
import { useAppSelector,useAppDispatch} from '../../app/hooks';
export default function Navbar() {
  const {user}=useAppSelector((state)=>state.user)
  const dispatch=useAppDispatch()
const handleLogout=()=>{
  signOut(auth).then(() => {
    dispatch(setUser(null))
    // Sign-out successful.
  });
};
  console.log(user)
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white font-bold text-xl">Books Catalogue</span>
            </div>
          </div>
          <div className="ml-4 flex items-center md:ml-6">
          {user.email  &&  <Link
              to="/allbooks"
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              All Books
            </Link>}
            {user.email && <Link
              to="/addnew"
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              Add NewBook
            </Link>}
            {user.email && <Link
              to="/wishlist"
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              WishList
            </Link>}
            { !user.email &&  <Link
              to="/signup"
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              SignUp
            </Link>}
            { !user.email &&  <Link
              to="/login"
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
           SignIn
            </Link>}
            { user.email &&  <Link
              // to="/signup"
              onClick={handleLogout} 
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
           SignOut
            </Link>}
         
          </div>
        </div>
      </div>
    </nav>
  );
};


