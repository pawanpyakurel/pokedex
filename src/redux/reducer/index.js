import { combineReducers } from "redux";
import { pokemons } from "./getAllPokemonsReducer";
import { pokemonProfile} from "./getPokemonProfileReducer";

export default combineReducers({
    pokemons,
    pokemonProfile
})