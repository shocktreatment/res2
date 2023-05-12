import { useState, memo } from "react";

import PropTypes from "prop-types";

import s from "./form.module.scss";

const Form = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ search });
    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className={s.input}
          placeholder="s e a r c h   p o s t"
          name="search"
          value={search}
          required
        />
      </label>
      <button className={s.btn} type="submit">
        Enter
      </button>
    </form>
  );
};

export default memo(Form);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
