import { Link } from "react-router"

export const NotFoundPage = () => {
  return (
    <section>
      <h2>
        Contenu introuvable
      </h2>
      <p>
        Le contenu que vous avez demandé est introuvable ou indisponible à cette adresse.
      </p>
      <Link to="/">
        Retourner à l'accueil
      </Link>
    </section>
  )
}