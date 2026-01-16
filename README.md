# Mon Pokédex - Application React
Une application web moderne et responsive permettant de parcourir l'univers Pokémon. Ce projet a été développé pour mettre en pratique les concepts fondamentaux de React (Hooks, State, Effects) et la consommation d'une API REST.

## Description du Projet
Ce prototype permet aux utilisateurs de naviguer dans une bibliothèque de plus de 1000 Pokémon. L'interface offre une expérience fluide grâce au rendu conditionnel, permettant de passer d'une vue d'ensemble (grille) à une fiche technique détaillée sans rechargement de page.

## Technologies Utilisées
React (Vite.js) : Framework principal.

JavaScript (ES6+) : Logique applicative.

CSS3 (Grid & Flexbox) : Mise en page responsive et moderne.

Fetch API : Gestion des requêtes asynchrones.

LocalStorage : Persistance des données utilisateur.

## Fonctionnalités Implémentées
1. Exploration et Affichage
Chargement Dynamique : Récupération d'une liste exhaustive de 1023 Pokémon via la PokéAPI.

Mise en page Responsive : Utilisation d'un Grid Layout s'adaptant à toutes les tailles d'écran.

Cartes Individuelles : Affichage du nom (avec majuscule automatique) et du visuel de chaque créature.

2. Interactions et Recherche
Recherche en temps réel : Filtrage instantané de la liste par nom via une barre de recherche.

Système de Favoris : Possibilité de marquer des Pokémon comme favoris pour les retrouver facilement.

Filtre Global : Bouton permettant de basculer l'affichage uniquement sur les favoris.

3. Vue Détaillée
Fiche Technique : Affichage spécifique du poids, de la taille et des types de chaque Pokémon.

Navigation : Bouton de retour vers la liste principale avec conservation de l'état de recherche.

4. Expérience Utilisateur (UX) & Persistance
Gestion des États : Indicateurs de chargement (Loader) et messages d'erreur en cas de problème réseau.

Persistance locale : Sauvegarde automatique de la liste des favoris et du dernier terme de recherche dans le navigateur (localStorage).

Design Système : Support du mode sombre (Dark Mode) et styles visuels cohérents.

## API Utilisée
Endpoint Liste : https://pokeapi.co/api/v2/pokemon?limit=1023.

Endpoint Détails : Utilisation des URLs dynamiques fournies par l'API pour chaque Pokémon.
