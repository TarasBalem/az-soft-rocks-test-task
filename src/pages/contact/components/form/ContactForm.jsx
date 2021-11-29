import React, {useState} from "react";
import "./form.scss";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addContact} from "store/contacts";
import TextInput from "components/textInput/TextInput";
import defaultAvatar from "assets/img/default-avatar.jpg";

const initialState = {
  name: "",
  surname: "",
  age: "",
  email: "",
  phone: "",
  address: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState({});

  const validate = data => {
    const error = {};
    if (!data.name) error.name = "Name cannot be blank";
    if (!data.surname) error.surname = "Surname cannot be blank";
    if (!data.email) error.email = "Email cannot be blank";
    if (!data.phone) error.phone = "Phone cannot be blank";
    return error;
  };

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
    setError({...error, [e.target.name]: ""});
  };

  const handleSubmit = e => {
    e.preventDefault();
    const error = validate(formData);
    setError(error);

    if (Object.keys(error).length === 0) {
      dispatch(addContact(formData));
      navigate(-1);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <span className="form__btn-close" onClick={() => navigate(-1)}>
        X
      </span>
      <div className="form__photo">
        <img src={defaultAvatar} alt="avatar" />
      </div>
      <div className="form__inputs">
        <TextInput
          name="name"
          label="name"
          handleChange={handleChange}
          value={formData.name}
          error={error.name}
        />
        <TextInput
          name="surname"
          label="surname"
          handleChange={handleChange}
          value={formData.surname}
          error={error.surname}
        />
        <TextInput
          name="age"
          label="age"
          handleChange={handleChange}
          value={formData.age}
          error={error.age}
        />
        <TextInput
          name="email"
          label="email"
          handleChange={handleChange}
          value={formData.email}
          error={error.email}
        />
        <TextInput
          name="phone"
          label="phone"
          handleChange={handleChange}
          value={formData.phone}
          error={error.phone}
        />
        <TextInput
          name="address"
          label="address"
          handleChange={handleChange}
          value={formData.address}
          error={error.address}
        />
      </div>
      <button type="submit" className="btn-submit">
        Save
      </button>
    </form>
  );
};

export default ContactForm;