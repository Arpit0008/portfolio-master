// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAPVZF3F-Gf6Yh6S8fzofAxg697QkCgb4",
  authDomain: "arpit-portolio.firebaseapp.com",
  projectId: "arpit-portolio",
  storageBucket: "arpit-portolio.firebasestorage.app",
  messagingSenderId: "629585983348",
  appId: "1:629585983348:web:06e5c2bbc00194b0b85e21"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()