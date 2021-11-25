import React from "react";
import PropTypes from "prop-types";

const TextInput = ({name, label, handleChange, value, error}) => {
  let wrapperClass = "input-wrapp";

  if (error & (error.length > 0)) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <input
        value={value}
        onChange={handleChange}
        id={name}
        name={name}
        type="text"
        className="input-control"
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  value: "",
  error: "",
};

export default TextInput;
