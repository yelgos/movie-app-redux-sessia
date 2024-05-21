import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import MovieHeader from './components/MovieHeader';
import { Redirect, Route, Switch } from 'react-router-dom';
import FavoriteMovieList from './components/FavoriteMovieList';
import MovieList from './components/MovieList';
import MoviePage from './components/MoviePage';
import AddMovieForm from './components/AddMovieForm';

type AppProps = {
  displayFavorites: boolean;
}

function App(props: AppProps) {
  const { displayFavorites } = props;

  return (
    <div>
      <nav className="navbar">
        <span>Redux Module Project</span>
      </nav>
      <div>
      <MovieHeader/>
      <div className="row">
          {displayFavorites && <FavoriteMovieList/>}
        
          <Switch>
            <Route exact path="/movies/add">
              <AddMovieForm />
            </Route>

            <Route path="/movies/:id">
              <MoviePage />
            </Route>

            <Route path="/movies">
              <MovieList/>
            </Route>

            <Route path="/">
              <Redirect to="/movies"/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default connect((state: any) => ({
  displayFavorites: state.favoritesReducer.displayFavorites
}))(App);