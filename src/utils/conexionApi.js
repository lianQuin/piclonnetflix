
const API = "https://api.themoviedb.org/3"  


export const get = async(path)=>{

return fetch (API+path,{
    headers  :{
Authorization : "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODNlODg4NzcxN2IyYWJhYTRmNWM5NTgwNDNiMzY3NiIsInN1YiI6IjY2MjcwOWYzNjNlNmZiMDE2NWZjNzg5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xYuaztZwhvAsVNL_QtnwWXpLW0KglDHs2kSVtBpQytA",
"Content-type":"application/json;charset=utf-8"
    }
}).then((results)=>results.json())
}



/* API Read Access Token
https://www.themoviedb.org/settings/api 
-----firebase------npm install firebase-----

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
const app = initializeApp(firebaseConfig);*/