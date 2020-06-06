import React,{useState, useEffect} from "react";
import { connect } from "react-redux";

import {Link } from 'react-router-dom';
import {getPokemonsProfile } from "../../redux/actions/getPokemonProfileAction";
import { Card } from "../Card";
import { ProgressBar} from "../ProgressBar";
import { Types} from "../Types";
import { Description} from "../Description"

import {DetailsWrapper, DetailsHeader} from "./Details.styles";
import { FaArrowLeft } from "react-icons/fa";

const Details = (props) => {

    useEffect(() => { 
        props.getPokemonsProfile(props._id);
    }, []);
    
    // console.log(props.pokemonProfile,"pokemon profile")
    return (
        <DetailsWrapper>
            <DetailsHeader>
                <Link to="/" className ="DetailHeaderWrapper"> 
                    <FaArrowLeft size={40} />
                </Link>
            </DetailsHeader>
            <div className = "DetailsBody">
                <div className = "DetailsBodyWrapper">
                    <span className = "PokemonName">
                        {props.pokemonProfile && props.pokemonProfile.name}
                    </span>
                    <div className = "PokemonInfo">
                        <div className = "CardContentWrapper">
                            <Card  _id ={props._id} />
                            <Types />
                        </div>
                        <ProgressBar _id ={props._id}/>
                    </div>
                    <Description _id ={props._id}/>
                </div>
            </div>
                {/* {props.pokemonProfile && props.pokemonProfile.name}
               <br />
               {props.pokemonProfile && props.pokemonProfile.height}
               <br />
               {props.pokemonProfile && props.pokemonProfile.weight} */}
        </DetailsWrapper>
    );
};

const mapStateToProps = state => ({
    pokemonProfile: state.pokemonProfile.Profile
});
  
  
export default connect(
    mapStateToProps,
    {getPokemonsProfile }
)(Details);