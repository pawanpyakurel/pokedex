import React, { Component } from 'react';

//components
import { Card } from "../components/Card";

//styles
import { HomeWrapper} from "./Home.styles"

class Home extends Component {
    render() {
        const {allPokemons} = this.props;
        console.log(allPokemons, " all Pokemons")
        return (
            <HomeWrapper>
                <div className = "CardContentWrapper" >
                    {
                        allPokemons && allPokemons.map (pokemon =>
                            pokemon && (
                                <Card  pokemon_name = {pokemon.name} key ={pokemon._id} _id = {pokemon._id} imageURL = {pokemon.imageUrl}/>
                            )
                        )
                    }
                </div>
               
            </HomeWrapper>
        );
    }
}

export default Home;