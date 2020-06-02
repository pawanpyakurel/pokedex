import { combineReducers } from "redux";
import { pokemons } from "./getAllPokemonsReducer";

export default combineReducers({
    pokemons,
})