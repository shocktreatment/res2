import { NavLink } from "react-router-dom";

import Navigation from "./Navigation";
import UserMenu from "./UserMenu";

import { useAuth } from "../../shared/hooks/useAuth";

import css from "./NavBar.module.css";

const AppBar = () => {
  const { isLogin } = useAuth();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "50px",
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100px",
        }}
      >
        <NavLink to="/res2/" className={css.navLink}>
          Home
        </NavLink>
      </div>

      {isLogin && (
        <div style={{ display: "flex", gap: "20px" }}>
          <NavLink to="/res2/cabinet" className={css.navLink}>
            Cabinet
          </NavLink>
          <NavLink to="/res2/tasks" className={css.navLink}>
            Todos
          </NavLink>
          <NavLink to="/res2/contacts" className={css.navLink}>
            Contacts
          </NavLink>
        </div>
      )}

      {isLogin ? <UserMenu /> : <Navigation />}

    </div>
  );
};

export default AppBar;
