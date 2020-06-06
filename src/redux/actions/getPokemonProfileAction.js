//request 
import { GET_POKEMON_PROFILE_REQUEST} from "./Types";

export const getPokemonsProfile = (data) =>({
    type: GET_POKEMON_PROFILE_REQUEST,
    payload: data
});