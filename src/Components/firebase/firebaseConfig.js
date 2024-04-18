// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseKey = process.env.REACT_APP_FIREBASE_API_KEY
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZQdbgzzfY1K8iAtucmY2oVEZ6HQWUtxU",
  authDomain: "profit-hackathon.firebaseapp.com",
  projectId: "profit-hackathon",
  storageBucket: "profit-hackathon.appspot.com",
  messagingSenderId: "728952951587",
  appId: "1:728952951587:web:0df652c0a259d34274f296",
  measurementId: "G-MHFMWBJ3SQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };