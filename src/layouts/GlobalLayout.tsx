import { Outlet } from "react-router";
import { HeaderComponent } from "../components/Header/HeaderComponent";
import { NavComponent } from "../components/Nav/NavComponent";

export const GlobalLayout = () => {
  return (
    <>
      <NavComponent />
      <HeaderComponent />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
};
