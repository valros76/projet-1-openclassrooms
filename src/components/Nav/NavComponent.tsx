import { NavLink } from "react-router"
import "./Nav.css";

export const NavComponent = () => {
  return (
    <nav className="main-nav">
      <menu className="main-menu">
        <li className="main-menu-items">
          <NavLink to="/" className={({ isActive }) => 
              isActive ? "main-menu-links current-link" : "main-menu-links"
            } end>
            Accueil
          </NavLink>
        </li>
        <li className="main-menu-items">
          <NavLink to="/about" className={({ isActive }) => 
              isActive ? "main-menu-links current-link" : "main-menu-links"
            }>
            À propos de TéléSport
          </NavLink>
        </li>
      </menu>
    </nav>
  )
}