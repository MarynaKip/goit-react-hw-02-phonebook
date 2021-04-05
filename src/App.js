import "./App.css";
import { useState } from "react";
import Contacts from "./components/Contacts";
import ContactList from "./components/ContactList";

const App = () => {
  const [state, setState] = useState({ filter: "", contacts: [] });
  const { filter, contacts } = state;

  const handleAddContact = (newContact) => {
    setState((prev) => ({
      filter: prev.filter,
      contacts: [...prev.contacts, newContact],
    }));
  };

  // const filterContacts = (contacts, filter) => {
  //   contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  const handleFilterChange = (e) => {
    setState({
      filter: e.target.value,
      // contacts: filterContacts,
    });
  };

  return (
    <>
      <span>Find:</span>
      <input
        type="text"
        value={filter}
        name="filter"
        onChange={handleFilterChange}
      />
      <Contacts onSubmit={handleAddContact} />

      <ContactList contacts={contacts} />
    </>
  );
};

export default App;
