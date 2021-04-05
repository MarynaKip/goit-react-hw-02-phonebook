import ContactItem from "../ContactItem";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  list: {
    listStyle: "none",
    margin: 0,
    padding: 10,
  },
});

const ContactList = ({ contacts }) => {
  const classes = useStyles();
  console.log(contacts);
  return (
    <ul className={classes.list}>
      {contacts.map((contact) => (
        <ContactItem contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
