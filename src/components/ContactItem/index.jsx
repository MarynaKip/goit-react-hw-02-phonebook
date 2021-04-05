import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  item: {
    display: "flex",
    marginBottom: 10,
    alignItems: "flex-start",
  },
});

const ContactItem = ({ contact }) => {
  const classes = useStyles();

  return (
    <li key={contact.id} className={classes.item}>
      {contact.name}
      {contact.number}
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
  }),
};

export default ContactItem;
