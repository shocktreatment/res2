import { NavLink } from "react-router-dom";

import css from "./NavBar.module.css";

const NavAuth = () => {
  return (
    <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
      <NavLink to="/signup" className={css.navLink}>
        Sign in
      </NavLink>{" "}

      <span
        style={{ fontSize: "30px", fontWeight: "lighter", color: "#919e96" }}
      >
        |
      </span>
      
      <NavLink to="/login" className={css.navLink}>
        Log in
      </NavLink>
    </div>
  );
};
export default NavAuth;
