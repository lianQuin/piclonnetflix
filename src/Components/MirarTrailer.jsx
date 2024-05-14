import React from "react";
import YouTube from "react-youtube"; // importar el componente YouTube

export const MirarTrailer = ({ trailer }) => { // pasar 'trailer' como prop
  return (
    <YouTube
      videoId={trailer.key}
      className="reproductor container"
      containerClassName="youtube-container amru"
      opts={{
        height: '390', // Añade la altura y la anchura del reproductor
        width: '640',
        playerVars: {
          autoplay: 1,
          controls: 1, // Habilita los controles
          cc_load_policy: 1, // Habilita los subtítulos (si están disponibles)
          fs: 1, // Habilita el modo de pantalla completa
          iv_load_policy: 3, // Deshabilita las anotaciones de video
          rel: 0, // Deshabilita los videos relacionados
          showinfo: 0, // Oculta la información del video
        },
      }}
    />
  );
};


