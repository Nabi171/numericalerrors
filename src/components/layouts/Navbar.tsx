/* eslint-disable prettier/prettier */
// import React from 'react';
import { Link } from "react-router-dom";
import { useAppSelector,useAppDispatch} from '../../app/hooks';
import { setUser } from '../../features/user/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
export default function Navbar() {
  const {user}=useAppSelector((state)=>state.user)
  const dispatch=useAppDispatch()
const  handleLogout = (): void => {
  // const dispatch = useDispatch();

  signOut(auth).then(() => {
    // Clear local storage
    window.localStorage.clear();

    // Dispatch setUser action
    dispatch(setUser(null));

    // Sign-out successful.
  });
};
  console.log(user)
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <div className="flex items-center">
          <img src=" https://i.ibb.co/N3hGjRv/06-11-2023-00-54-17-REC-removebg-preview.png" alt="Your Logo" class="h-16  w-16 object-contain" />
            <div className="flex-shrink-0">
              <span className="text-white font-bold text-xl">Numerical Analysis Presentation</span>
            </div>
           
            
          </div>
         
        </div>
      </div>
    </nav>
  );
};


