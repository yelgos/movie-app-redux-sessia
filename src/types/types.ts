export interface Movie {
    id: number;
    title: string;
    director: string;
    metascore: number;
    genre: string; 
    description: string;
}

export interface PostMovie {
    title: string;
    director: string;
    metascore: number;
    genre: string; 
    description?: string;
}

export interface MovieState {
    movies: Movie[];
    appTitle: string;
}

export interface FavoritesState {
    favorites: Movie[];
    displayFavorites: boolean;
}

export enum ActionStrings {
    ADD_MOVIE = 'ADD_MOVIE', //value starts at 0
    DELETE_MOVIE = 'DELETE_MOVIE',
    TOGGLE_FAVORITES = 'TOGGLE_FAVORITES',
    ADD_FAVORITE = 'ADD_FAVORITE',
    REMOVE_FAVORITE = 'REMOVE_FAVORITE'
}

export type Action =
| {type: ActionStrings.ADD_MOVIE, payload:PostMovie}
| {type: ActionStrings.DELETE_MOVIE, payload:number}
| {type: ActionStrings.TOGGLE_FAVORITES}
| {type: ActionStrings.ADD_FAVORITE, payload:Movie}
| {type: ActionStrings.REMOVE_FAVORITE, payload:number}
