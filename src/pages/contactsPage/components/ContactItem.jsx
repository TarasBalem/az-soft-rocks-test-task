import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import defaultAvatar from "assets/img/default-avatar.jpg";

const ContactItem = () => {
  const params = useParams();
  const {contacts} = useSelector(state => state.contacts);

  const contact = contacts.find(c => c.id === params.id);

  return (
    <>
      <h2>Contact {contact.id}</h2>
      <div className="contact-item">
        <div className="contact-item__photo">
          <img src={defaultAvatar} alt="avatar" />
        </div>
        <div className="contact-item__info">
          <div className="contact-item__info-item">
            <div className="title">name</div>
            <div className="value">{contact.name}</div>
          </div>
          <div className="contact-item__info-item">
            <div className="title">age</div>
            <div className="value">{contact.age}</div>
          </div>
          <div className="contact-item__info-item">
            <div className="title">phone</div>
            <div className="value">{contact.phone}</div>
          </div>
          <div className="contact-item__info-item">
            <div className="title">adress</div>
            <div className="value">
              <div className="sub-value">{contact.address.country}</div>
              <div className="sub-value">{contact.address.city}</div>
              <div className="sub-value">{contact.address.street}</div>
            </div>
          </div>
          <div className="contact-item__info-item">
            <div className="title">company</div>
            <div className="value">
              <div className="sub-value">{contact.company.name}</div>
              <div className="sub-value">{contact.company.address}</div>
              <div className="sub-value">{contact.company.website}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactItem;
