import React from "react";

//styles
import { CardInfoWrapper } from "./CardInfo.styles";

const CardInfo = ({pokemon_name, searchText}) =>{
    var startIndex = pokemon_name && pokemon_name.indexOf(searchText);

    // Condition to check if the searchText is from first
    if (startIndex !== -1) {
        var endIndex = searchText && startIndex + searchText.length;
    } else {
        endIndex = searchText && startIndex + 1 + searchText.length;
    }

    return(
        <CardInfoWrapper>
            {searchText !== undefined ? (
                <div style={{ display: "flex"}}>
                    <p className="item-title" >{pokemon_name.substr(0, startIndex)}</p>
                    <p className="item-title" style={{ color: "#ebe200" }}>
                        {searchText}
                    </p>
                    <p className="item-title">
                        {pokemon_name.substr(endIndex, pokemon_name.length)}
                    </p>
                </div>
            ) :
                <div className = "cardInfoContent">
                    <h1> {pokemon_name} </h1>
                </div>
            }
        </CardInfoWrapper>

    )
}

export default CardInfo;