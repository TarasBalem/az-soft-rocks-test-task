import React from "react";
import PropTypes from "prop-types";

const ModalConfirmation = ({children, handleConfirm, handleCancel}) => {
  return (
    <div className="modal-wrapp">
      <div className="modal">
        <div className="modal__info">{children}</div>
        <div className="modal__btns">
          <button className="btn-confirm" onClick={() => handleConfirm()}>
            Confirm
          </button>
          <button className="btn-cancel" onClick={() => handleCancel()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

ModalConfirmation.propTypes = {
  children: PropTypes.string.isRequired,
  handleCancel: PropTypes.func,
  handleConfirm: PropTypes.func,
};

ModalConfirmation.defaultProps = {
  children: "You are sure?",
};

export default ModalConfirmation;
