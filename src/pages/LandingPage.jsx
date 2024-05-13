import React, { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

import "./LandingPage.css";




export const LandingPage = () => {
  const API = "https://api.themoviedb.org/3";
  const API_KEY = "083e8887717b2abaa4f5c958043b3676";
  const imgURL = "https://image.tmdb.org/t/p/w300";
  const imgURL2 = "https://image.tmdb.org/t/p/original";
  const [searchKey, setSearchKey] = useState("");
  const [peliculas, setPeliculas] = useState([]);
  const [cargando, setCargando]= useState(true);
  const [pelicula, setPelicula] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [playing, setPlaying] = useState(false);

  const fetchMovies = async (searchKey) => {
    try {
      const type = searchKey ? "search" : "discover";
      const { data } = await axios.get(`${API}/${type}/movie`, {
        params: { api_key: API_KEY, query: searchKey },
      });
      setPeliculas(data.results);
      setPelicula(null); // Restablecer la película seleccionada
      setPlaying(false); // Cerrar la opción de reproducir el tráiler
    } catch (error) {
      console.error("Error al buscar películas:", error);
    }
  };

  const fetchMovie = async (id) => {
    try {
      const { data } = await axios.get(`${API}/movie/${id}`, {
        params: { api_key: API_KEY, append_to_response: "videos" },
      });
      if (data.videos && data.videos.results) {
        const trailer = data.videos.results.find((vid) => vid.name === "Official Trailer");
        setTrailer(trailer ? trailer : data.videos.results[0]);
      }
      setPelicula(data);
    } catch (error) {
      console.error("Error al obtener detalles de la película:", error);
    }
  };

  const selectMovie = async (pelicula) => {
    fetchMovie(pelicula.id);
    setPelicula(pelicula);
    window.scrollTo(0, 0);
  };

  const searchPeliculas = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  useEffect(() => {setCargando(true)
    fetchMovies();setCargando(false)
  }, []);
  if (cargando){return<div>Cargando</div>}
  return (
    <div>
      <div className="Text">
        <h1>Unlimited movies, TV</h1>
        <h1>show and more.</h1>
        <h2>watch anywhere.Cancel anytime.</h2>
        <h4>puedes buscar tu pelicula y hacer click para disfrutarla.</h4> </div>
        
      <form onSubmit={searchPeliculas}>
        <input
          type="text"
          placeholder="Buscar películas"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button type="submit">Buscar</button>
        <button onClick={() => { setPeliculas([]); setSearchKey(""); }}>Limpiar</button>
  
       
      </form>
      {/* Contenedor del reproductor */}
      <div>
        <main>
          {pelicula ? (
            <div
              className="viewtrailer"
              style={{ backgroundImage: `url("${imgURL2}${pelicula.backdrop_path}")` }}
            >
              {playing ? (
                <>
                  <YouTube
                    videoId={trailer.key}
                    className="reproductor container"
                    containerClassName={"youtube-container amru"}
                    opts={{

                    }}
                  />
                  <button onClick={() => setPlaying(false)} className="boton">
                    Cerrar
                  </button>
                </>
              ) : (
                <div className="container">
                  <div className="">
                    {trailer ? (
                      <button
                        className="boton"
                        onClick={() => setPlaying(true)}
                        type="button"
                      >
                        Tráiler
                      </button>
                    ):(
                      "Perdón, no tiene tráiler"
                    )}
                     <button
                      id="boton-mirar">
                      <Link to="/pelicula/:pelicula-ver-peli" style={{textDecoration:"none", color: "white"}}>Play</Link>
                    </button>
                    <h1 className="text-white">{pelicula.title}</h1>
                    {pelicula ? pelicula.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                    <p className="text-white">{pelicula.overview}</p>
                  </div>
                </div>
              )}
            </div>
          ) : null} :
        </main>
      </div>

      <div className="Card-abajo">
      {peliculas.map((pelicula) => (
      
          <div key={pelicula.id} onClick={() => selectMovie(pelicula)}>
            <img
              src={`${imgURL}${pelicula.poster_path}`}
              alt=""
           
            />
          </div>
        ))}
      </div>
      
    </div>
  );
};
/*bootstrap
    firebase
react-router-dom
sweetalert2
    sweetalert2-react-content, import 'bootstrap/dist/css/bootstrap.min.css'*/