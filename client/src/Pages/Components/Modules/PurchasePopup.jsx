import React from 'react';

const PurchasePopup = ({ message, onClose }) => {
  return (
    <div className="purchase-popup">
      <h3>{message}</h3>
    </div>
  );
};

export default PurchasePopup;
