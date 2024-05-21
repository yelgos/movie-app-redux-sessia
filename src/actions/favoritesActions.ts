import { Action, ActionStrings, Movie } from "../types/types";


export const toggleFavorites = (): Action => {
    return({type: ActionStrings.TOGGLE_FAVORITES});
}

export const addFavorite = (movie: Movie): Action => {
    return({type: ActionStrings.ADD_FAVORITE, payload: movie});
}

export const removeFavorite = (id: number): Action => {
    return({type: ActionStrings.REMOVE_FAVORITE, payload: id});
}