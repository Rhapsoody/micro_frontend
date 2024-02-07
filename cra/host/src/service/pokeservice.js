import React from 'react';

export const pokeData = async (pokemonName) => {
 

  const data  = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  console.log(data);
  return data.json();
}
