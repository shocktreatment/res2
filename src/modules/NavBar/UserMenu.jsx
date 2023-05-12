import { useAuth } from "../../shared/hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/auth-operations";

import Button from "../../shared/components/Btn/Button";

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <p>
        Hello, <b>{user.name}</b>
      </p>
      
      <Button onClick={handleLogOut}>
        <p>Log out</p>
      </Button>
    </div>
  );
};

export default UserMenu;
