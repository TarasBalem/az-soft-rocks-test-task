import React from "react";
import {Link} from "react-router-dom";

const ButtonAddContact = ({to}) => {
  return (
    <Link to={to} className="btn-add-contact">
      +Add contact
    </Link>
  );
};

export default ButtonAddContact;
