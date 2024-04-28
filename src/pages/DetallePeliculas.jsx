import { get } from "../utils/conexionApi.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "./DetallePeliculas.css";



export const DetallePeliculas = () => {
  const [showVideo, setShowVideo] = useState(false);
  const { peliculaId } = useParams();
  const [pelicula, setPelicula] = useState(null);

  useEffect(() => {
    // hook Llamado a la API se usa cuando cambia peliculaId se almacena todo en pelicula
    get(`/movie/${peliculaId}`).then((data) => {
      setPelicula(data);
    });
  }, [peliculaId]);

  if (!pelicula) {
    return null;
  }

  const imgURL = `https://image.tmdb.org/t/p/original${pelicula.poster_path}  `;

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  return (
  
    
    <div className="contenedorDetalle">
      {showVideo ? (
        <video controls  height={600}
        width="100%">
          <source
            src="../../public/y2meta.net_480p-20th-century-fox-intro-hd.mp4"
            type="video/mp4"
           
          />
        </video>
      ) : (
        <img
          className="col"
          src={imgURL}
          alt={pelicula.title}
          onClick={handleVideoClick} 
          height={600}
          width="100%"
        />
      )}
      <div className="peliculaDetalle">
        <p className="item">
          <strong>Título: </strong>
          {pelicula.title}
        </p>
        <p className="item">
          <strong>Descripcion: </strong>
          {pelicula.overview}
        </p>
        <p className="item">
          <strong>Idioma original: </strong>
          {pelicula.original_language}
        </p>
        <p className="item">
          <strong>Popularidad: </strong>
          {pelicula.popularity} vistas
        </p>
        <p className="item">
          <strong>Fecha de  estreno: </strong>
          {pelicula.release_date} vistas
        </p>
      </div>
    </div>
  );
};

/*{  
  "poster_path": "/IfB9hy4JH1eH6HEfIgIGORXi5h.jpg",  
  "adult": false,  
  "overview": "Jack Reacher must uncover the truth behind a major government conspiracy in order to clear his name. On the run as a fugitive from the law, Reacher uncovers a potential secret from his past that could change his life forever.",  
  "release_date": "2016-10-19",  
  "genre_ids": [  
    53,  
    28,  
    80,  
    18,  
    9648  
  ],  
  "id": 343611,  
  "original_title": "Jack Reacher: Never Go Back",  
  "original_language": "en",  
  "title": "Jack Reacher: Never Go Back",  
  "backdrop_path": "/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg",  
  "popularity": 26.818468,  
  "vote_count": 201,  
  "video": false,  
  "vote_average": 4.19 */
 