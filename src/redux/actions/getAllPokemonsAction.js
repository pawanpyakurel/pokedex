//request 
import { GET_ALL_POKEMONS_REQUEST } from "./Types";

export const getALLPokemons = (data) =>({
    type: GET_ALL_POKEMONS_REQUEST,
    payload: data
});