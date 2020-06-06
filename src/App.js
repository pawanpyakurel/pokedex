import React, {useState, useEffect} from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

//components
import { Spinner } from "./components/Spinner";
 
//custom components
import { getALLPokemons } from "./redux/actions/getAllPokemonsAction";

//routes
import Routes from "./config/routes";

// styles
import GlobalStyle from "./App.styles";

function App(props) {
  //hooks
  const [isLoading, setisLoading] = useState(true);
  
  const {getALLPokemons} = props;

  useEffect(() => { 
    if(!props.pokemons){     //if not avaliable in the local storage then call the backend
      getALLPokemons(100);
    }
  }, []);


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
        <Routes />
      }
      
    </>
  );
}

const mapStateToProps = state => ({
  pokemons: state.pokemons.pokemons,
  fetching: state.pokemons.fetching
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      getALLPokemons
    }
  )(App)
);
