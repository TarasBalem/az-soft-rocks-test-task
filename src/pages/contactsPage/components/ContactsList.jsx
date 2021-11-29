import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {removeContact} from "store/contacts";

import ModalConfirmation from "components/ModalConfirmation";

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
      <ul className="contacts__list">
        {contacts.map(contact => (
          <li key={contact.id} className="contacts__list-item">
            <Link to={`/contact/${contact.id}`}>
              {contact.name} {contact.surname}
            </Link>
            <div className="btns-group">
              <button
                className="btns-group__btn delete"
                onClick={() => handleSelectContactToDelete(contact)}
              >
                delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
