//saga effects
import { takeLatest, all } from "redux-saga/effects";

import { 
    GET_ALL_POKEMONS_REQUEST,
    GET_POKEMON_PROFILE_REQUEST
} from "../redux/actions/Types";
import { pokemonFetchSaga } from "./getAllPokemonsSaga";
import {pokemonProfileFetchSaga} from "./getPokemonProfileSaga";

export default function* rootSagas() {
    yield all([ 
        takeLatest(GET_ALL_POKEMONS_REQUEST, pokemonFetchSaga ),
        takeLatest(GET_POKEMON_PROFILE_REQUEST, pokemonProfileFetchSaga )
    ]);
}