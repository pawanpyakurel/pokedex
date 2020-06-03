import React from "react";

//styles
import { CardInfoWrapper } from "./CardInfo.styles";

const CardInfo = ({pokemon_name}) =>{
    return(
        <CardInfoWrapper>
            <div className = "cardInfoContent">
                <h1> {pokemon_name} </h1>
            </div>
        </CardInfoWrapper>
    )
}

export default CardInfo;