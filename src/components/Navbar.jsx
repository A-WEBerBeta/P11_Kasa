import { NavLink, Outlet } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="navbar__logo">
          <NavLink to="/">
            <img src="./logo.png" alt="logo Kasa" />
          </NavLink>
        </div>
        <ul className="navbar__links">
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/a-propos">A propos</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
