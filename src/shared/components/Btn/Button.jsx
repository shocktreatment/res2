import css from "./button.module.css";

const Button = ({ type = "button", children, onClick }) => {
  return (
    <button type={type} className={css.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
