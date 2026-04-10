# Architecture du projet TéléSport
Ce document a pour but de documenter les choix architecturaux de l'application, afin de faciliter la compréhension globale du projet et sa maintenance, à tout parti le consultant.

## Arborescence des dossiers
```
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
│   ├── Detail/
│       └── CountryDetailPage.tsx
│   └── NotFound/
│       └── NotFoundPage.tsx
├───── router/
|     ├── AppRouter.tsx
|     └── AppRoutes.tsx
├───── services/
|     └── api.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Composants et Rôles
L'architecture de ce projet suit le motif **Smart & Dumb Components** pour assurer une séparation claire des responsabilités de chaque partie.

### Composants "Smart"
Ces composants gèrent l'état, récupèrent les données et contiennent la logique métier.
- *Home* / *DetailsPage* : Orchestrent l'affichage en récupérant les données via les hooks et en les distribuant aux composants enfants.
- *MedalChartComponent* : Transforme les données brutes (récupérées dans **olympic.json** actuellement) pour les adapter au format attendu, en utilisant la dépendance **Chart.js** (qui est une dépendance héritée du legacy) et gère la navigation au clic.

### Composants "Dumb"
Ces composants sont purement visuels.
Ils reçoivent les données via des *props* et n'ont aucune connaissance de la provenance des données.
- **StatCard** : Affiche un indicateur clé (label, valeur, couleur).
- **ParticipationTable** : Reçoit une liste de participations, liées à un pays, et s'occupe uniquement du rendu et du tri des données.
- **Spinner** : Un spinner CSS autonome pour l'état de chargement, il peut prendre en considération une prop **text** qui permet d'afficher un message personnalisé à côté du spinner.

## Custom hook : useData
Le hook *useData* est le coeur de la gestion de données de l'application.
- **Rôle** : Centraliser la logique de récupération des données, la gestion du cycle de vie du chargement (via l'état *loading*) et le traitement des erreurs (via l'état *error*).
- **Fonctionnement** : Il encapsule un *useEffect* qui appelle *fetchOlympics*, pour récupérer les données actuellement stockées dans *olympic.json*.
- **Avantage** : Il évite la duplication de code pour l'appel de données. N'importe quel composant peut y faire appel de manière synchronisée sans savoir comment sont récupérées les données (JSON local ou API distante).

## Évolutivité : Connexion back-end / API
L'architecture actuelle a été pensée pour une transition transparente vers une véritable API : 
1. **Abstraction du service** : La logique de fetch est isolée dans *services/api.ts*. Pour passer d'un fichier JSON à une API réelle, il suffira de modifier l'url *DATA_URL* dans ce fichier.
2. **Interfaces robustes** : L'utilisation de Typescript via le dossier *models/* garantit que si la structure de l'API change, les erreur seront détectées immédiatement à la compilation du projet.
3. **Gestion d'état** : Le hook *useData* gère déjà les délais de latence (*loading*) et les échecs réseau (*error*).

## Dépendances externes
Ce projet utilise les dépendences externes suivantes : 
- **react ^19.2.0**
- **react-router ^7.14.0**
- **chart.js ^4.4.1**
- **tailwindcss ^4.1.18**
- **react-chartjs-2 ^5.2.0**
- **@fontsource-variable/inter ^5.2.8**
- **@tailwindcss/vite ^4.1.18**
- **react-dom ^19.2.0**