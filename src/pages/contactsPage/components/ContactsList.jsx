import React from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {removeContact} from "store/contacts";

const ContactsList = () => {
  const {contacts} = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <ul className="contacts__list">
      {contacts.map(contact => (
        <li key={contact.id} className="contacts__list-item">
          <Link to={`/contact/${contact.id}`}>
            {contact.name} {contact.surname}
          </Link>
          <div className="btns-group">
            <Link
              to={`/contacts/edit/${contact.id}`}
              className="btns-group__btn edit"
            >
              edit
            </Link>
            <button
              className="btns-group__btn delete"
              onClick={() => dispatch(removeContact(contact))}
            >
              delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
