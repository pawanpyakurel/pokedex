import React,{ useEffect} from "react";
import { connect } from "react-redux";

import { getPokemonsDescription } from "../../redux/actions/getPokemonDescriptionAction";

import {DescriptionWrapper} from "./Description.styles";

const Description = (props) => {

    useEffect(() => { 
        props.getPokemonsDescription(props._id)
    }, []);

    //getting description
    let description = '';

    props.pokemonsDescription && props.pokemonsDescription.some(des =>{
        if(des.language.name === 'en'){
            description = des.flavor_text;
            return;
        }
        else return null;
    })

    console.log(props, "props data in the description")

    return (
        <DescriptionWrapper>
            <p> {description} </p>
        </DescriptionWrapper>
    );
};
const mapStateToProps = state => ({
    pokemonsDescription: state.pokemonDescription.Description && state.pokemonDescription.Description.flavor_text_entries,
});
  
export default connect (mapStateToProps,
    {
        getPokemonsDescription
    }
)(Description);