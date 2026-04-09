import { useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  type ChartOptions
} from "chart.js";
import type { Olympic } from "../../models/Olympic";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export const CountryEvolutionChart = ({ country }: { country: Olympic }) => {
  const chartData = useMemo(() => {
    // On trie les participations par année pour avoir une ligne logique
    const sortedParticipations = [...country.participations].sort((a, b) => a.year - b.year);

    return {
      labels: sortedParticipations.map(p => p.year.toString()),
      datasets: [
        {
          label: "Médailles",
          data: sortedParticipations.map(p => p.medalsCount),
          borderColor: "#3498db",
          backgroundColor: "rgba(52, 152, 219, 0.2)",
          fill: true,
          tension: 0.3, // Permet d'ajouter une courbe lisse
        }
      ]
    };
  }, [country]);

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // Permet de cacher la légende si on n'a une seule ligne de graphique
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#9ca3af" },
        grid: { color: "rgba(255, 255, 255, 0.1)" }
      },
      x: {
        ticks: { color: "#9ca3af" },
        grid: { display: false }
      }
    }
  };

  return (
    <article className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 mt-6">
      <h3 className="text-gray-400 text-sm font-medium uppercase mb-4">Évolution des médailles</h3>
      <div style={{ height: "300px" }}>
        <Line data={chartData} options={options} />
      </div>
    </article>
  );
};