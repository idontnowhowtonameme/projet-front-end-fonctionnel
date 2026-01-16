import { useState, useEffect } from 'react';
import './App.css';
import PokemonCard from './PokemonCard';
import PokemonDetail from './PokemonDetail';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('last_search') || "");
  // FIX 1 : On utilise un nom cohérent pour le filtre
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('pokedex_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const saveFavorite = (pokemon) => {
    const isAlreadyFavorite = favorites.some(fav => fav.name === pokemon.name);
    let updatedFavorites;
    if (isAlreadyFavorite) {
      updatedFavorites = favorites.filter(fav => fav.name !== pokemon.name);
    } else {
      updatedFavorites = [...favorites, pokemon];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('pokedex_favorites', JSON.stringify(updatedFavorites));
  };

  const fetchPokemons = async () => {
    try {
      setIsLoading(true);
      setError(null)
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      if (!response.ok) throw new Error("Erreur");
      const data = await response.json();
      setPokemonList(data.results);
    } catch (error) {
      setError("Erreur de chargement.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    localStorage.setItem('last_search', searchTerm);
  }, [searchTerm]);

  // LOGIQUE DE FILTRE : On choisit la source puis on filtre par texte
  const listSource = showFavoritesOnly ? favorites : pokemonList;
  const filteredPokemons = listSource.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App" style={{ position: 'relative' }}>
      <h1 style={{ textAlign: 'center', color: '#ccc' }}>Mon Pokédex</h1>

      {/* FIX 2 : Bouton avec la bonne variable et syntaxe complète */}
      <button
        onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '10px 15px',
          borderRadius: '8px',
          backgroundColor: showFavoritesOnly ? '#ff4d4d' : '#333',
          color: 'white',
          border: '1px solid #555',
          cursor: 'pointer',
          fontWeight: 'bold',
          zIndex: 100 // Pour être sûr qu'il soit cliquable
        }}
      >
        {showFavoritesOnly ? '🏠 Voir Tout' : '❤️ Mes Favoris'}
      </button>
      {selectedPokemon ? (
        <PokemonDetail
          pokemon={selectedPokemon}
          onBack={() => setSelectedPokemon(null)}
          onToggleFavorite={saveFavorite}
          isFavorite={favorites.some(f => f.name === selectedPokemon.name)}
        />
      ) : (
        <>
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            <>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <input
                  style={{
                    border: '1px solid #ccc',
                    padding: '15px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    backgroundColor: '#020202',
                    color: 'white',
                    marginBottom: '30px',
                    width: '300px'
                  }}
                  type="text"
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="pokemon-list" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                gap: '10px',
                minHeight: '100vh'
              }}>
                {filteredPokemons.map((poke) => (
                  <PokemonCard
                    key={poke.name}
                    pokemon={poke}
                    onSelect={setSelectedPokemon}
                  />
                ))}
                {showFavoritesOnly && filteredPokemons.length === 0 && (
                  <p style={{ gridColumn: '1/-1', textAlign: 'center', color: '#888' }}>
                    Aucun favori trouvé.
                  </p>
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;