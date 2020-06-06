import React,{useState} from "react";
import { connect } from "react-redux";

import {ProgressBarWrapper, ProgressMeter} from "./ProgressBar.styles";
import { TYPE_COLORS,colors } from "../../config/theme";

const ProgressBar = ({pokemonProfile, pokemonTypes}) => {        
    //progress bar data of hp, attack, defense, speed, specialAttack, specialDefense ;
    let { hp, attack, defense, speed, specialAttack, specialDefense } = '';
    pokemonProfile &&  pokemonProfile.map(stat => {
        switch (stat.stat.name) {
          case 'hp':
            hp = stat['base_stat'];
            break;
          case 'attack':
            attack = stat['base_stat'];
            break;
          case 'defense':
            defense = stat['base_stat'];
            break;
          case 'speed':
            speed = stat['base_stat'];
            break;
          case 'special-attack':
            specialAttack = stat['base_stat'];
            break;
          case 'special-defense':
            specialDefense = stat['base_stat'];
            break;
          default:
            break;
        }
    });

    const progressStateList = [
        {
            name: "HP",
            value: hp
        },
        {
            name: "Attack",
            value: attack
        },
        {
            name: "Defense",
            value: defense
        },
        {
            name: "Speed",
            value: speed
        },
        {
            name: "SA",
            value: specialAttack
        },
        {
            name: "SA",
            value: specialDefense
        }

    ];

    let themeColor = colors.green;

    //types
    const types = pokemonTypes && pokemonTypes.map(type => type.type.name);

    themeColor = TYPE_COLORS[types && types[types && types.length - 1]];

    //types
    // const types = props.pokemonProfile && props.pokemonProfile.types && props.pokemonProfile.types.map(type => type.type.name);


    // EVs
    // const EVs = props.pokemonProfile && props.pokemonProfile.stats && props.pokemonProfile.stats
    //     .filter(stat => {
    //         if (stat.effort > 0) {
    //         return true;
    //         }
    //         return false;
    //     })
    //     .map(stat => {
    //         return `${stat.effort} ${stat.stat.name
    //         .toLowerCase()
    //         .split('-')
    //         .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    //         .join(' ')}`;
    //     })
    //     .join(', ');
    
    // //abilities

    // const abilities = props.pokemonProfile && props.pokemonProfile.abilities && props.pokemonProfile.abilities
    //   .map(ability => {
    //     return ability.ability.name
    //       .toLowerCase()
    //       .split('-')
    //       .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    //       .join(' ');
    //   })
    //   .join(', ');



    return (
      <ProgressBarWrapper >
        {progressStateList && progressStateList.map(progress =>
            <div className = "progressWrapper" key = {progress.name}>
                <div className = "StatsTitle">
                <h1> {progress.name} </h1>
                </div>
                <ProgressMeter progressValue= {progress.value} themeColor = {themeColor}>
                    <span className= "ValueWrapper"> {`${progress.value}%`} </span>
                    <span className = "ProgressStatus" /> 
                </ProgressMeter>
            </div>
        )}
      </ProgressBarWrapper>
    );
};

const mapStateToProps = state => ({
    pokemonTypes: state.pokemonProfile.Profile && state.pokemonProfile.Profile.types,
    pokemonProfile: state.pokemonProfile.Profile && state.pokemonProfile.Profile.stats
});
  
export default connect(mapStateToProps)(ProgressBar);