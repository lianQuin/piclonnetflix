// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3KfqBt08hj49j3bYE3GJKW85pyuaguwo",
  authDomain: "cacreactlilianaq.firebaseapp.com",
  projectId: "cacreactlilianaq",
  storageBucket: "cacreactlilianaq.appspot.com",
  messagingSenderId: "1038221816077",
  appId: "1:1038221816077:web:17f347371cd103bc0e8044"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export {app};