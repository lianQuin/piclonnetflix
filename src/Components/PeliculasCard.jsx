// MovieCard.jsx
import React from "react";

const PeliculasCard = ({ pelicula, selectMovie }) => {
    const API = "https://api.themoviedb.org/3";
    const API_KEY = "083e8887717b2abaa4f5c958043b3676";
    const imgURL = "https://image.tmdb.org/t/p/original";
    const [searchKey, setSearchKey] = useState("");
  
    
    const [trailer, setTrailer] = useState(null);
    const [playing, setPlaying] = useState(false);



  return (
    <div className="movie-card">
      <img src={`${imgURL}${pelicula.poster_path}`} alt={pelicula.title} />
      <h3>{pelicula.title}</h3>
      <button onClick={() => selectMovie(pelicula)}>Ver detalles</button>
    </div>
  );
};

export default PeliculasCard;
