import React from "react";
import "./field.scss";

const ContactField = ({
  fieldKey,
  value,
  isEditing,
  handleEditField,
  handleFieldChange,
  editableValue,
  onActionConfirm,
}) => {
  return (
    <>
      <div className="field">
        <div className="filed__title">{fieldKey}</div>
        {isEditing ? (
          <input
            type="text"
            value={editableValue}
            onChange={handleFieldChange}
          />
        ) : (
          <div className="filed__value">{value}</div>
        )}

        {fieldKey !== "id" ? (
          <div className="btn-group">
            {isEditing ? (
              <>
                <button
                  className="btn-confirm"
                  onClick={() => onActionConfirm(fieldKey, "confirm")}
                >
                  confirm
                </button>
                <button
                  className="btn-cancel"
                  onClick={() => onActionConfirm(fieldKey, "cencel")}
                >
                  cancel
                </button>
              </>
            ) : (
              <button
                className="btn-edit"
                onClick={() => handleEditField(fieldKey)}
              >
                edit
              </button>
            )}

            <button
              className="btn-delete"
              onClick={() => onActionConfirm(fieldKey, "delete")}
            >
              delete
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ContactField;
