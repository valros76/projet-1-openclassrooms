import { Link, useParams } from "react-router";
import { CountryCardComponent } from "../../components/CountryCard/CountryCardComponent";
import { CountryEvolutionChart } from "../../components/CountryEvolutionChart/CountryEvolutionChartComponent";
import { useData } from "../../hooks/useData";
import { useMemo } from "react";
import { SpinnerComponent } from "../../components/Spinner/SpinnerComponent";
import { NotFoundPage } from "../NotFound/NotFoundPage";

export const CountryDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading } = useData();

  const country = useMemo(
    () => data?.find((c) => c.id.toString() === id),
    [data, id],
  );

  if (loading) return <SpinnerComponent />;
  if (!country) return <NotFoundPage/>;

  return (
    <section className="max-w-6xl mx-auto">
      <Link
        to="/"
        className="my-4"
      >
        ← Retour
      </Link>
      <h2>{country.name}</h2>
      <CountryEvolutionChart country={country} />
      <CountryCardComponent country={country} />
    </section>
  );
};
