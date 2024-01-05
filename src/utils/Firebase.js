// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJSlM8UpasJoC3cvfOc-XaVh1-1-LSvGM",
  authDomain: "netflix-gpt-22dfc.firebaseapp.com",
  projectId: "netflix-gpt-22dfc",
  storageBucket: "netflix-gpt-22dfc.appspot.com",
  messagingSenderId: "284555143473",
  appId: "1:284555143473:web:f6eaf4f75672aef2b0e810",
  measurementId: "G-CDWRBD216Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();