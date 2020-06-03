import React,{useState, useEffect} from "react";
import PropTypes from "prop-types";

//components
import { CardInfo } from "../CardInfo";

//custom component
import LazyLoad from 'react-lazyload';

//styles
import { CardWrapper } from "./card.styles";


const Card = ({pokemon_name, pokemon_URL, imageURL}) =>{
    //if dont use Redux for state management then this code will handle the images
    //hooks
    // const [pokemonImgUrl, setPokemonImgURL] = useState (""),
    //     [pokemonName, setPokemonName] = useState ("");

    // useEffect(() => {
    //     const pokemonIndex = pokemon_URL.split('/')[pokemon_URL.split('/').length - 2];
    //     const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    //     setPokemonImgURL(imageUrl);
    //     setPokemonName(pokemon_name);
    //     }, []) ;
        
    return(
        <LazyLoad height={200} once offset={-100}>
            <CardWrapper pokemon_image = {imageURL}>
                <LazyLoad height={200} once offset={-100}>
                <div className = "card_content">
                    <div className = "card_image"/>
                    <div className = "card_info">
                        <CardInfo pokemon_name = {pokemon_name} />
                    </div>
                </div>
                </LazyLoad>
            </CardWrapper>   
        </LazyLoad>    
    )
}

Card.propTypes = {
    pokemonName: PropTypes.string,
    pokemonImage: PropTypes.string,
    pokemonDetailLink: PropTypes.string,
};

export default Card;