import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchAllContacts, fetchAddContact } from "../../redux/auth/auth-operations";

import ContactsForm from "./ContactsForm";
import ContactsList from "./ContactsList";
import Filter from "./Filter";

import style from "./contacts.module.css";

const Contacts = () => {
  const contacts = useSelector((store) => store.contacts);
  const filter = useSelector((store) => store.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const onAddContact = ({ name, number }) => {
    dispatch(fetchAddContact({ name, number }));
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts.items;
    }

    const normalizeFilter = String(filter.toLowerCase());
    const result = contacts.items.filter((contact) => {
      return contact.name.toLowerCase().includes(normalizeFilter);
    });

    return result;
  };

  const filteredContacts = getFilteredContacts();
  const isContacts = contacts.items.length;

  return (
    <div className={style.box}>
      <h2 className={style.phonebook}>Phonebook</h2>
      <ContactsForm onSubmit={onAddContact} />
      <h3 className={style.phonebook}>Contacts</h3>
      <Filter value={filter} />
      <ContactsList contacts={filteredContacts} />
      {!isContacts && <p>No contacts</p>}
    </div>
  );
};

export default Contacts;
