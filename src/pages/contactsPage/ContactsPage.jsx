import React from "react";
import ContactsList from "pages/contactsPage/components/ContactsList";
import BtnAddContact from "components/ButtonAddContact";

const ContactsPage = () => {
  return (
    <div className="contacts">
      <div className="contacts__head">
        <h2>Contacts</h2>
        <BtnAddContact to={"new"} />
      </div>
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
