import React from "react";
import { connect } from "react-redux";
import { Movie } from "../types/types";
import { Link } from "react-router-dom";

type MovieListProps = {
  movies: Movie[];
};

const MovieList = (props: MovieListProps) => {
  return (
    <div className="col">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Genre</th>
            <th>Metascore</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {props.movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.director}</td>
              <td>{movie.genre}</td>
              <td>{movie.metascore}</td>
              <td>
                <Link to={`/movies/${movie.id}`} className="view">
                  <input
                    type="button"
                    className="btn btn-secondary"
                    value="View"
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="clearfix footer">
        <div className="hint-text">
          Showing <b>{props.movies.length}</b> entries
        </div>
      </div>
    </div>
  );
};

const mapToState = (state: any) => {
  return {
    movies: state.movieReducer.movies,
  };
};

export default connect(mapToState, {})(MovieList);
