import { useState, useEffect } from 'react';
 
function PokemonDetail({ pokemon, onBack }) {
  const [details, setDetails] = useState(null); // Mémoire pour la fiche complète
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(pokemon.url); // On utilise l'URL spécifique du Pokémon
        const data = await response.json();
        setDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur détails:", error);
        setLoading(false);
      }
    };
    fetchDetails();
  }, [pokemon]); 
 
  if (loading) return <p>Chargement des détails...</p>;
  if (!details) return <p>Erreur : impossible de charger les données.</p>;
 
  return (
<div style={{ textAlign: 'center', padding: '20px' }}>
<button onClick={onBack}>← Retour</button>
 
      <div style={{ marginTop: '20px', border: '1px solid #ddd', borderRadius: '20px', padding: '20px' }}>
        {/* Affichage de l'image (sprite) */}
<img 
          src={details.sprites.front_default} 
          alt={details.name} 
          style={{ width: '150px' }}
        />
 
        <h2 style={{ textTransform: 'capitalize' }}>{details.name}</h2>
<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
<p><strong>Poids :</strong> {details.weight / 10} kg</p>
<p><strong>Taille :</strong> {details.height / 10} m</p>
</div>
 
        <div>
<strong>Types :</strong>
          {details.types.map((t) => (
<span key={t.type.name} style={{ margin: '0 5px', padding: '5px 10px', background: '#020202', borderRadius: '10px' }}>
              {t.type.name}
</span>
          ))}
</div>
</div>
</div>
  );
}
 
 
export default PokemonDetail;