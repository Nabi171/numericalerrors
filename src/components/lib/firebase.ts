/* eslint-disable prettier/prettier */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAVV1mkd6RFoeM7KBlKRB0F6kv9LzLSk3o",
    authDomain: "technet-7daa7.firebaseapp.com",
    projectId: "technet-7daa7",
    storageBucket: "technet-7daa7.appspot.com",
    messagingSenderId: "1039171350918",
    appId: "1:1039171350918:web:0facde1ea34be830b5bc07"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);