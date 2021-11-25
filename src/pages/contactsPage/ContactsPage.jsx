import React from "react";
import {Routes, Route} from "react-router-dom";
import ContactsList from "pages/contactsPage/components/ContactsList";
import ContactItem from "pages/contactsPage/components/ContactItem";

const ContactsPage = () => {
  return (
    <div className="contacts">
      <Routes>
        <Route path="/" element={<ContactsList />} />
        <Route path={`/contact/:id`} element={<ContactItem />} />
      </Routes>
    </div>
  );
};

export default ContactsPage;
