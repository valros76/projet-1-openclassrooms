import { useMemo, useState } from "react";
import type {
  Olympic,
  Participation,
} from "../../models/Olympic";

type SortKey =
  | "year"
  | "city"
  | "medalsCount"
  | "athleteCount";

export const ParticipationTableComponent = ({
  country,
}: {
  country: Olympic;
}) => {
  const [sortKey, setSortKey] = useState<SortKey>("year");
  const [isAsc, setIsAsc] = useState(false);

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      setIsAsc(!isAsc);
    } else {
      setSortKey(key);
      setIsAsc(false);
    }
  };

  const sortedParticipations = useMemo(() => {
    const list = [...country.participations];
    return list.sort((a, b) => {
      const valA = a[sortKey];
      const valB = b[sortKey];

      if (
        typeof valA === "string" &&
        typeof valB === "string"
      )
        return isAsc
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA);

      return isAsc
        ? (valA as number) - (valB as number)
        : (valB as number) - (valA as number);
    });
  }, [country.participations, sortKey, isAsc]);

  const getSortIcon = (key: SortKey) => {
    if (sortKey !== key) return "↕";
    return isAsc ? "↑" : "↓";
  };

  return (
    <table className="w-full text-left">
      <thead className="bg-gray-900 text-gray-400 text-sm uppercase">
        <tr>
          <th className="text-center py-4" onClick={() => handleSort("year")}>Année <span className="sort-icon">{getSortIcon("year")}</span></th>
          <th className="text-center py-4" onClick={() => handleSort("city")}>Ville <span className="sort-icon">{getSortIcon("city")}</span></th>
          <th className="text-center py-4" onClick={() => handleSort("medalsCount")}>Médailles <span className="sort-icon">{getSortIcon("medalsCount")}</span></th>
          <th className="text-center py-4" onClick={() => handleSort("athleteCount")}>Athlètes <span className="sort-icon">{getSortIcon("athleteCount")}</span></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-700">
        {sortedParticipations.map((participation: Participation) => (
          <tr key={participation.id} className="hover:bg-gray-750 transition-colors">
            <td className="text-center py-4 font-semibold">{participation.year}</td>
            <td className="text-center py-4 text-gray-300">{participation.city}</td>
            <td className="text-center py-4 font-bold text-yellow-500">{participation.medalsCount}</td>
            <td className="text-center py-4">{participation.athleteCount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
