// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLC1tPamoLwIl1POztdRi357xcl8Naz94",
  authDomain: "react-course-2c5d8.firebaseapp.com",
  projectId: "react-course-2c5d8",
  storageBucket: "react-course-2c5d8.appspot.com",
  messagingSenderId: "697244794207",
  appId: "1:697244794207:web:767eb980769a285893caea",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);