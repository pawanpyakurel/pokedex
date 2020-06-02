//saga effects
import { takeLatest, all } from "redux-saga/effects";

import { GET_ALL_POKEMONS_REQUEST} from "../redux/actions/Types";
import { pokemonFetchSaga } from "./getAllPokemonsSaga"

export default function* rootSagas() {
    yield all([ 
        takeLatest(GET_ALL_POKEMONS_REQUEST, pokemonFetchSaga )
    ]);
}