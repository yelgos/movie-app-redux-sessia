import { Action, ActionStrings, PostMovie } from "../types/types";

export const deleteMovie = (id: number): Action => {
    return({type: ActionStrings.DELETE_MOVIE, payload: id});
}

export const addMovie = (movie: PostMovie): Action => {
    return {type: ActionStrings.ADD_MOVIE, payload: movie};
}