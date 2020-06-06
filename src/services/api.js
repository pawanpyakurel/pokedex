import axios from "axios";

//pokemon api link https://pokeapi.co/docs/v2#pokemon-section

//default base url
const API_URL = process.env.REACT_APP_BASE_URL;
axios.defaults.baseURL = API_URL;


//getting all pokemons
const getAllPokemons = (limit)=> axios.get(`pokemon?limit=${limit}`) ;

//getting pokemons profile
const getPokemonProfile = (id)=> axios.get(`pokemon/${id}`) ;

//getting pokemon Description
const getPokemonDescription = (id)=> axios.get(`pokemon-species/${id}`)


export {
    getAllPokemons,
    getPokemonProfile,
    getPokemonDescription
}

export { axios }