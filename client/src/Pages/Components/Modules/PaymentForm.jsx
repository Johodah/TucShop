import React from "react";

const PaymentForm = ({ paymentDetails, handlePaymentChange, handlePurchase }) => {
  return (
    <div className="payment-form">
      <h3 className="payment-information-text">Enter Payment Information</h3>
      <div className="payment-row">
        <input
          type="text"
          name="accountHolderName"
          placeholder="Account Holder Name"
          value={paymentDetails.accountHolderName}
          onChange={handlePaymentChange}
          required
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={paymentDetails.cardNumber}
          onChange={handlePaymentChange}
          required
        />
      </div>
      <div className="payment-row">
        <input
          type="text"
          name="expirationDate"
          placeholder="Expiration Date"
          value={paymentDetails.expirationDate}
          onChange={handlePaymentChange}
          required
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={paymentDetails.cvv}
          onChange={handlePaymentChange}
          required
        />
      </div>
      <button onClick={handlePurchase} className="purchase-button">Complete purchase</button>
    </div>
  );
};

export default PaymentForm;
