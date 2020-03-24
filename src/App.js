import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import MovieView from './views/MovieView'
import MovieDetailView from './views/MovieDetailView'

function App () {

  return (
    <Router>
      <Switch>
        <Route
          path='/'
          exact
          component={MovieView}
        />

        <Route
          path='/movie-detail/:imdbID'
          exact
          component={MovieDetailView}
        />

        <Redirect from='*' to='/'/>
      </Switch>
    </Router>
  )
}

export default App
