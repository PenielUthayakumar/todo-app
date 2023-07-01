// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsB8jk2P2qzMuFLaifpJ9ywvFyR44sAJM",
  authDomain: "todo-app-cc-15ffb.firebaseapp.com",
  projectId: "todo-app-cc-15ffb",
  storageBucket: "todo-app-cc-15ffb.appspot.com",
  messagingSenderId: "943101867551",
  appId: "1:943101867551:web:6259cbb30798b8d9a2072a",
  measurementId: "G-9PVNPXJGZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

