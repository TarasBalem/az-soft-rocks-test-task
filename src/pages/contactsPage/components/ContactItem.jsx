import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import defaultAvatar from "assets/img/default-avatar.jpg";
import BtnRedirect from "components/ButtonRedirect";

const ContactItem = () => {
  const params = useParams();
  const {contacts} = useSelector(state => state.contacts);

  const contact = contacts.find(c => c.id === params.id);

  return (
    <div className="contact-item">
      <BtnRedirect />
      <div className="contact-item__photo">
        <img src={defaultAvatar} alt="avatar" />
      </div>
      <div className="contact-item__info">
        <div className="contact-item__info-item">
          <div className="title">name</div>
          <div className="value">{contact.name}</div>
        </div>
        <div className="contact-item__info-item">
          <div className="title">surname</div>
          <div className="value">{contact.surname}</div>
        </div>
        <div className="contact-item__info-item">
          <div className="title">age</div>
          <div className="value">{contact.age}</div>
        </div>
        <div className="contact-item__info-item">
          <div className="title">email</div>
          <div className="value">{contact.email}</div>
        </div>
        <div className="contact-item__info-item">
          <div className="title">phone</div>
          <div className="value">{contact.phone}</div>
        </div>
        <div className="contact-item__info-item">
          <div className="title">adress</div>
          <div className="value">{contact.address}</div>
        </div>
        <div className="contact-item__info-item">
          <div className="title">company</div>
          <div className="value">{contact.company}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
