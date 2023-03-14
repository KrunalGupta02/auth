// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBYpXnt0J6HMWAc_dxxNhPXy1_tPa5y-E",
  authDomain: "reactauth-d46af.firebaseapp.com",
  projectId: "reactauth-d46af",
  storageBucket: "reactauth-d46af.appspot.com",
  messagingSenderId: "601242090114",
  appId: "1:601242090114:web:aa4cb6d08684bd2232529b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
