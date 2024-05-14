import React from 'react';
import"./Header.css";
import { Link } from 'react-router-dom';

export const Header = () => {

  return (
    <div className= "header">
        <div className='headerLeft'>
         <Link to="/"><img className='header_icon' src='/piclonnetflix/netflix.png' style={{ width: "190px", height: "auto"}}/></Link>
         <Link to="/pelicula/popular" style={{textDecoration:"none", color:"red"}}>Populares</Link>
         <Link to="/pelicula/top"style={{textDecoration:"none",color:"red"}}>Tendencias</Link>
         <Link to="/pelicula/Upcoming"style={{textDecoration:"none",color:"red"}}>Proximamente</Link>
         <Link to="/Show"style={{textDecoration:"none",color:"red"}}>Registrate</Link>
         
        
            </div>
        </div>
  )
}
 