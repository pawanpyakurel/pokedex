import React, { useState} from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

//components
import { CardInfo } from "../CardInfo";

//custom component
import LazyLoad from 'react-lazyload';

//styles
import { CardWrapper } from "./card.styles";


const Card = ({pokemon_name, imageURL, searchText, _id,}) =>{
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
        
    const [isShowDetail, setisShowDetail] = useState (false);

    const showDetail = () =>{
        setisShowDetail(true);
    }
    const hideDetail = () =>{
        setisShowDetail(false);
    }

    const imageLink = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${_id}.png?raw=true`;

    return(
        <>
        {
            !!imageURL ? 
                <Link to={`/details/${_id}`}> 
                    <LazyLoad height={200} once offset={-50}>
                        <CardWrapper pokemon_image = {imageURL} onClick = {showDetail}>
                            <LazyLoad height={200} once offset={-60}>
                                <div className = "card_content">
                                    <div className = "card_image"/>
                                    <div className = "card_info">
                                        <CardInfo 
                                            pokemon_name = { pokemon_name } 
                                            searchText = { searchText }
                                        />
                                    </div>
                                </div>
                            </LazyLoad>
                        </CardWrapper>   
                    </LazyLoad> 
                </Link>
            :
                <CardWrapper pokemon_image = {imageLink}>
                    <LazyLoad height={200} once offset={0}>
                        <div className = "card_content">
                            <div className = "card_image"/>
                        </div>
                    </LazyLoad>
                </CardWrapper>   
        }
        </>   
    )
}

Card.propTypes = {
    pokemonName: PropTypes.string,
    pokemonImage: PropTypes.string,
    pokemonDetailLink: PropTypes.string,
};

export default withRouter(Card);