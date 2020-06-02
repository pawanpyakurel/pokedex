import { call, put } from "redux-saga/effects";   //saga effects
import { GET_ALL_POKEMONS_SUCCESS, GET_ALL_POKEMONS_FAILURE} from "../redux/actions/Types";    //action types

//api
import {getAllPokemons } from "../services/api";

export function* pokemonFetchSaga(action){
    try{
        const response = yield call(getAllPokemons, action.payload);
        const resPayload = response.data;

        // dispatch a success action to the store with the pokemons
        yield put({ type: GET_ALL_POKEMONS_SUCCESS, resPayload });
    }
    catch(error) {
        yield put({ type: GET_ALL_POKEMONS_FAILURE, error });
    }
}




