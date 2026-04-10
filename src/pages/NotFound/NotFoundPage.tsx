import { Link, useLocation, useParams } from "react-router";

export const NotFoundPage = () => {
  const location = useLocation();
  const isCountryPath =
    location.pathname.includes("/country/");
  const { id } = useParams<{ id: string }>();
  console.log(id);

  return (
    <section className="max-w-6xl mx-auto">
      <h2>Contenu introuvable</h2>
      {id && isCountryPath && (
        <>
          <h2>Erreur d'identifiant</h2>
          <p>
            L'identifiant de pays demandé n'existe pas.
          </p>
        </>
      )}
      {!id && isCountryPath && (
        <>
          <h2>Données manquantes</h2>
          <p>
            Vous n'avez pas précisé l'identifiant du pays recherché, dans l'url.
          </p>
        </>
      )}
      {!id && !isCountryPath && (
        <>
          <h2>Contenu introuvable</h2>
          <p>
            Le contenu que vous avez demandé est introuvable ou
        indisponible à cette adresse.
          </p>
        </>
      )}
      <Link to="/">Retourner à l'accueil</Link>
    </section>
  );
};
