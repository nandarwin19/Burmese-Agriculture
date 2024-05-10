// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-burmese.firebaseapp.com",
  projectId: "blog-burmese",
  storageBucket: "blog-burmese.appspot.com",
  messagingSenderId: "9197557335",
  appId: "1:9197557335:web:a4af5f1a11d85e2dd6f512",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
