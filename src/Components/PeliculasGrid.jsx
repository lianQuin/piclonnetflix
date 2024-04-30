// PeliculasGrid.jsx
import React from "react";
import PeliculasCard from "./PeliculasCard"; // Importa el componente 

const PeliculasGrid = ({ peliculas, selectMovie }) => {
    const API = "https://api.themoviedb.org/3";
    const API_KEY = "083e8887717b2abaa4f5c958043b3676";
    const imgURL = "https://image.tmdb.org/t/p/original";
    const [searchKey, setSearchKey] = useState("");
   


  return (
    <div className="peliculas-grid">
      {peliculas.map((pelicula) => (
        <PeliculasCard key={pelicula.id} pelicula={pelicula} selectMovie={selectMovie} />
      ))}
    </div>
  );
};

export default PeliculasGrid;
