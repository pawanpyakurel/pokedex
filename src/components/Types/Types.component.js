import React, {useState} from "react";
import { connect } from "react-redux";

import {TypesWrapper} from "./Types.styles";
import { TYPE_COLORS,colors } from "../../config/theme";

const Types = ({pokemonTypes}) => {

    let themeColor = colors.green;

    //types
    const types = pokemonTypes && pokemonTypes.map(type => type.type.name);

    // themeColor = TYPE_COLORS[types && types[types && types.length - 1]];

    return (
      <TypesWrapper>
        <div className = "BadgeWrapper">
            {
                types && types.map(type =>(
                    
                        <span
                            key={type}
                            className="TypeBadge"
                            style={{
                                backgroundColor: `#${TYPE_COLORS[type]}`,
                            }}
                        >
                            {
                                type
                                .toLowerCase()
                                .split(' ')
                                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                                .join(' ')
                            }
                        </span>
                    
                ))
            }
        </div>
      </TypesWrapper>
  
    );
};

const mapStateToProps = state => ({
    pokemonTypes: state.pokemonProfile.Profile && state.pokemonProfile.Profile.types
});
  
export default connect (mapStateToProps)(Types);