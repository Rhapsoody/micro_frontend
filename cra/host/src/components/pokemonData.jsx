import React ,{ useState }from 'react';
import { pokeData } from '../service/pokeservice';

const FetchData = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    const [error, setError] = useState(null);

    const handleSearchOnChange = (event) => {
      setPokemonName(event.target.value);
    }

    const handleSearch = () => {
      event.preventDefault();
      try{
       const currentData = pokeData(pokemonName);
        console.log(currentData);
        setPokemonData(currentData);
        setError(null);
      }
      catch(error){
        console.log(error);
        setError(error);
      }
    }

    return (
      <div>
        <form>
          <span> Enter a pokemon name</span>
          <input type="text" value={pokemonName} onChange={handleSearchOnChange} />
          <button type="submit" onClick={handleSearch}>Search</button>
        </form>
        {pokemonData && (
          <div>
            <h2>{pokemonData.name}</h2>
          </div>
        )}
        {error && (
          <div>
            <h2>There was an error</h2>
            <p>{error}</p>
          </div>
        )}
      </div>
    );
  }

  export default FetchData;