import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Popular";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export const Proximamente = () => {
  const [pelicula, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=083e8887717b2abaa4f5c958043b3676"
    ) 
      .then((res) => res.json())
      .then((data) => {
        // Aquí se actualiza el estado con los datos obtenidos
        setPeliculas(data.results);
      })
      .catch((error) => {
        console.error("Error al obtener películas populares:", error);
      });
  }, []);

  return (
    <>
      <div className="poster">
        <h1>Lista de películas que se estrenarán próximamente</h1>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {pelicula.map((pelicula) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${pelicula.id}`}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    pelicula && pelicula.backdrop_path
                  }`}
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {pelicula ? pelicula.original_title : ""}
                </div>
                <div className="posterImage__runtime">
                  {pelicula ? pelicula.release_date : ""}
                  <span className="posterImage__rating">
                    {pelicula ? pelicula.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <div className="posterImage__description">
                  {pelicula ? pelicula.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      
      </div>
    </>
  );
};