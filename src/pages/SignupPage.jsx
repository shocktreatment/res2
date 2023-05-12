import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { signUp } from "../redux/auth/auth-operations";

import Button from "../shared/components/Btn/Button";

const SignupPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      signUp({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <h1>SignupPage</h1>
      <p>
        Please, <b>Sign up</b> or{" "}
        <Link to="/login" style={{ color: "#085223" }}>
          Log in
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
        <input type="text" name="name" placeholder="name" />
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />

        <Button type={"submit"}>Sign up</Button>
      </form>
    </div>
  );
};
export default SignupPage;
