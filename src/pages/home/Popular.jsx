
import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Popular";

export const Popular = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=083e8887717b2abaa4f5c958043b3676"
    )
      .then((res) => res.json())
      .then((data) => {
        setPeliculas(data.results);
      })
      .catch((error) => {
        console.error("Error al obtener películas populares:", error);
      });
  }, []);

  return (
    <>
      <div className="poster">
        
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {peliculas.map((pelicula) => (
            <div key={pelicula.id}>
              <div className="posterImagen">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    pelicula && pelicula.backdrop_path
                  }`}
                  alt=""
                />
              </div>
              <div className="posterImagen__overlay">
                <div className="posterImagen__titulo">
                  {pelicula ? pelicula.original_title : ""}
                </div>
                <div className="posterImagen__runtime">
                  {pelicula ? pelicula.release_date : ""}
                  <span className="posterImagen__rating">
                    {pelicula ? pelicula.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                   
                  </span>
                </div>
                <div className="posterImagen__descripcion">
                  {pelicula ? pelicula.overview : ""}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
    
        <div className="Card-abajo" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
  {peliculas.map((pelicula) => (
    <div key={pelicula.id} style={{ flex: '1 0 20%', margin: '1em', maxWidth: 'calc(25% - 2em)' }}>
      <img
        src={`https://image.tmdb.org/t/p/original${pelicula.poster_path}`}
        alt=""
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  ))}
</div>


      </div>
      
    </>
  );
};
