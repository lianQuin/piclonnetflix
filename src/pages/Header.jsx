import React from 'react';
import"./Header.css";
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className= "header">
        <div className='headerLeft'>
         <Link to="/"><img className='header_icon' src='../../netflix.png' style={{ width: "190px", height: "auto"}}/></Link>
         <Link to="/pelicula/popular" style={{textDecoration:"none"}}>Populares</Link>
         <Link to="/pelicula/top"style={{textDecoration:"none"}}>Tendencias</Link>
         <Link to="/pelicula/upcoming"style={{textDecoration:"none"}}>Proximamente</Link>
        
            </div>
        </div>
  )
}
 