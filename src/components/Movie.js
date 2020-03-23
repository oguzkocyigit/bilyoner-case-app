import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <a href="#">
        <div className="movie-frame">
          <img
            alt={`${movie.Title}`}
            src={movie.Poster}
          />
        </div>
        <p style={{textAlign:'center'}}>{movie.Title}</p>
        <p style={{textAlign:'center'}}>({movie.Year})</p>
      </a>
    </div>
  );
};

export default Movie;
