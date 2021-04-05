import { useState } from "react";

const initialState = {
  id: "",

  name: "",
  number: "",
};

const Contacts = ({ onSubmit }) => {
  const [state, setState] = useState(initialState);
  //const [filter, setFilter] = useState("");
  const { name, number } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(), // uuid
      name,
      number: Number(number),
    };
    //contacts.push(newItem);
    onSubmit(newItem);
  };

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input
            type="text"
            value={name}
            name="name"
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label>
          <input
            type="tel"
            value={number}
            name="number"
            onChange={handleChange}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit">+ Add</button>
      </form>
    </>
  );
};

export default Contacts;
