import React from "react";
import { connect } from "react-redux";

//components
import Home from "./Home";
import {Navbar} from "../components/Navbar";

const index =({ pokemons}) => {
  return (
    <>
      <Navbar/> 
      <Home allPokemons = {pokemons}/>
    </>
  );
}

const mapStateToProps = state => ({
  pokemons: state.pokemons.pokemons,
});

const mapDispatchToProps = dispatch => {
  return {
    onPokemonRequest: () => dispatch({ type: "GET_ALL_POKEMONS_REQUEST" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);