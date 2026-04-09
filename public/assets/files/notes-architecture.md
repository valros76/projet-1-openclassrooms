# Analyse du code source de TéléSport
Cette application a pour but de permettre la consultation de données précises sur les Jeux Olympiques (nombre d'éditions, pays participants, nombre de médailles gagnées, etc...).

# Analyse de main.tsx
On peut remarquer que main.tsx utilise le **strict mode**, on aura donc comme effet de bord le double montage des composants, pouvant créer une duplication de certaines opérations lors de l'appel aux pages et aux composants.

L'avantage du strict mode est le repérage rapide des fuites de mémoires liées aux composants, si tout se déroule correctement dans ce mode, on peut espérer une montée en version plus sereine.

On remarque aussi que les fichiers comportent l'extension **.tsx**, ce qui indique que **Typescript** est utilisé sur le projet.
Concernant Typescript, pas de configuration d'alias existant.

# Analyse de index.css
Pas grand chose dans le fichier css fourni de base, juste un import de **tailwind** et de la font **inter**.
La seule instruction existante est l'utilisation de la *font-family* **Inter**, sur le sélecteur *html*.

# Analyse de App.tsx

## Nombre de lignes
Le fichier app.tsx fourni fait **381** lignes, il faudra l'optimiser pour respecter la consigne des **300 lignes maximales**.

## Découpage initial du fichier App.tsx
Premier problème constaté, ce fichier est un amas de code, sans aucun découpage recommandé appliqué.

On repère à l'intérieur (antipattern = ⚠️) : 
- ⚠️ Du code devant être représenté par des composants, dont un composant Home alors que le fichier se nomme App (non respect des conventions de nommage).
- ⚠️ Un appel de données à un tableau en dur, présent également dans le code.
- L'import de chart.js, qui devrait exister uniquement dans un composant dédié, pour cet usage.
- Pas d'utilisation de balises HTML sémantiques, juste une utilisation de **div** partout, on dirait un bootstrap auto-généré !
- ⚠️ Duplication de contenu, entre le composant **Home** et **Country** (card).
- ⚠️ Présence du routeur en fin de fichier, nécessite une adaptation template pour l'articulation des étapes.
- ⚠️ Utilisation **15 fois** du type **any**, donc inutilité du Typescript, vu qu'on désactive toute recherche d'erreur de typage par ce biais. Remplacer par **unknown** ou **vrai type connu**.
- ⚠️ **5 console.log()** qui traînent encore dans le code.
- ⚠️ Logique métier complexe directement dans le composant Home.
- ⚠️ État de chargement dérivé des données via **!data**, à la place d'utilisation d'états clairs comme **loading** ou **error**.
- ⚠️ Préparation des données du graphique dans le composant **country**, à la place d'utiliser une **fonction dédiée** ou un **custom hook** pour séparer l'UI et la logique.

# Refonte architecturale proposée
projet-telesport
├── src/
├───── components/ # Composants UI réutilisables
|     ├── CountryCard/
|     |  ├── CountryCardComponent.tsx
|     ├── Header/
|     |  ├── HeaderComponent.tsx
|     |  └── HeaderComponent.module.css
|     ├── Infos/
|     |  ├── InfosComponent.tsx
|     ├── MedalChart/
|     |  ├── MedalChartComponent.tsx
|     ├── Nav/
|     |  ├── NavComponent.tsx
|     ├── ParticipationTable/
|     |  ├── ParticipationTableComponent.tsx
|     ├── Spinner/
|     |  ├── SpinnerComponent.css
|     |  ├── SpinnerComponent.tsx
|     └── StatCard/
|        └── StatCardComponent.tsx
├───── hooks/ # Logique métier et data fetching
|      └── useData.ts
├───── layouts/ # templates
|      └── GlobalLayout.tsx
├───── models/ # Interfaces TypeScript
|      └── Olympics.ts
├───── pages/ # Composants conteneurs (liés aux routes)
│   ├── About/
│   │   └── AboutPage.tsx
│   ├── Dashboard/
│   │   └── DashboardPage.tsx
│   └── Detail/
│       └── CountryDetailPage.tsx
├───── router/
|     ├── AppRouter.tsx
|     └── AppRoutes.tsx
├───── services/
|     └── api.ts
├── App.tsx
├── index.css
└── main.tsx

# Mises à jour nécessaires
- Upgrade de la version de React Router (v6 à v7)