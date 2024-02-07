export const pokeData = async pokemonName => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(data =>
    data.json(),
  );

  console.log(data);
};