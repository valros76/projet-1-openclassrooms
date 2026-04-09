import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartOptions,
  type ChartEvent,
  type ActiveElement,
} from "chart.js";
import { useMemo } from "react";
import { Pie } from "react-chartjs-2";
import type { Olympic, Participation } from "../../models/Olympic";
import { useData } from "../../hooks/useData";
import { useNavigate } from "react-router";
import { SpinnerComponent } from "../Spinner/SpinnerComponent";

ChartJS.register(ArcElement, Tooltip, Legend);

export const MedalChartComponent = () => {
  const { data, loading, error } = useData();
  const navigate = useNavigate();

  const calculateTotalMedals = (country: Olympic) => {
    return country.participations.reduce(
      (sum: number, participation: Participation) => sum + participation.medalsCount,
      0,
    );
  };

  const chartData = useMemo(() => {
    if (!data) return null;

    return {
      labels: data.map((country: Olympic) => country.name),
      datasets: [
        {
          label: "Total des médailles",
          data: data.map((country: Olympic) =>
            calculateTotalMedals(country),
          ),
          backgroundColor: [
            "#956065",
            "#b8cbe7",
            "#89a1db",
            "#793d52",
            "#9780a1",
            "#956065",
          ],
          borderWidth: 2,
          hoverOffset: 0,
        },
      ],
    };
  }, [data]);

  const chartOptions: ChartOptions<'pie'> = useMemo(
  () => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: { color: "white", padding: 20 },
      },
    },
    onHover: (event: ChartEvent, chartElement: ActiveElement[]) => {
      const target = event.native?.target as HTMLElement;
      if (target) {
        target.style.cursor = chartElement.length > 0 ? "pointer" : "default";
      }
    },
    onClick: (_event: ChartEvent, elements: ActiveElement[]) => {
      if (elements.length > 0) {
        const countryIndex = elements[0].index;
        const countryId = data[countryIndex].id;
        navigate(`/country/${countryId}`);
      }
    },
  }),
  [data, navigate]
);

  if (loading)
    return <SpinnerComponent text="Chargement du graphique..."/>;
  if (error)
    return (
      <div className="text-red-500">Erreur : {error}</div>
    );
  if (!chartData) return null;

  return (
    <article className="text-center bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
      <h2>Médailles par pays</h2>
      <div style={{ height: "450px" }}>
        <Pie
          data={chartData}
          options={chartOptions}
        />
      </div>
      <p className="text-center mt-4 text-sm text-gray-400 italic">
        Astuce : Cliquez sur une part du graphique pour voir
        les détails du pays.
      </p>
    </article>
  );
};
