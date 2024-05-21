import React from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { deleteMovie } from '../actions/movieActions';
import { addFavorite } from '../actions/favoritesActions';
import { Movie } from '../types/types';

type MovieProps = {
    movies: Movie[];
    displayFavorites: boolean;
    deleteMovie: (id: number) => void;
    addFavorite: (movie: Movie) => void;
}

const MoviePage = (props: MovieProps) => {
    const { id } = useParams<{id?: string}>(); //TS generic
    const { push } = useHistory();

    const movie = props.movies.find(movie=>movie.id===Number(id));

    const deleteMovie = () => {
        id && props.deleteMovie(parseInt(id));
        push('/movies')
    }
    
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie?.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie?.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie?.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie?.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie?.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie?.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            {props.displayFavorites && <span className="fav-button" onClick={() => movie && props.addFavorite(movie)}>Favorite</span>}
                            <span onClick={deleteMovie} className="delete"><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

const mapStateToProps = (state:any) => {
    return {
      movies: state.movieReducer.movies,
      displayFavorites: state.favoritesReducer.displayFavorites
    }
}
export default connect(mapStateToProps, { deleteMovie, addFavorite })(MoviePage)