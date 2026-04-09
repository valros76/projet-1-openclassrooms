import { Link } from "react-router";
import { useMemo } from "react";
import { StatCard } from "../StatCard/StatCardComponent";
import { ParticipationTableComponent } from "../ParticipationTable/ParticipationTableComponent";
import type { Olympic } from "../../models/Olympic";

export const CountryCardComponent = ({country}: {country: Olympic}) => {

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
