import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Popular.css";
import { Link } from "react-router-dom";

export const Top = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=083e8887717b2abaa4f5c958043b3676"
    )
      .then((res) => res.json())
      .then((data) => {
        setPeliculas(data.results);
      })
      .catch((error) => {
        console.error("Error al obtener películas populares:", error);
      });
  }, []);

  const selectMovie = async (pelicula) => {
    fetchMovie(pelicula.id);
    setPelicula(pelicula);
    window.scrollTo(0, 0);
  };
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
              <div id='descripcion' className="posterImagen__overlay">
                <div style={{color:'white'}} className="posterImagen__titulo">
                  {pelicula ? pelicula.original_title : ""}
                </div>
                <div style={{color:'white'}} className="posterImagen__runtime">
                  {pelicula ? pelicula.release_date : ""}
                  <span style={{color:'white'}} className="posterImagen__rating">
                    {pelicula ? pelicula.vote_average : ""}
                    <i style={{color:'white'}} className="fas fa-star" />{" "}
                   
                  </span>
                </div>
                <div style={{color:'white'}} className="posterImagen__descripcion">
                  {pelicula ? pelicula.overview : ""}
                </div>
                <button id="boton-mirar">
                  <Link to={`/pelicula/${pelicula.id}`} style={{textDecoration:"none", color: "white"}}>Play</Link>
                </button>
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


