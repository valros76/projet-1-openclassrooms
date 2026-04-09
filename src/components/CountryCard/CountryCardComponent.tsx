import { Link, useParams } from "react-router";
import { useData } from "../../hooks/useData";
import { useMemo } from "react";
import { StatCard } from "../StatCard/StatCardComponent";
import { ParticipationTableComponent } from "../ParticipationTable/ParticipationTableComponent";
import { SpinnerComponent } from "../Spinner/SpinnerComponent";

export const CountryCardComponent = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useData();

  const country = useMemo(() => {
    return data?.find(
      (country) => country.id.toString() === id,
    );
  }, [data, id]);

  const stats = useMemo(() => {
    if (!country) return null;

    const totalMedals = country.participations.reduce(
      (acc, p) => acc + p.medalsCount,
      0,
    );
    const totalAthletes = country.participations.reduce(
      (acc, p) => acc + p.athleteCount,
      0,
    );
    const totalParticipations =
      country.participations.length;

    return {
      totalMedals,
      totalAthletes,
      totalParticipations,
    };
  }, [country]);

  if (loading) return <SpinnerComponent text="Chargement du pays..."/>;
  if (error) return <p>Erreur : {error}</p>;

  if (!country) {
    return (
      <article>
        <h2>Pays introuvable</h2>
        <Link to="/">Retourner à l'accueil</Link>
      </article>
    );
  }

  return (
    <>
      <article>
        <h2>
          {country.name}
        </h2>
        <StatCard
          label="Nombre de participations"
          value={stats?.totalParticipations}
          color="text-blue-400"
        />
        <StatCard
          label="Total médailles"
          value={stats?.totalMedals}
          color="text-yellow-400"
        />
        <StatCard
          label="Total athlètes"
          value={stats?.totalAthletes}
          color="text-green-400"
        />
      </article>
      <article>
        <h2 className="text-xl font-bold">Historique des participations</h2>
        <ParticipationTableComponent country={country}/>
      </article>
    </>
  );
};
