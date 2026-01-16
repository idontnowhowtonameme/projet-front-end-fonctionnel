function PokemonCard({ pokemon, onSelect }) {
    const urlParts = pokemon.url.split('/');
    const pokemonId = urlParts[urlParts.length - 2];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '8px',
            textAlign: 'center',
            backgroundColor: '#020202'
        }}>

            <img
                src={imageUrl}
                alt={pokemon.name}
                style={{ width: '96px', height: '96px' }}
            />
            {/* On affiche le nom du pokemon avec la première lettre en majuscule */}
            <h3 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h3>


            {/* le bouton */}

            <button
                onClick={() => onSelect(pokemon)}
                style={{ cursor: 'pointer', padding: '5px 10px' }} > Voir détails </button>
        </div>
    );
}

export default PokemonCard;