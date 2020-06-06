import { call, put } from "redux-saga/effects";   //saga effects
import { GET_POKEMON_DESCRIPTION_SUCCESS, GET_POKEMON_DESCRIPTION_FAILURE} from "../redux/actions/Types";    //action types

//api
import {getPokemonDescription } from "../services/api";

export function* pokemonDescriptionSaga(action){
    try{
        const response = yield call(getPokemonDescription, action.payload);
        const resPayload = response.data;

        // dispatch a success action to the store with the pokemons
        yield put({ type: GET_POKEMON_DESCRIPTION_SUCCESS, resPayload });
    }
    catch(error) {
        yield put({ type: GET_POKEMON_DESCRIPTION_FAILURE, error });
    }
}