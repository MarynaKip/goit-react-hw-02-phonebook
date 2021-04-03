import "./App.css";
import { useState } from "react";
import Contacts from "./components/Contacts";
import ContactList from "./components/ContactList";

// const initialState = {
//   contacts: [],
//   name: "",
// };

const App = () => {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  return (
    <>
      <Contacts onSubmit={handleAddContact} />

      <ContactList contacts={contacts} />
    </>
  );
};

export default App;
