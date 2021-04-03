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
      {contacts
        .filter((contact) =>
          contact.name.toLowerCase().includes(contact.filter.toLowerCase())
        )
        .map(
          (contact) => (
            // contact.name.includes(contact.filter) ? (
            <ContactItem contact={contact} />
          )
          // ) : (
          //   ""
          // )
        )}
    </ul>
  );
};

export default ContactList;
