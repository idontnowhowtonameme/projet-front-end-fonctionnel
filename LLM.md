LLM.md - Journal de Bord du Guide (Assistant Pédagogique)

Projet : Pokédex React API utilisée : (Gratuite, JSON, sans Auth) Binôme : Guide (Interaction IA) & Développeur (Code & Implémentation)
1. Prompt Initial de Cadrage (Le "Meta-Prompt")

Avant de commencer le développement, ce prompt a été envoyé pour configurer le comportement de l'IA afin qu'elle respecte les contraintes pédagogiques (ne pas donner la solution tout de suite, expliquer les concepts).

    Prompt du Guide : "Je suis le 'Guide' dans un projet de développement en binôme. Nous utilisons React et l'API PokéAPI. Ton rôle est d'être notre assistant pédagogique. Objectif : Créer une application de consultation de Pokémon (Liste, Filtre, Détails). Contraintes :

        Ne donne pas de blocs de code complets d'un coup.

        Procède étape par étape selon mon signal.

        Pour chaque solution technique, explique d'abord le concept (le 'pourquoi') avant de donner la syntaxe.

        Priorise un code moderne (Hooks, modules ES6).

    Règles d'interaction :

        Exhaustivité structurée : Analyse causes/conséquences.

        Droit de contradiction : Corrige-moi si je pars sur une fausse piste.

        Approche 'Premiers Principes' : Décompose le 'pourquoi'.

    Commençons par l'Étape 1 : Peux-tu nous guider pour initialiser un projet React avec Vite et nous expliquer la structure de fichiers générée ?"

2. Chronologie des Étapes et Interactions Clés
Étape 1 – Initialisation du projet

Objectif : Créer un projet React fonctionnel et comprendre l'arborescence.

    Prompt du Guide : "Peux-tu nous guider pour initialiser un projet React avec Vite et nous expliquer la structure de fichiers générée ?"

    Réponse & Concepts expliqués par l'IA :

        Choix technique : Utilisation de Vite (plus rapide/moderne) au lieu de Create-React-App.

        Structure : Distinction entre index.html (le point d'ancrage), main.jsx (le point d'entrée JS) et App.jsx (le composant racine).

        Commande : npm create vite@latest pokedex-app -- --template react.

    Action du Guide vers le Développeur :

        J'ai dicté les commandes d'installation.

        J'ai expliqué au développeur qu'il fallait travailler dans le dossier src et nettoyer le fichier App.jsx pour partir d'une feuille blanche.

Étape 2 – Connexion à l’API

Objectif : Récupérer les données (Asynchrone) et les afficher dans la console.

    Prompt du Guide : "Passons à l'étape 2. Concepts visés : Asynchrone, Gestion simple des erreurs. Explique bien étape par étape."

    Réponse & Concepts expliqués par l'IA :

        Concept 'Premiers Principes' : Comparaison de l'asynchrone avec une commande au restaurant (on ne bloque pas la cuisine en attendant le plat).

        Hooks : Introduction de useState (pour stocker la réponse) et useEffect (pour déclencher l'appel au montage).

        Piège évité : L'IA a insisté sur le tableau de dépendances vide [] dans useEffect pour éviter une boucle infinie d'appels API.

    Résultat : Le développeur a implémenté le fetch et nous avons validé la réception d'un tableau de 20 objets dans la console du navigateur.

Étape 3 – Affichage dynamique des données

Objectif : Transformer les données brutes JSON en interface visuelle (Composants).

    Prompt du Guide : "Étape 3 – Affichage dynamique. Objectif : Afficher les données sous forme de liste ou cartes."

    Réponse & Concepts expliqués par l'IA :

        Composants : Création d'un fichier séparé PokemonCard.jsx pour respecter la responsabilité unique.

        Mapping : Utilisation de .map() pour transformer le tableau de données en liste de composants.

        Props : Explication du passage de données du Parent (App) vers l'Enfant (PokemonCard).

    Action du Guide vers le Développeur :

        Explication de l'importance de la prop key pour la performance de React.

        Guidage sur la syntaxe de "Destructuring" ({ pokemon }) dans les arguments de la fonction.

Étape 4 – Interaction utilisateur (Filtrage)

Objectif : Rendre l'interface réactive via une barre de recherche.

    Prompt du Guide : "Étape 4 – Interaction utilisateur. Filtrer, Rechercher. Modifiez maintenant votre .map(). Au lieu de boucler sur pokemonList, bouclez sur filteredPokemons."

    Réponse & Concepts expliqués par l'IA :

        Flux de données : Concept de "Source de Vérité". On ne modifie jamais la liste originale (pokemonList), on crée une liste dérivée (filteredPokemons).

        Controlled Component : Liaison de l'input de recherche à un state searchTerm.

    Validation : Le filtrage fonctionne en temps réel. Si on tape "pika", seul Pikachu reste affiché.

Étape 5 – Détail d’un élément

Objectif : Afficher une vue détaillée au clic (Affichage conditionnel).

    Prompt du Guide : "Étape 5 – Détail d’un élément. Attendus : Sélection d’un élément, Affichage conditionnel."

    Réponse & Concepts expliqués par l'IA :

        État de sélection : Ajout de const [selectedPokemon, setSelectedPokemon] = useState(null).

        Remontée d'état (Lifting State Up) : Passage d'une fonction onSelect à PokemonCard pour que l'enfant puisse modifier l'état du parent.

        Rendu Conditionnel : Utilisation de l'opérateur ternaire selectedPokemon ? <Detail /> : <Liste />.

Gestion d'erreur critique (Debug)

Durant cette étape, nous avons rencontré une erreur bloquante.

    Erreur rencontrée : Code fourni avec syntaxe invalide : <PokemonDetailpokemon={selectedPokemon}.../> et crash de l'application.

    Prompt de correction : "J'ai une erreur dans mon code. [Copie du code App.jsx]"

    Diagnostic de l'IA :

        Absence d'espace dans le JSX (PokemonDetailpokemon).

        Oubli de l'import du composant PokemonDetail en haut du fichier.

    Correction : L'IA a guidé la correction syntaxique et expliqué que "React ne peut pas deviner un composant non importé".

Amélioration technique (Double Fetch)

    Prompt du Guide : "Au lieu d'avoir l'url brut, je veux que les infos s'affichent."

    Solution : Implémentation d'un second useEffect à l'intérieur de PokemonDetail pour récupérer les images et stats spécifiques via l'URL du Pokémon sélectionné.

3. Bilan de l'utilisation du LLM

L'assistant a été utilisé strictement comme partenaire de réflexion et non comme générateur de code "presse-bouton".

    Respect des rôles : Le Guide a reformulé les explications de l'IA (concepts de props, state, useEffect) avant que le Développeur ne code.

    Compréhension : Chaque bloc de code a été précédé d'une explication théorique ("Pourquoi on fait ça ?").

    Progression : Les étapes imposées ont été validées dans l'ordre, avec une vérification systématique (Console, puis Affichage).

    Documentation : Les erreurs rencontrées (oubli d'import, syntaxe, fichiers manquants) ont été résolues via l'analyse du LLM, renforçant la compétence de débogage.

État final du projet : Fonctionnel, respectant les contraintes React modernes (Hooks), avec une structure de fichiers propre.