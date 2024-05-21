import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFavorites } from '../actions/favoritesActions';

type MovieHeaderProps = {
    appTitle: string;
    displayFavorites: boolean;
    toggleFavorites: () => void;
}

const MovieHeader = (props: MovieHeaderProps) => {
    const handleToggFav = () => {
        props.toggleFavorites()
    }
    
    return(
    <div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{props.appTitle}</h2>
        </div>
        <div className="buttons">
            <div onClick={handleToggFav} className="btn">
            <span className='toggle'>{ props.displayFavorites ? "Hide" : "Show"} Favorites</span>
            </div>
            
            <Link to="/movies" className="btn">View All Movies</Link>
            <br/>
            <div className='divider'></div>
            <Link to="/movies/add" className="btn">Add New Movie</Link>
        </div>
        </div>
    </div>);
}

const mapStateToProps = (state: any) => {
    return {
      appTitle: state.movieReducer.appTitle,
      displayFavorites: state.favoritesReducer.displayFavorites
    }
}
export default connect(mapStateToProps, { toggleFavorites })(MovieHeader);