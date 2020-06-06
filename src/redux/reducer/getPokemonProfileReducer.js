// actions
import { 
    GET_POKEMON_PROFILE_REQUEST,
    GET_POKEMON_PROFILE_SUCCESS,
    GET_POKEMON_PROFILE_FAILURE
} from "../actions/Types";


// reducer with initial state
const initialState = {
    fetching: false,
    error: null,
    Profile: null
};

export const pokemonProfile = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMON_PROFILE_REQUEST :
            return {
                ...state,
                fetching: true,
            }
        case GET_POKEMON_PROFILE_SUCCESS :
            return {
                ...state,
                fetching: false,
                Profile: action.resPayload,
            }
        case GET_POKEMON_PROFILE_FAILURE :
            return{
                ...state,
                fetching: false,
                error: true,
            }
        default:
            return state;
    }
};