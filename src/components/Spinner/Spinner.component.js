import React from "react";

//icon
import pokemonLogo from "../../assets/images/favicon.png";

import {SpinnerWrapper} from "./Spinner.styles";

const Spinner = () => {
    return (
      <SpinnerWrapper>
        <span className="Spinner" />
      </SpinnerWrapper>
  
    );
  };
  
  export default Spinner;