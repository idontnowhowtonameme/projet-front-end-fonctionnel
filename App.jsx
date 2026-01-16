import { useState, useEffect } from 'react';
import './App.css';
import PokemonCard from './PokemonCard';
import PokemonDetail from './PokemonDetail'; 
 
function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
 
  const fetchPokemons = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025');
      const data = await response.json();
      setPokemonList(data.results);
    } catch (error) {
      console.error("Erreur lors de la récupération:", error);
    }
  };
 
  useEffect(() => {
    fetchPokemons();
  }, []);
 
  const filteredPokemons = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  return (
<div className="App">
<h1>Mon Pokédex</h1>    
      {selectedPokemon ? (    
<PokemonDetail 
          pokemon={selectedPokemon} 
          onBack={() => setSelectedPokemon(null)} 
        />    
      ) : (
<>
<input 
            type="text" 
            placeholder="Rechercher..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          /> 
<div className="pokemon-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))'
}}>
  
            {filteredPokemons.map((poke) => ( 
<PokemonCard 
                key={poke.name} 
                pokemon={poke} 
                onSelect={setSelectedPokemon} 
              />
            ))} 
</div>
</>
      )}
</div>
  );
}
 
export default App;