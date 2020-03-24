import React, { useReducer, useEffect } from 'react'
import { initialState, reducer } from '../store/reducer'

import Axios from 'axios'
import Slider from 'react-slick'
import Header from '../components/Header'
import Movie from '../components/Movie'
import Search from '../components/Search'
import '../components/Movie.scss'
import Notifications, { notify } from 'react-notify-toast'
import spinner from "../assets/image/ajax-loader.gif";

function MovieView () {
  const [state, dispatch] = useReducer(reducer, initialState)

  const API_URL = 'https://www.omdbapi.com/'
  const API_KEY = '5c3e7c7d'
  const defaultSearch = 'Matrix'
  let myColor = { background: 'rgba(219, 68, 59, 0.8)', text: '#FFFFFF' }

  useEffect(() => {
    search(defaultSearch)
  }, [])

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });
    Axios(`${API_URL}?s=${searchValue}&apikey=${API_KEY}`)
      .then(
        jsonResponse => {
          if (jsonResponse.data.Response === "True") {
            dispatch({
              type: "SEARCH_MOVIES_SUCCESS",
              payload: jsonResponse.data.Search
            });
          } else {
            dispatch({
              type: "SEARCH_MOVIES_FAILURE",
              error: jsonResponse.data.Error
            });
            notify.show('No Result!', 'custom', 2000, myColor)
          }
        }
      )
  }

  const { movies, loading } = state;

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    easing: 'ease-in-out',
  }

  return (
    <div className="App">
      <div className="movie-list-container">
        <Header text="Movie List React App"/>
        <div className="container">
          <Search search={search}/>
          <Notifications/>
          {loading && (
            <div className="center-div">
              <img className="spinner" src={spinner} alt="Loading spinner" />
            </div>
          )}
          <Slider {...settings}>
            {
              movies
                .map((movie, index) => (
                  <div className="mt-50">
                    <Movie
                      key={`${index}-${movie.Title}`}
                      movie={movie}
                    />
                  </div>
                ))
            }
          </Slider>
        </div>

      </div>
    </div>
  )

}

export default MovieView