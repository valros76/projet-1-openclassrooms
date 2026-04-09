export const AboutPage = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h2>
        À propos de TéléSport
      </h2>
      <p>
        TéléSport est une application web de visualisation de données (dashboard) dédiée à l'analyse des performances des pays aux Jeux Olympiques.
      </p>
      <p>
        Le projet repose sur trois piliers principaux :
      </p>
      <ul>
        <li>
          <strong>Analyse de données :</strong> Elle transforme des fichiers JSON complexes en graphiques interactifs (généralement via Chart.js).
        </li>
        <li>
          <strong>Navigation intuitive :</strong> Un utilisateur peut visualiser globalement les médailles par pays (vue Dashboard) et explorer les détails spécifiques (nombre de participations, total de médailles, nombre d'athlètes) via une page dédiée par nation.
        </li>
        <li>
          <strong>Technologies modernes :</strong> Développée avec React et TypeScript, l'application met l'accent sur la performance (via des Hooks comme useMemo ou useData) et une interface réactive (souvent stylisée avec Tailwind CSS).
        </li>
      </ul>
      <p>
        L'objectif final est de fournir une expérience fluide et visuelle pour suivre l'évolution historique des nations dans le monde de l'olympisme.
      </p>
    </section>
  )
}