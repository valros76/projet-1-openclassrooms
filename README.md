# TéléSport - Olympic Games History Dashboard

Application web interactive permettant de visualiser les données de performances historiques des pays lors des Jeux Olympiques.

## Fonctionnalités

- **Dashboard interactif**: Voir le total de médailles remportées par chaque pays, par le biais d'un graphique interactif.
- **Détails d'un pays**: Explorez les statistiques détaillées pour chaque pays participant.
- **Visualisation de données**: Les graphiques interactifs sont porté par Chart.js.
- **Design responsive**: Optimisé pour les ordinateurs, tablettes et mobiles.
- **Stack moderne**: Créé avec React 19, Typescript, React Router v7, TailwindCSS et CSS3.

## Prérequis

- **Node.js** 22 LTS ou supérieure
- **npm** (inclus avec Node.js) ou **bun**

Si vous souhaitez utiliser bun : 
- Sous windows : 
> powershell -c "irm bun.sh/install.ps1|iex"

Sous MacOS ou Linux : 
> curl -fsSL https://bun.com/install | bash

## Installation

Clonez le repository :

```bash
git clone https://github.com/valros76/projet-1-openclassrooms.git
cd projet-1-openclassrooms
```

Installez les dépendences:

```bash
npm i
```

ou

```bash
bun i
```

## Utilisation

### Serveur de développement

Démarrez le serveur de développement :

```bash
npm run dev
```

ou

```bash
bun run dev
```

L'application sera disponible à l'adresse suivante [http://localhost:5173](http://localhost:5173).

Si vous souhaitez tester sur le réseau local, avec bun : 
```bash
bun run dev --host
```
Avec cette commande, vous aurez accès à l'application via une url commençant par **192.168.1.XX:5173**, vous permettant de tester l'application sur toutes les machines du réseau local.

### Construction de la version de production

Construisez l'application pour la production :

```bash
npm run build
```

ou

```bash
bun run build
```

### Linting

Démarrez le linter pour vérifier la qualité du code :

```bash
npm run lint
```

ou

```bash
bun run lint
```

## Structure du projet

```
projet-1-openclassrooms
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

## Stack Technique

- **React 19**
- **TypeScript**
- **Vite 5**
- **Tailwind CSS 4**
- **React Router 7**
- **Chart.js**
- **ESLint**

## Polices

- **Inter**

## Données

L'application utilise pour l'instant des données fictives, placées dans un fichier **olympic.json**, pour simuler les statistiques des JO.
L'architecture du projet a été pensée pour faciliter une future intégration avec une API REST.

## Design

L'application propose :

- Une interface épurée et moderne, optimisée pour la visualisation des données
- Une mise en page adaptative qui s'ajuste à toutes les tailles d'écran
- Des graphiques interactifs avec effets de survol
- Une navigation fluide entre les pages
- Un composant de chargement visuel pour ne pas perdre l'utilisateur lors du chargement des données

## Documentation

Pour plus d'informations sur les technologies utilisées, vous pouvez consulter ces sources :

- [Documentation React](https://react.dev)
- [Manuel TypeScript](https://www.typescriptlang.org/docs/)
- [Guide Vite](https://vitejs.dev)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation React Router](https://reactrouter.com/home)
- [Documentation Chart.js](https://www.chartjs.org/docs/latest/)

## License

Ce projet est disponible pour un usage éducatif et personnel.
