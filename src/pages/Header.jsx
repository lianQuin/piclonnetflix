import React from 'react';
import"./Header.css";
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className= "header">
        <div className='headerLeft'>
         <Link to="/"><img className='header_icon' src='../../mejorNetflix.jpg ' style={{ width: "190px", height: "auto"}}/></Link>
         <Link to="/pelicula/popular" style={{textDecoration:"none", color:"white"}}><span>Populares</span></Link>
         <Link to="/pelicula/top"style={{textDecoration:"none", color:"white"}}><span>Tendencias</span></Link>
         <Link to="/pelicula/upcoming"style={{textDecoration:"none", color:"white"}}><span>Proximamente</span></Link>
        
            </div>
        </div>
  )
}
 