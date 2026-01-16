import { useState, useEffect } from 'react';

function PokemonDetail({ pokemon, onBack, onToggleFavorite, isFavorite }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true); // Sécurité : on remet le loading si le pokemon change
        const response = await fetch(pokemon.url);
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.error("Erreur détails:", error);
      } finally {
        setLoading(false); // Le "finally" assure que le loading s'arrête quoi qu'il arrive
      }
    };
    fetchDetails();
  }, [pokemon]);

  if (loading) return <p style={{ textAlign: 'center' }}>Chargement des détails...</p>;
  if (!details) return <p style={{ textAlign: 'center' }}>Erreur : impossible de charger les données.</p>;

  return (
    // On s'assure que le conteneur relatif englobe bien tout
    <div style={{ textAlign: 'center', padding: '20px', position: 'relative', minHeight: '80vh' }}>
      <button onClick={onBack} style={{ cursor: 'pointer', padding: '10px' }}>← Retour</button>

      <div style={{ marginTop: '20px', border: '1px solid #ddd', borderRadius: '20px', padding: '20px', backgroundColor: '#000000' }}>
        {/* Sécurité : Si l'image n'existe pas, on met un texte alternatif */}
        <img
          src={details.sprites?.front_default || 'https://via.placeholder.com/150'}
          alt={details.name}
          style={{ width: '150px' }}
        />

        <h2 style={{ textTransform: 'capitalize', color: '#ffffff' }}>{details.name}</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', color: '#ffffff' }}>
          <p><strong>Poids :</strong> {details.weight / 10} kg</p>
          <p><strong>Taille :</strong> {details.height / 10} m</p>
        </div>

        <div style={{ marginTop: '10px' }}>
          <strong style={{ color: '#ffffff' }}>Types : </strong>
          {details.types.map((t) => (
            <span
              key={t.type.name}
              style={{
                margin: '0 5px',
                padding: '5px 12px',
                background: '#020202',
                color: '#ffffff', // <-- FIX : Texte blanc sur fond noir !
                borderRadius: '10px',
                fontSize: '0.9em',
                display: 'inline-block'
              }}
            >
              {t.type.name}
            </span>
          ))}
        </div>
      </div>

      {/* BOUTON FAVORIS : Toujours à l'intérieur de la div principale pour éviter les bugs de DOM */}
      <button
        onClick={() => onToggleFavorite(pokemon)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '12px 20px',
          borderRadius: '30px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: isFavorite ? '#ff4d4d' : '#4CAF50',
          color: 'white',
          fontWeight: 'bold',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          zIndex: 9999
        }}
      >
        {isFavorite ? '❤️ Retirer des favoris' : '🤍 Ajouter aux favoris'}
      </button>
    </div>
  );
}

export default PokemonDetail;