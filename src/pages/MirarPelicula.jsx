import React, { useState } from "react";



export const MirarPelicula = () => {
  const [showVideo, setShowVideo] = useState(false);
  const img = "/piclonnetflix/Play-Button-Transparent-Image.png"; // Ruta de la imagen
 

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="contenedorDetalle">
      {showVideo ? (
        <video controls height={600} width="100%">
          <source
            src="/piclonnetflix/y2meta.net_480p-20th-century-fox-intro-hd.mp4"
            type="video/mp4"
          />
        </video>
      ) : (
        <img
          className="col"
          src={img}
          alt=""
          onClick={handleVideoClick}
          height={600}
          width="100%"
        />
      )}
   
    </div>
  );
};


