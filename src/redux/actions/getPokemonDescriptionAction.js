//request 
import { GET_POKEMON_DESCRIPTION_REQUEST} from "./Types";

export const getPokemonsDescription = (data) =>({
    type: GET_POKEMON_DESCRIPTION_REQUEST,
    payload: data
});