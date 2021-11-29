import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {updateContact} from "store/contacts";

const initState = {
  name: "",
  value: "",
};

const ModalAddField = ({contact, closeModal}) => {
  const [formData, setFormData] = useState(initState);
  const dispatch = useDispatch();

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateContact({...contact, [formData.name]: formData.value}));
    setFormData(initState);
    closeModal();
  };

  return (
    <div className="modal-wrapp">
      <form onSubmit={handleSubmit} className="modal">
        <div className="modal__info">
          <div className="name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label htmlFor="value">Value:</label>
            <input
              type="text"
              name="value"
              id="value"
              onChange={handleChange}
              value={formData.value}
            />
          </div>
        </div>
        <div className="modal__btns">
          <button className="btn-confirm">Add field</button>
        </div>
      </form>
    </div>
  );
};

export default ModalAddField;
