import React from "react";
import PropTypes from "prop-types";
import "./buttonAddContact.scss";
import {Link} from "react-router-dom";

const ButtonAddContact = ({to}) => {
  return (
    <Link to={to} className="btn-add-contact">
      +Add contact
    </Link>
  );
};

ButtonAddContact.propTypes = {
  to: PropTypes.string.isRequired,
};

ButtonAddContact.defaultProps = {
  to: "new",
};

export default ButtonAddContact;
