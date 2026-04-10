import "./HeaderComponent.css";
import logo from "/assets/images/logo/logo.svg";

export const HeaderComponent = () => {
  return (
    <header className="main-head max-w-6xl mx-auto">
      <img src={logo} alt="logo télésport" className="logo"/>
      <h1 className="main-head-title text-4xl font-bold">
        Historique des Jeux Olympiques - TéléSport
      </h1>
    </header>
  );
}
