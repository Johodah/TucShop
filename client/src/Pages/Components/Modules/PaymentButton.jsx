import React from "react";

const PaymentButton = ({ handlePay }) => {
  return (
    <button onClick={handlePay} className="pay-button">Pay</button>
  );
};

export default PaymentButton;
