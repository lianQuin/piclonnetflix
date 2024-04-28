
import "./PeliculasCard.css"
import {Link} from "react-router-dom"
export const PeliculasCard = ({pelicula}) => {

    const imgURL= `https://image.tmdb.org/t/p/original${pelicula.poster_path}`

  return (
    
    <li className="moviesCard">
      <Link to={`/pelicula/${pelicula.id}`}>
      <img className="movieImage" src={imgURL} alt={pelicula.title} height={600} width="100%" />
      <h4>{pelicula.title}</h4>
      <div className="movieData">{pelicula.original_title}</div>
      </Link>
    </li>
  );
};