// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgnNDfJngN_5eWuSb4rO-i4vef6fTpO2c",
  authDomain: "house-market-rohan.firebaseapp.com",
  projectId: "house-market-rohan",
  storageBucket: "house-market-rohan.appspot.com",
  messagingSenderId: "772770316933",
  appId: "1:772770316933:web:00223c55e69e51073c1fec",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
