import React, {useState} from "react";
import "./contactsList.scss";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {removeContact} from "store/contacts";

import ModalConfirmation from "components/modal/ModalConfirmation";

const ContactsList = () => {
  const {contacts} = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [selectContactToDelete, setSelectContactToDelete] = useState(null);

  const handleSelectContactToDelete = contact => {
    setSelectContactToDelete(contact);
    setShowModalConfirm(true);
  };

  const handleConfirm = () => {
    dispatch(removeContact(selectContactToDelete));
    setShowModalConfirm(false);
    setSelectContactToDelete(null);
  };

  const handleCancel = () => {
    setShowModalConfirm(false);
    setSelectContactToDelete(null);
  };

  return (
    <>
      {showModalConfirm && (
        <ModalConfirmation
          children={`Are you sure, you want to delete the  contact?`}
          handleConfirm={handleConfirm}
          handleCancel={handleCancel}
        />
      )}
      <ul className="list">
        {contacts.map(contact => (
          <li key={contact.id} className="list__item">
            <Link to={`/contact/${contact.id}`}>
              {contact.name} {contact.surname}
            </Link>
            <button
              className="btn-delete"
              onClick={() => handleSelectContactToDelete(contact)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
