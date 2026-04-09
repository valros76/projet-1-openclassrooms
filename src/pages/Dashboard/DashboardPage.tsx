import { InfosComponent } from "../../components/Infos/InfosComponent"
import { MedalChartComponent } from "../../components/MedalChart/MedalChartComponent"

export const DashboardPage = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <p className="text-lg">
        Bienvenue sur la page dédiée à l'historique des Jeux Olympiques. Explorez les performances des pays au fil des années.
      </p>
     <InfosComponent/>
     <MedalChartComponent/>
    </section>
  )
}