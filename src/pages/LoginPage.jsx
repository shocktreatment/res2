import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/auth-operations";

import Button from "../shared/components/Btn/Button";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <p>
        Please, <b>Log in</b> or{" "}
        <Link to="/signup" style={{ color: "#085223" }}>
          Sign up
        </Link>
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          gap: "5px",
          marginTop: "10px",
        }}
      >
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />

        <Button type={"submit"}>
          <p>Log in</p>
        </Button>
      </form>
    </div>
  );
};
export default LoginPage;
