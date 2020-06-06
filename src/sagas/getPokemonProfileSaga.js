import { call, put } from "redux-saga/effects";   //saga effects
import { GET_POKEMON_PROFILE_SUCCESS, GET_POKEMON_PROFILE_FAILURE} from "../redux/actions/Types";    //action types

//api
import {getPokemonProfile } from "../services/api";

export function* pokemonProfileFetchSaga(action){
    try{
        const response = yield call(getPokemonProfile, action.payload);
        const resPayload = response.data;

        // dispatch a success action to the store with the pokemons
        yield put({ type: GET_POKEMON_PROFILE_SUCCESS, resPayload });
    }
    catch(error) {
        yield put({ type: GET_POKEMON_PROFILE_FAILURE, error });
    }
}