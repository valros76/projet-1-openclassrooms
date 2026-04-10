import { Routes, Route } from "react-router";
import { DashboardPage } from "../pages/Dashboard/DashboardPage";
import { CountryDetailPage } from "../pages/Detail/CountryDetailPage";
import { GlobalLayout } from "../layouts/GlobalLayout";
import { AboutPage } from "../pages/About/AboutPage";
import { NotFoundPage } from "../pages/NotFound/NotFoundPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route
          path="/"
          element={<DashboardPage />}
        />
        <Route
          path="/about"
          element={<AboutPage/>}
        />
        <Route
          path="/country/:id"
          element={<CountryDetailPage />}
        />
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    </Routes>
  );
};
