import React, {useState, useEffect} from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

//components

import { Spinner } from "./components/Spinner"

//custom components
import { getALLPokemons } from "./redux/actions/getAllPokemonsAction";

// styles
import GlobalStyle from "./App.styles";

function App(props) {
  
  //hooks
  const [ fetchingPokemons, setFetchingPokemons] = useState(null);

  useEffect(() => {
    const fetchAllPokemons = () =>{
      return props.getALLPokemons(100);
    }
    fetchAllPokemons();
  }, []) ;



  return (
    <>
      <GlobalStyle />
      <Spinner />
    </>
  );
}

const mapStateToProps = state => ({
  fetching: state.pokemons.fetching,
  pokemons: state.pokemons.pokemons,
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      getALLPokemons
    }
  )(App)
);
