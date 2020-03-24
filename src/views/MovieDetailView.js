import React, { useState, useEffect, useReducer } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Axios from 'axios'
import MovieDetail from '../components/MovieDetail'
import '../components/MovieDetail.scss'
import spinner from '../assets/image/ajax-loader.gif'
import { initialState, reducer } from '../store/reducer'
import { notify } from 'react-notify-toast'

function MovieViewDetail () {
  const [movieDetail, setMovieDetail] = useState([])
  const [state, dispatch] = useReducer(reducer, initialState)
  const API_URL = 'https://www.omdbapi.com/'
  const API_KEY = '5c3e7c7d'
  const { imdbID } = useParams()
  const history = useHistory()

  useEffect(() => {
    Axios
      .get(`${API_URL}/?apikey=${API_KEY}&i=${imdbID}&plot=full&r=json`)
      .then(
        jsonResponse => {
          if (jsonResponse.data.Response === 'True') {
            dispatch({
              type: 'SEARCH_MOVIES_SUCCESS',
            })
            setMovieDetail(jsonResponse.data)
          } else {
            dispatch({
              type: 'SEARCH_MOVIES_FAILURE',
            })
          }
        }
      )
  }, [])

  const goBack = () => {
    history.goBack()
  }

  const { loading } = state

  return (
    <div className="movie-detail-card mt-50">
      <div className="container">
        {loading && (
          <div className="center-div">
            <img className="spinner" src={spinner} alt="Loading spinner"/>
          </div>
        )}
        <MovieDetail movieDetailData={movieDetail}/>
        <div className="columns">
          <div className="column has-text-right">
            <button onClick={goBack}>Back</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieViewDetail