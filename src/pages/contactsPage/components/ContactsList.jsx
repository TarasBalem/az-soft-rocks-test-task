import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ContactsList = () => {
  const {contacts} = useSelector(state => state.contacts);

  return (
    <>
      <h2>Contacts list</h2>
      <ul className="contacts__list">
        {contacts.map(contact => (
          <li key={contact.id} className="contacts__list-item">
            <Link to={`/contact/${contact.id}`}>{contact.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
