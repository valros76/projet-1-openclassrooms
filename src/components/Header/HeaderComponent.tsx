import "./HeaderComponent.css";

export const HeaderComponent = () => {
  return (
    <header className="main-head max-w-6xl mx-auto">
      <img src="assets/images/logo/logo.svg" alt="logo télésport" className="logo"/>
      <h1 className="main-head-title text-4xl font-bold">
        Historique des Jeux Olympiques - TéléSport
      </h1>
      <p className="text-lg">
        Bienvenue sur la page dédiée à l'historique des Jeux Olympiques. Explorez les performances des pays au fil des années.
      </p>
    </header>
  );
}
