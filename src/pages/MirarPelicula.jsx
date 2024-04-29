import React, { useState } from "react";
import {PeliculasGrid} from "../Components/PeliculasGrid";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";


export const MirarPelicula = () => {
  const API = "https://api.themoviedb.org/3";
  const API_KEY = "083e8887717b2abaa4f5c958043b3676"
  const imgURL = "https://image.tmdb.org/t/p/original";
  const [searchKey, setSearchKey] = useState("");
  const [peliculas, setPeliculas] = useState([]);

  const fetchMovies = async (searchKey) => {
    try {
      const type = searchKey ? "search" : "discover";
      const { data } = await axios.get(`${API}/${type}/movie`, {
        params: { api_key: API_KEY, query: searchKey },
      });
      setPeliculas(data.results);
    } catch (error) {
      console.error("Error al buscar películas:", error);
    }
  };

  const searchPeliculas = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  return (
    <div>
      <h2> Películas</h2>
      <form onSubmit={searchPeliculas}>
        <input
          type="text"
          placeholder="Buscar películas"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}/>
        <button type="submit">Buscar</button>
        
      </form>
      <button onClick={() => setPeliculas([])}>Limpiar resultados</button>
     
      <div>
        {peliculas.map((pelicula) => (
          <div key={pelicula.id}>
            <img src={`${imgURL}${pelicula.poster_path}`} alt=""height={700} width="100%" />
            <h4>{pelicula.title}</h4>
          
          </div>
          ))}


      </div>
  <PeliculasGrid/>
    </div>
  );
};