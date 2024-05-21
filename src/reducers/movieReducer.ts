import movies from "../data";
import { Action, ActionStrings, MovieState } from "../types/types";

const initialState: MovieState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state: MovieState = initialState, action: Action) => {
    switch(action.type) {
        case ActionStrings.ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies, action.payload]
            }
        case ActionStrings.DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        default:
            return state;
    }
}

export default reducer;
