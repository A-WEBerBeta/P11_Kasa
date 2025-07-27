import { NavLink } from "react-router";
import Logo from "../assets/img/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="navbar__logo">
          <NavLink to="/">
            <img src={Logo} alt="logo Kasa" />
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
    </div>
  );
};

export default Navbar;
