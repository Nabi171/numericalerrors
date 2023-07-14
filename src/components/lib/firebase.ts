/* eslint-disable prettier/prettier */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBT4z6ikEwiZ_IGjyimE__1zvXSiu19M4Q",
    authDomain: "book-catalog-3a2b0.firebaseapp.com",
    projectId: "book-catalog-3a2b0",
    storageBucket: "book-catalog-3a2b0.appspot.com",
    messagingSenderId: "397574534095",
    appId: "1:397574534095:web:d4c7da7dec7aa726e018ba",
    measurementId: "G-LNMT0WJMCQ",
  };
  

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);