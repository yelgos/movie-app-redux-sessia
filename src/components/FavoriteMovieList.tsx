import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/favoritesActions';
import { Movie } from '../types/types';

type MovieHeaderProps = {
    favorites: Movie[];
    removeFavorite: (id: number) => void;
}

const FavoriteMovieList = (props: MovieHeaderProps) => {
    
    return (<div className="col-xs savedContainer fav-container">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div className='fav-area' key={movie.id}>
                    <Link className="savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <br/>
                    </Link>
                    <div className='unfav' onClick={() => props.removeFavorite(movie.id)}>⮿</div> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state: any) => {
    return {
        favorites: state.favoritesReducer.favorites
    }
}

export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);