/* eslint-disable prettier/prettier */
// import React from 'react';
import { Link } from "react-router-dom";
export default function Navbar() {
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
            <Link
              to="/allbooks"
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              All Books
            </Link>
            <Link
              to="/addnew"
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              Add NewBook
            </Link>
            <Link
              to="/wishlist"
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              WishList
            </Link>
            <Link
              to="/signup"
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              SignUp
            </Link>
            <Link
              to="/login"
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
           SignIn
            </Link>
         
          </div>
        </div>
      </div>
    </nav>
  );
};


