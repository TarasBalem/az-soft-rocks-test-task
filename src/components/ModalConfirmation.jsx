import React from "react";

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

export default ModalConfirmation;
