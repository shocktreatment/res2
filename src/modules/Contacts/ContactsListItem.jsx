import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { fetchDeleteContact } from "../../redux/auth/auth-operations";

import style from "./contacts.module.css";

const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={style.item}>
      {name}: {number}
      <button
        type="button"
        onClick={() => dispatch(fetchDeleteContact(id))}
        className={style.del}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactsListItem;

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
