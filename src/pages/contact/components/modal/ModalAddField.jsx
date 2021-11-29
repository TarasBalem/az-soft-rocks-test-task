import React, {useState} from "react";
import "./modalAddField.scss";
import {useDispatch} from "react-redux";
import {updateContact} from "store/contacts";

import TextInput from "components/textInput/TextInput";

const initState = {
  title: "",
  value: "",
};

const ModalAddField = ({contact, closeModal}) => {
  const [formData, setFormData] = useState(initState);
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const validate = data => {
    const error = {};
    if (!data.title) error.title = "Title cannot be blank";
    if (!data.value) error.value = "Value cannot be blank";
    return error;
  };

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    const error = validate(formData);
    setError(error);

    if (Object.keys(error).length === 0) {
      dispatch(updateContact({...contact, [formData.title]: formData.value}));
      setFormData(initState);
      closeModal();
    }
  };

  return (
    <div className="modal-wrapp">
      <form onSubmit={handleSubmit} className="modal">
        <div className="modal__info">
          <TextInput
            name="title"
            label="title"
            value={formData.title}
            handleChange={handleChange}
            error={error.title}
          />
          <TextInput
            name="value"
            label="value"
            value={formData.value}
            handleChange={handleChange}
            error={error.value}
          />
        </div>
        <div className="modal__btns">
          <button className="btn-confirm">Add field</button>
        </div>
      </form>
    </div>
  );
};

export default ModalAddField;
