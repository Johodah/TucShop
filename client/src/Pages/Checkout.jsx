import React, { useState } from "react";
import mockData from '/src/Pages/Components/Modules/mockData.json';
import CartItem from './Components/Modules/CartItem';
import ConfirmPopup from './Components/Modules/ConfirmPopup';
import PurchasePopup from './Components/Modules/PurchasePopup';
import './Components/Modules/Checkout.css';

const Checkout = () => {
  const [cartItems, setCartItems] = useState(mockData.data);
  const [clicked, setClicked] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({ cardNumber: '', expDate: '', cvv: '' });
  const [showPayButton, setShowPayButton] = useState(true);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleClick = (productId) => {
    setClicked(productId);
    setShowConfirm(true);
  };

  const handleConfirmDelete = () => {
    const updatedCartItems = cartItems.filter(item => item.productId !== clicked);
    setCartItems(updatedCartItems);
    setShowConfirm(false);
    setClicked(null);
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
    setClicked(null);
  };

  const handlePay = () => {
    setShowPaymentForm(true);
    setShowPayButton(false);
  };

  const handlePurchase = () => {
    if (paymentDetails.cardNumber && paymentDetails.expDate && paymentDetails.cvv) {
      setCartItems([]);
      setPaymentDetails({ cardNumber: '', expDate: '', cvv: '' }); // Clear payment fields
      setPurchaseCompleted(true);
      setShowPaymentForm(false);

      setTimeout(() => {
        setPurchaseCompleted(false);
        setShowPayButton(true);
        setShowPaymentForm(false);
        setCartItems(mockData.data);
      }, 2000);
    } else {
      alert("Please fill out all payment details.");
    }
  };

  const handleClosePopup = () => {
    setPurchaseCompleted(false);
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  return (
    <div className="checkout">
      {!purchaseCompleted && (
        <div className="cart-item-container">
          {cartItems.map((item) => (
            <CartItem
              key={item.productId}
              item={item}
              clicked={clicked}
              onClick={handleClick}
              stock={item.stock}
            />
          ))}
        </div>
      )}
      <div className="cart-total-price">
        {!purchaseCompleted && <h2>Total: {totalPrice} kr</h2>}
      </div>
      {showPayButton && (
        <button onClick={handlePay} className="pay-button">Pay</button>
      )}
      {showPaymentForm && (
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
              name="expDate"
              placeholder="Expiration Date"
              value={paymentDetails.expDate}
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
      )}

      {showConfirm && (
        <ConfirmPopup
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
      
      {purchaseCompleted && (
        <PurchasePopup
          message="Thank you for your purchase!"
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Checkout;
