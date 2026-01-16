function PokemonCard({ pokemon, onSelect }) 
{
       return (
        <div style={{
            border: '1px solid #ccc',       
            padding: '10px',       
            borderRadius: '8px',       
            textAlign: 'center',       
            backgroundColor: '#020202' 
            }}>      
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