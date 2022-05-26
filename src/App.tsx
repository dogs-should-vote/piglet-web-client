import React from 'react';
import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASBwFSoZfki7yllwmZtp08uWVj0XY9UY8",
  authDomain: "open-chat-4a17a.firebaseapp.com",
  projectId: "open-chat-4a17a",
  storageBucket: "open-chat-4a17a.appspot.com",
  messagingSenderId: "406454720446",
  appId: "1:406454720446:web:7a5a86fcf1dffd8c110bef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
