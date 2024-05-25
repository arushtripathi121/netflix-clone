// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_iLG4yhInu3FxhB_AN1fYerBYg041tnU",
  authDomain: "netflix-clone-1cd36.firebaseapp.com",
  projectId: "netflix-clone-1cd36",
  storageBucket: "netflix-clone-1cd36.appspot.com",
  messagingSenderId: "491694240161",
  appId: "1:491694240161:web:9dbb8ebbfca9d2bc681be0",
  measurementId: "G-0FXVJ365FP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();