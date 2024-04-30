import React from 'react';
import"./Header.css";
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className= "header">
        <div className='headerLeft'>
         <Link to="/"><img className='header_icon' src='../../Netflix_2038.png' /></Link>
         <Link to="/pelicula/popular" ><span>Populares</span></Link>
         <Link to="/pelicula/top"><span>Tendencias</span></Link>
         <Link to="/pelicula/upcoming"><span>Proximamente</span></Link>
        
            </div>
        </div>
  )
}
