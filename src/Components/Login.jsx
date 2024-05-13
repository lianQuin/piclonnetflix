import React, { useState } from 'react'
import "./Login.css"
import { app } from "../firebaseConfig/firebase.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
const auth=getAuth(app)

export const Login = () => {


    const[registrando,setRegistrando]= useState(false)

    const functAutenticacion = async(e) =>{
         e.preventDefault();
         const correo = e.target.email.value;
         const contraseña = e.target.password.value;
       
         if (registrando){
            try{
            await createUserWithEmailAndPassword(auth, correo, contraseña)}
            catch (error){alert("asegurese que la contraseña contenga minimo 8 caracteres")}
         }
         else{ 
            try{
            await signInWithEmailAndPassword(auth, correo, contraseña)
            }catch (error){alert("El correo o contraseña son incorrectas")}
        }
    }



  return (
    <div className='container'>
       <div className="row">
        {/*columna mas chica para el form*/}
        <div className="col-md-4">
            <div className='padre'>
                <div className='card card-body shadow-lg' id='fondo'>
                    <h1 className='h1sesion'>Iniciar Sesion</h1>
                    <form id='formlogin' onSubmit={functAutenticacion} >
                        <input type="text" placeholder='Ingresar Email' id='email'/>
                        <input type='password' placeholder='Ingresar contraseña' id='password'/>
                        <button id='button1' className='btnform'>{registrando ?"Registrate":"inicia sesion"}</button>
                    </form>
                    <div className='texto'>{registrando ? "Si ya tienes cuenta" : "No tienes cuenta" }<button id='boton2' onClick={()=>setRegistrando(!registrando)}>{registrando ? "Inicia sesion" : "Registrate"}</button></div>
                </div>


            </div>
               



        </div>
      
       
    </div>
  
</div>
  )}