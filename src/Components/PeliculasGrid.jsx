/* import peliculas from "./peliculas.json" */

import { useState, useEffect } from "react"
import { PeliculasCard } from "./PeliculasCard"
import { get } from "../utils/conexionApi";

export const PeliculasGrid=()=>{

const [peliculas,setPeliculas] = useState([])
//useEfect para la renderizacion, monta el componente   
useEffect(()=>{
get("/discover/movie").then((data)=>{
    setPeliculas(data.results);
})
},[])

return(
    // contenedor para mostrar los posters de las peliculas
    <ul className="moviesGrid">
        {peliculas.map((pelicula)=>(
        <PeliculasCard key={pelicula.id} pelicula={pelicula}/>
        ))}
    </ul>
)
}
