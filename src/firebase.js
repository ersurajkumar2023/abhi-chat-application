import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwjud7wA5puieDhKzYpBJEL2V6meIW0EY",
  authDomain: "asdf-7b325.firebaseapp.com",
  projectId: "asdf-7b325",
  storageBucket: "asdf-7b325.appspot.com",
  messagingSenderId: "636282937142",
  appId: "1:636282937142:web:5641e4cde20c7be5b3dd97",
  measurementId: "G-3VV6NBB6GR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
