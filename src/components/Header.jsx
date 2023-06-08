import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";
import Logo from "../assets/images/logo-red.svg";
export default function Header() {
  return (
    <header className={classes.header}>
      <img src={Logo} alt="" className={classes.header_logo} />
      <nav>
        <ul className={classes.header_list}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${classes.header_link} ${
                  isActive ? classes.header_link___active : null
                }`
              }
              end
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${classes.header_link} ${
                  isActive ? classes.header_link___active : null
                }`
              }
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
