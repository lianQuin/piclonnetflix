import { useState, useEffect } from "react";

import { app} from "../firebaseConfig/firebase.js";
import { HomeUsuario } from "./HomeUsuario.jsx";
import { Login } from "./Login.jsx";

import { getAuth,onAuthStateChanged } from "firebase/auth";
const auth=getAuth(app)

export const Show = () => {
 
  //para login
  const [usuario,setUsuario]= useState(null)
  onAuthStateChanged(auth,(usuarioFirebase)=>{
  if(usuarioFirebase){setUsuario(usuarioFirebase)}
else{setUsuario(null)}})





  
  return (
    <>
    <div>{usuario?<HomeUsuario correoUsuario = {usuario.email} />:<Login/>}</div>
      
    </>
  );
};