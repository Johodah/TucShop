import React from "react";

const ConfirmPopup = ({ onConfirm, onCancel }) => {
  return (
    <div className="confirm-popup">
      <p>Are you sure you want to remove this course from your cart?</p>
      <div className="confirm-popup-remove">
        <button onClick={onConfirm}>Yes, Remove</button>
      </div>
      <div className="confirm-popup-cancel">
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default ConfirmPopup;
