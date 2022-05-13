// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDErWe-xoR-Fe_sdOQ1RrS8o0XCeiEGJ2U",
  authDomain: "myfb-79c79.firebaseapp.com",
  projectId: "myfb-79c79",
  storageBucket: "myfb-79c79.appspot.com",
  messagingSenderId: "657380232666",
  appId: "1:657380232666:web:16c7c5d8065aab7cfac4e3",
  measurementId: "G-DLKLG7YMDH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
