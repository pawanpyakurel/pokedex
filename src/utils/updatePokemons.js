const updatePokemons = (allPokemons) =>{
     
    // console.log(allPokemons, "all pokemons data")
    var updateAllPokemons = []
    updateAllPokemons = allPokemons && allPokemons.map((pokemon, index) =>{
        
        var imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index+1}.png?raw=true`;
        return pokemon.image = {...pokemon, imageUrl};
    })

    return updateAllPokemons;
}

export default updatePokemons;