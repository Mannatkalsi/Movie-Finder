import React from "react";
import poster from "../images/poster.jpeg"


//const DEFAULT_PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg";

const DEFAULT_PLACEHOLDER_IMAGE = poster;
const Movie = ({ movie }) => {
  const poster =
      movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (
      <div className="movie">
        <h2>{movie.Title}</h2>
        <div>
          <img
            width="200"
            alt={`The movie titled: ${movie.Title}`}
            src={poster}
          />
        </div>
        <p><b>Year:</b> {movie.Year}</p>
        <p><b>Type:</b> {movie.Type}</p>

        <br/>
      </div>

    );
  };
  
  
  export default Movie;