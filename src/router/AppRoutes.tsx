import { Routes, Route } from "react-router";
import { DashboardPage } from "../pages/Dashboard/DashboardPage";
import { CountryDetailPage } from "../pages/Detail/CountryDetailPage";
import { GlobalLayout } from "../layouts/GlobalLayout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route
          path="/"
          element={<DashboardPage />}
        />
        <Route
          path="/country"
          element={<CountryDetailPage />}
        />
      </Route>
    </Routes>
  );
};
