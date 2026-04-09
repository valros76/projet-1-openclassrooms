import { Link } from "react-router"
import { CountryCardComponent } from "../../components/CountryCard/CountryCardComponent"

export const CountryDetailPage = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <Link to="/" className="my-4">
        ← Retour
      </Link>
      <CountryCardComponent/>
    </section>
  )
}