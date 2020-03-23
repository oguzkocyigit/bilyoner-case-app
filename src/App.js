import React, { useReducer, useEffect } from 'react'

import Header from './components/Header'
import Movie from './components/Movie'
import Search from './components/Search'
import { initialState, reducer } from './store/reducer'
import Axios from 'axios'
import Slider from 'react-slick'

function App () {
  const [state, dispatch] = useReducer(reducer, initialState)
  const API_URL = 'https://www.omdbapi.com/'
  const API_KEY = '5c3e7c7d'

  useEffect(() => {
    Axios
      .get(`${API_URL}?s=lion&apikey=${API_KEY}`)
      .then(jsonResponse => {
        dispatch({
          type: 'SEARCH_SUCCESS',
          payload: jsonResponse.data.Search
        })
      })
  }, [])

  const search = searchValue => {
    dispatch({
      type: 'SEARCH_REQUEST'
    })

    Axios(`${API_URL}?s=${searchValue}&apikey=${API_KEY}`)
      .then(
        jsonResponse => {
          // debugger // eslint-disable-line
          if (jsonResponse.data.Response) {
            dispatch({
              type: 'SEARCH_SUCCESS',
              payload: jsonResponse.data.Search
            })
          } else {
            dispatch({
              type: 'SEARCH_FAILURE',
              error: jsonResponse.data.Error
            })
          }
        }
      )
  }

  const { movies } = state

  const retrievedMovies = movies

  const settings = {
    dots: true,
    arrows:true,
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

        <Search search={search}/>

        <Slider {...settings}>
          {
            retrievedMovies.map((movie, index) => (
              <div>
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
  )
}

export default App
