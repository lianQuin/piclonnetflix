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

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
    <div className="Text">
      <h2>Unlimited movies, TV</h2>
      <h2>show and more.</h2>
      <h4>watch anywhere.Cancel anytime.</h4>
      <h6>puedes buscar tu pelicula y hacer click para disfrutarla.</h6> </div>
      
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
                     
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_polity: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        rel: 0,
                        showinfo: 0,
                      },
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
                        Reproducir tráiler
                      </button>
                    ):(
                      "Perdón, no tiene tráiler"
                    )}
                     <button
                      className="boton-mirar">
                      <Link to="/pelicula/:pelicula-ver-peli" style={{textDecoration:"none"}}>Play</Link>
                    </button>
                    <h1 className="text-white">{pelicula.title}</h1>
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
            <h4 className="colorTitle">{pelicula.title}</h4>
          </div>
        ))}
      </div>
      
    </div>
  );
};