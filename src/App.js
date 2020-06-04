import React, {useState, useEffect} from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

//components
import { Spinner } from "./components/Spinner";
import Container from "./containers"
 
//custom components
import { getALLPokemons } from "./redux/actions/getAllPokemonsAction";

// styles
import GlobalStyle from "./App.styles";

function App(props) {
  
  //hooks
  const [isLoading, setisLoading] = useState(true)
  const {getALLPokemons} = props;

  useEffect(() => {
    getALLPokemons(100);  //set load data 200
  }, [getALLPokemons]) ;

  useEffect (() =>{
    setTimeout(function() { //Start the timer
      setisLoading(false) //After 2 second, set loding false
    }, 1000)

  }, [isLoading])

  return (
    <>
      <GlobalStyle />
      {
        !!(props.fetching || isLoading) ?(
          <Spinner />
        )
        :
        <Container allPokemons = {props.pokemons}/>
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
