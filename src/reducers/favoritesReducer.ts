import { Action, ActionStrings, FavoritesState } from "../types/types"


const initialState: FavoritesState = {
    favorites: [],
    displayFavorites: true
}

const reducer = (state: FavoritesState = initialState, action: Action) => {
    switch(action.type) {
        case ActionStrings.TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ActionStrings.ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case ActionStrings.REMOVE_FAVORITE:
            const id = action.payload
            return {
                ...state,
                favorites: state.favorites.filter(movie => movie.id !== id)
            }         
        default:
            return state;
    }
}

export default reducer