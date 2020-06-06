import { combineReducers } from "redux";
import { pokemons } from "./getAllPokemonsReducer";
import { pokemonProfile} from "./getPokemonProfileReducer";
import { pokemonDescription} from "./getPokemonDescriptionReducer";

export default combineReducers({
    pokemons,
    pokemonProfile,
    pokemonDescription
})