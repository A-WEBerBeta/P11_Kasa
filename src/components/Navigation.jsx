import { NavLink, Outlet } from "react-router";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav>
        {/* ajout logo  */}
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/a-propos">
            <li>A propos</li>
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;
