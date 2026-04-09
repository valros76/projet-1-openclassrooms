import { useData } from "../../hooks/useData";
import { SpinnerComponent } from "../Spinner/SpinnerComponent";

export const InfosComponent = () => {
  const { data, loading, error } = useData();
  const totalParticipatingCountries = data.length;
  const totalGamesEditions = 5;

  if (loading)
    return <SpinnerComponent text="Chargement des statistiques..."/>;
  if (error)
    return (
      <div className="text-red-500 p-4 text-center">
        {error}
      </div>
    );

  return (
    <>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h3>
          Pays participants
        </h3>
        <p className="text-4xl font-bold text-blue-400">
          {totalParticipatingCountries}
        </p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h3>
          Éditions des JO
        </h3>
        <p className="text-4xl font-bold text-green-400">
          {totalGamesEditions}
        </p>
      </div>
    </>
  );
};
