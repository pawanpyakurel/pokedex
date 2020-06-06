import React from "react";
import { Route, Switch } from "react-router-dom";

//custom components
import Home from "../containers/index";
import { PageNotFound} from "../components/PageNotFound"
import PokemonDetail from "../containers/PokemonDetail";

const Routes = () => {
    return (
      <>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details/:id" exact component={PokemonDetail} />
          <Route component={PageNotFound} />
        </Switch>
      </>
    );
  };
  
  export default Routes;
  