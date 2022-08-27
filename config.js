// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import {getFirestore, collection, setDoc, getDoc, doc} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_NtHWI7pS5k2dM0q4BVtfSF7jmOfOLaY",
  authDomain: "todoapp-40183.firebaseapp.com",
  projectId: "todoapp-40183",
  storageBucket: "todoapp-40183.appspot.com",
  messagingSenderId: "694116097763",
  appId: "1:694116097763:web:f84ddc74f02d001f89afd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export {setDoc, getDoc, doc}