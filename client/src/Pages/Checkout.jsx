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
  const [paymentDetails, setPaymentDetails] = useState({ accountHolderName: '', cardNumber: '', expDate: '', cvv: '' });
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
    const { accountHolderName, cardNumber, expDate, cvv } = paymentDetails;

    if (!accountHolderName || accountHolderName.trim() === '') {
      alert("Please fill out the Account Holder Name.");
      return;
    }

    if (!cardNumber || cardNumber.replace(/\D/g, '').length !== 16) {
      alert("Please enter a valid Card Number with 16 digits.");
      return;
    }

    if (!expDate || expDate.length !== 5 || !/^\d{2}\/\d{2}$/.test(expDate)) {
      alert("Please enter a valid Expiration Date in MM/YY format.");
      return;
    }

    if (!cvv || cvv.length !== 3 || !/^\d{3}$/.test(cvv)) {
      alert("Please enter a valid CVV with exactly 3 digits.");
      return;
    }

    setCartItems([]);
    setPaymentDetails({ cardNumber: '', expDate: '', cvv: '', accountHolderName: '' });
    setPurchaseCompleted(true);
    setShowPaymentForm(false);

    setTimeout(() => {
      setPurchaseCompleted(false);
      setShowPayButton(true);
      setShowPaymentForm(false);
      setCartItems(mockData.data);
    }, 2000);
  };


  const handleClosePopup = () => {
    setPurchaseCompleted(false);
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;

    const cardNumberRegex = /^\d{0,16}$/;
    const expDateRegex = /^(0[1-9]|1[0-2])?\/?\d{0,2}$/;
    const cvvRegex = /^\d{0,3}$/;
    const accountHolderNameRegex = /^[A-Za-z\s]*$/;

    if (name === "accountHolderName") {
      if (!accountHolderNameRegex.test(value)) return;
      setPaymentDetails(prevDetails => ({ ...prevDetails, accountHolderName: value }));
      return;
    }

    if (name === "cardNumber") {
      let formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length > 4) {
        formattedValue = formattedValue.replace(/(\d{4})(?=\d)/g, '$1-');
      }
      if (formattedValue.length <= 19) {
        setPaymentDetails(prevDetails => ({ ...prevDetails, cardNumber: formattedValue }));
      }
      return;
    }

    if (name === "expDate") {
      let formattedValue = value.replace(/\D/g, '').slice(0, 4);
      if (formattedValue.length > 2) formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2, 4);
      setPaymentDetails(prevDetails => ({ ...prevDetails, expDate: formattedValue }));
      return;
    }

    if (name === "cvv") {
      if (cvvRegex.test(value)) {
        setPaymentDetails(prevDetails => ({ ...prevDetails, cvv: value.slice(0, 3) }));
      }
      return;
    }

    if (cardNumberRegex.test(value)) {
      setPaymentDetails(prevDetails => ({ ...prevDetails, [name]: value }));
    }
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
