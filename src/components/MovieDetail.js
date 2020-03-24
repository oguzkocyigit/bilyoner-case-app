import React from "react";
import './MovieDetail.scss'
import defaultImage from '../assets/image/no-image-available.png'

const MovieDetail = ({ movieDetailData }) => {

  const poster = movieDetailData.Poster === "N/A" ? defaultImage : movieDetailData.Poster;

  return (
    <div className="columns vertical-align">
      <div className="column is-4">
        <img
          className="movie-detail-img"
          alt={`${movieDetailData.Title}`}
          src={poster}
        />
      </div>
      <div className="column">
        <div className="columns">
          <div className="column is-narrow w-150">
            <p className="has-text-weight-bold">Title:</p>
          </div>
          <div className="column">
            <p>{movieDetailData.Title}</p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-narrow w-150">
            <p className="has-text-weight-bold">Genre:</p>
          </div>
          <div className="column">
            <p>{movieDetailData.Genre}</p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-narrow w-150">
            <p className="has-text-weight-bold">Released:</p>
          </div>
          <div className="column">
            <p>{movieDetailData.Released}</p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-narrow w-150">
            <p className="has-text-weight-bold">Runtime:</p>
          </div>
          <div className="column">
            <p>{movieDetailData.Runtime}</p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-narrow w-150">
            <p className="has-text-weight-bold">Director:</p>
          </div>
          <div className="column">
            <p>{movieDetailData.Director}</p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-narrow w-150">
            <p className="has-text-weight-bold">Actors:</p>
          </div>
          <div className="column">
            <p>{movieDetailData.Actors}</p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-narrow w-150">
            <p className="has-text-weight-bold">Awards:</p>
          </div>
          <div className="column">
            <p>{movieDetailData.Awards}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MovieDetail;
