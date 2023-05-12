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
        <NavLink to="/" className={css.navLink}>
          Home
        </NavLink>
      </div>

      {isLogin && (
        <div style={{ display: "flex", gap: "20px" }}>
          <NavLink to="/cabinet" className={css.navLink}>
            Cabinet
          </NavLink>
          <NavLink to="/tasks" className={css.navLink}>
            Todos
          </NavLink>
          <NavLink to="/contacts" className={css.navLink}>
            Contacts
          </NavLink>
        </div>
      )}
      
      {isLogin ? <UserMenu /> : <Navigation />}

    </div>
  );
};

export default AppBar;
