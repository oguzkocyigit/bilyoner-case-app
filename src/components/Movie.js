import React from 'react'
import { useHistory } from 'react-router-dom'
import defaultImage from '../assets/image/no-image-available.png'

const Movie = ({ movie }) => {

  const history = useHistory()

  function handleMovieSelect () {
    history.push(`/movie-detail/${movie.imdbID}`)
  }

  const poster = movie.Poster === "N/A" ? defaultImage : movie.Poster;

  return (
    <div
      className="movie-card mb-30"
      onClick={handleMovieSelect}
    >
      <div className="movie-img-frame mb-30">
        <div className="center-div">
          <img
            alt={`${movie.Title}`}
            src={poster}
          />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <p style={{ textAlign: 'center' }}>{movie.Title}</p>
          <p style={{ textAlign: 'center' }}>({movie.Year})</p>
        </div>
      </div>
    </div>
  )
}

export default Movie
