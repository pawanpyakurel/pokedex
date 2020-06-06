// actions
import { 
    GET_POKEMON_DESCRIPTION_REQUEST,
    GET_POKEMON_DESCRIPTION_FAILURE,
    GET_POKEMON_DESCRIPTION_SUCCESS,
} from "../actions/Types";


// reducer with initial state
const initialState = {
    fetching: false,
    error: null,
    Description: null
};

export const pokemonDescription = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMON_DESCRIPTION_REQUEST :
            return {
                ...state,
                fetching: true,
            }
        case GET_POKEMON_DESCRIPTION_SUCCESS :
            return {
                ...state,
                fetching: false,
                Description: action.resPayload,
            }
        case GET_POKEMON_DESCRIPTION_FAILURE :
            return{
                ...state,
                fetching: false,
                error: true,
            }
        default:
            return state;
    }
};