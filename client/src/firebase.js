// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-91dc4.firebaseapp.com",
  projectId: "mern-estate-91dc4",
  storageBucket: "mern-estate-91dc4.appspot.com",
  messagingSenderId: "908383720888",
  appId: "1:908383720888:web:9215f839e3b5bd6aef2b4d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);