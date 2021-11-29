import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import defaultAvatar from "assets/img/default-avatar.jpg";
import BtnCloseItem from "components/ButtonRedirect";
import ContactField from "pages/contactsPage/components/ContactField";
import ModalAddField from "pages/contactsPage/components/ModalAddField";
import {updateContact} from "store/contacts";
import ModalConfirmation from "components/ModalConfirmation";

const ContactItem = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const {contacts} = useSelector(state => state.contacts);
  const contact = contacts.find(c => c.id === params.id);

  const [showModalAddFiled, setShowModalAddFiled] = useState(false);
  const [editingFields, setEditingFields] = useState({});
  const [confirmationFieldKey, setConfirmationFieldKey] = useState("");
  const [confirmationActionType, setConfirmationActionType] = useState("");
  const [lastUpdateActionData, setLastUpdateActionData] = useState(null);

  const handleEditField = key => {
    setEditingFields({...editingFields, [key]: contact[key]});
  };

  const handleFieldChange = (key, value) => {
    setEditingFields({...editingFields, [key]: value});
  };

  const onActionConfirm = (key, type) => {
    setConfirmationActionType(type);
    setConfirmationFieldKey(key);
  };

  const handleUpdateContact = key => {
    setLastUpdateActionData({
      key: key,
      oldValue: contact[key],
      newValue: editingFields[key],
    });
    dispatch(
      updateContact({
        ...contact,
        [key]: editingFields[key],
      }),
    );
  };

  const handleRemoveFiled = key => {
    const newContact = {...contact};
    delete newContact[key];
    dispatch(updateContact(newContact));
  };

  const handleCancelFieldChanges = key => {
    setEditingFields(prevState => {
      const newState = {...prevState};
      delete newState[key];
      return newState;
    });
  };

  const handleModalConfirm = () => {
    switch (confirmationActionType) {
      case "confirm":
        handleUpdateContact(confirmationFieldKey);
        break;
      case "cencel":
        handleCancelFieldChanges(confirmationFieldKey);
        break;
      case "delete":
        handleRemoveFiled(confirmationFieldKey);
        break;
      default:
        throw Error("no found cases");
    }
    handleCancelFieldChanges(confirmationFieldKey);
    setConfirmationActionType("");
    setConfirmationFieldKey("");
  };

  const handleModalCancel = () => {
    setConfirmationActionType("");
  };

  const [showModalLastUpdateCancel, setShowModalLastUpdateCancel] =
    useState(false);

  const handleLastUpdateCancel = () => {
    if (lastUpdateActionData === null) return;
    dispatch(
      updateContact({
        ...contact,
        [lastUpdateActionData.key]: lastUpdateActionData.oldValue,
      }),
    );
    handleCloseLastUpdateModal(false);
  };

  const handleCloseLastUpdateModal = () => {
    setShowModalLastUpdateCancel(false);
  };

  return (
    <>
      {confirmationActionType && (
        <ModalConfirmation
          handleConfirm={handleModalConfirm}
          handleCancel={handleModalCancel}
        >
          {`Are you sure, wou want to ${confirmationActionType} ${confirmationFieldKey} field change?`}
        </ModalConfirmation>
      )}
      {showModalAddFiled && (
        <ModalAddField
          contact={contact}
          closeModal={() => setShowModalAddFiled(false)}
        />
      )}
      {showModalLastUpdateCancel && (
        <ModalConfirmation
          handleConfirm={handleLastUpdateCancel}
          handleCancel={handleCloseLastUpdateModal}
        >
          xxx
        </ModalConfirmation>
      )}
      <div className="contact-item">
        <BtnCloseItem />
        <div className="contact-item__photo">
          <img src={defaultAvatar} alt="avatar" />
        </div>
        <div className="contact-item__info">
          {Object.keys(contact).map(key => (
            <ContactField
              key={key}
              contact={contact}
              fieldKey={key}
              value={contact[key]}
              isEditing={editingFields[key]}
              editableValue={editingFields[key]}
              handleEditField={handleEditField}
              handleFieldChange={event =>
                handleFieldChange(key, event.target.value)
              }
              onActionConfirm={onActionConfirm}
            />
          ))}
          <button onClick={() => setShowModalAddFiled(true)}>+Add field</button>
          <button onClick={() => setShowModalLastUpdateCancel(true)}>
            cancel last action
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactItem;
