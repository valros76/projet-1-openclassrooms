import type { ReactNode } from "react";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "./AppRoutes";

export default function AppRouter({children}: {children?: ReactNode}){
  return(<BrowserRouter>
    <AppRoutes/>
    {children}
  </BrowserRouter>);
}