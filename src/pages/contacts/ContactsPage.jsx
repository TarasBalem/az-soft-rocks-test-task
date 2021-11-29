import React from "react";
import "./contactsPage.scss";
import ContactsList from "pages/contacts/components/list/ContactsList";
import BtnAddContact from "components/buttonAddContact/ButtonAddContact";

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
