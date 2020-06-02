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
  const [isLoading, setisLoading] = useState(true)
  const {getALLPokemons} = props;

  useEffect(() => {
    getALLPokemons(1000);
  }, [getALLPokemons]) ;

  useEffect (() =>{
    setTimeout(function() { //Start the timer
      setisLoading(false) //After 2 second, set loding false
    }, 2000)

  }, [isLoading])

  return (
    <>
      <GlobalStyle />
      {
        !!(props.fetching || isLoading) ?(
          <Spinner />
        )
        :
        <h1> welcome to pokedex</h1>
      }
      
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
