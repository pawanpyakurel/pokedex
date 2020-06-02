// actions

import { 
    GET_ALL_POKEMONS_REQUEST,
    GET_ALL_POKEMONS_SUCCESS,
    GET_ALL_POKEMONS_FAILURE
} from "../actions/Types";

// reducer with initial state
const initialState = {
    fetching: false,
    pokemons: null,
    error: null
};

export const pokemons = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS_REQUEST :
            return {
                ...state,
                fetching: true,
            }
        case GET_ALL_POKEMONS_SUCCESS :
            return {
                ...state,
                fetching: false,
                pokemons: action
            }
        case GET_ALL_POKEMONS_FAILURE :
            return{
                ...state,
                fetching: false,
                error: true
            }
        default:
            return state;
    }
};