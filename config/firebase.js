// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYBXwfGFRAvtqc4t_Q1uVFaVnCPtxw7CY",
  authDomain: "healthsphere-54ddb.firebaseapp.com",
  projectId: "healthsphere-54ddb",
  storageBucket: "healthsphere-54ddb.appspot.com",
  messagingSenderId: "634821015441",
  appId: "1:634821015441:web:e4b1f14030f7a553d60c30",
  measurementId: "G-CQBK738MM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);