#  Mon Pokédex - React Application

Une application web  permettant de parcourir le Pokédex. Ce projet a été développé avec **React** et consomme l'API publique **PokeAPI** pour afficher des données en temps réel.

## Description du Projet

Ce projet est une interface de type "Pokédex" qui permet aux utilisateurs de visualiser une liste de Pokémon, d'effectuer des recherches par nom et de consulter les détails spécifiques (poids, taille, types, etc.) de chaque créature via une vue dédiée.

## API Utilisée

Le projet utilise [PokeAPI](https://pokeapi.co/), une API REST complète pour les données de Pokémon.
- **Endpoint Liste :** `https://pokeapi.co/api/v2/pokemon?limit=20`
- **Endpoint Détails :** Utilisation de l'URL spécifique fournie pour chaque Pokémon.

## Fonctionnalités Implémentées

- **Affichage Dynamique :** Récupération et affichage d'une liste initiale de 20 Pokémon.
- **Recherche en temps réel :** Barre de recherche permettant de filtrer les Pokémon par nom sur la liste affichée.
- **Vue Détails :** Système de sélection pour afficher les caractéristiques complètes d'un Pokémon (Image, Poids, Taille et Types).
- **Navigation Fluide :** Utilisation du rendu conditionnel pour passer de la liste à la fiche détaillée sans rechargement de page.
- **Design Responsive :** Mise en page en grille (Grid Layout) s'adaptant à la taille de l'écran.

## Technologies Utilisées

* **React** (Vite.js recommandé pour le tooling)
* **JavaScript (ES6+)**
* **CSS3** (Flexbox et Grid)
* **Fetch API** pour les requêtes réseau
