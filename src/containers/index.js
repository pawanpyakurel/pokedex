import React from "react";

//components
import Home from "./Home";
import {Navbar} from "../components/Navbar";

export default function index({ allPokemons}) {
    return (
      <>
        <Navbar/> 
        <Home allPokemons = {allPokemons}/>
      </>
    );
  }