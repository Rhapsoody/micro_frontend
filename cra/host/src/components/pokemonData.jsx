import React ,{ useState }from 'react';
import { pokeData } from '../service/pokeservice';
import styles from '../styles.module.css';

const FetchData = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    const [error, setError] = useState(null);

    const handleSearchOnChange = (event) => {
      setPokemonName(event.target.value);
    }
    
    const handleSearch = async() => {
      event.preventDefault();
      try{
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
        .then(data => {
          if (!data.ok) {
            throw new Error("data not found");
          }
          return data.json();
        })
        .then((result) => {
          setPokemonData(result);
        })
        .catch(err =>{ 
          console.log(err);
        });
      }
      catch(error){
        console.log(error);
      }
    }

    return (
      <div>
        <form>
          <span > Enter a pokemon name</span>
          <input className={styles.inputPokemon}type="text" value={pokemonName} placeholder='search...' name={"searchPokemon"} onChange={handleSearchOnChange} />
          <button className={styles.searchBtn} type="submit" onClick={handleSearch}>Search</button>
        </form>
        {pokemonData && (
          <div>
            <h2>{pokemonData?.name}</h2>
            <img src={`${pokemonData?.sprites?.front_default}`} alt="sprites" />

            {pokemonData?.stats?.map((el)=> (
              <div key={el?.stat?.name}>{`${el?.stat.name } : ${el?.base_stat}`}</div>
            ))}
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