// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWu9lTUKxW_R_cJQUi9Ug-E-6U1LAQb2s",
  authDomain: "users-d1bdd.firebaseapp.com",
  projectId: "users-d1bdd",
  storageBucket: "users-d1bdd.appspot.com",
  messagingSenderId: "746312363276",
  appId: "1:746312363276:web:a870ff447950b49d892d29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();