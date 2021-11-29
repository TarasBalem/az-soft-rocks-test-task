import React from "react";

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
      <div className="contact-item__field">
        <div className="title">{fieldKey}</div>
        {isEditing ? (
          <input
            type="text"
            value={editableValue}
            onChange={handleFieldChange}
          />
        ) : (
          <div className="value">{value}</div>
        )}

        {fieldKey !== "id" ? (
          <div className="btn-group">
            {isEditing ? (
              <>
                <button onClick={() => onActionConfirm(fieldKey, "confirm")}>
                  confirm
                </button>
                <button onClick={() => onActionConfirm(fieldKey, "cencel")}>
                  cancel
                </button>
              </>
            ) : (
              <button onClick={() => handleEditField(fieldKey)}>edit</button>
            )}

            <button onClick={() => onActionConfirm(fieldKey, "delete")}>
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
