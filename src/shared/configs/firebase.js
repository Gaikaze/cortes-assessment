// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXA-qfkAiP5rJ_K2XSGzn9YwHfWpXaJYw",
  authDomain: "retake3-7ce89.firebaseapp.com",
  projectId: "retake3-7ce89",
  storageBucket: "retake3-7ce89.appspot.com",
  messagingSenderId: "843845345794",
  appId: "1:843845345794:web:c0a3c38dc85dc0de4c3d1b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
export { app, firestore, auth };
