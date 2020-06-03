import React from 'react';

import { Card } from "../components/Card";

export const CardStories = () =>(
    <Card pokemon_name = {"pidgeotto"} pokemon_URL = {"https://pokeapi.co/api/v2/pokemon/17/"} imageURL = {"https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/17.png?raw=true"}/>
)

export default {
    title: 'Card',
    component: Card,
  };
