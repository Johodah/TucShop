import React, { useState, useEffect } from "react";
import mockData from '/src/Pages/Components/Modules/mockData.json';
import CartItemList from './Components/Modules/CartItemList';
import CartTotal from './Components/Modules/CartTotal';
import ConfirmPopup from './Components/Modules/ConfirmPopup';
import PurchasePopup from './Components/Modules/PurchasePopup';
import PaymentForm from './Components/Modules/PaymentForm';
import PaymentButton from './Components/Modules/PaymentButton';
import './Components/Modules/Checkout.css';

const VALIDATION_MESSAGES = {
  accountHolderName: "Please fill out the Account Holder Name.",
  cardNumber: "Please enter a valid Card Number with 16 digits.",
  expirationDate: "Please enter a valid Expiration Date in MM/YY format.",
  cvv: "Please enter a valid CVV with exactly 3 digits."
};

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [state, setState] = useState({
    clicked: null,
    showConfirm: false,
    purchaseCompleted: false,
    showPaymentForm: false,
    showPayButton: true,
    paymentDetails: { accountHolderName: '', cardNumber: '', expDate: '', cvv: '' }
  });

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    const savedCart = JSON.parse(sessionStorage.getItem("cartItems"));
    if (savedCart) {
      setCartItems(savedCart);
    } else {
      sessionStorage.setItem("cartItems", JSON.stringify(mockData.data));
      setCartItems(mockData.data);
    }
  }, []);

  const handleClick = (productId) => {
    setState(prevState => ({ ...prevState, clicked: productId, showConfirm: true }));
  };

  const handleConfirmDelete = () => {
    const updatedItems = cartItems.filter(item => item.productId !== state.clicked);
    setCartItems(updatedItems);
    sessionStorage.setItem("cartItems", JSON.stringify(updatedItems)); 
    setState(prevState => ({ ...prevState, showConfirm: false, clicked: null }));
  };

  const handleCancelDelete = () => {
    setState(prevState => ({ ...prevState, showConfirm: false, clicked: null }));
  };

  const handlePay = () => {
    setState(prevState => ({ ...prevState, showPaymentForm: true, showPayButton: false }));
  };

  const handlePurchase = () => {
    const { accountHolderName, cardNumber, expDate, cvv } = state.paymentDetails;

    if (!accountHolderName.trim()) return alert(VALIDATION_MESSAGES.accountHolderName);
    if (!cardNumber || cardNumber.replace(/\D/g, '').length !== 16) return alert(VALIDATION_MESSAGES.cardNumber);
    if (!expDate || expDate.length !== 5 || !/^\d{2}\/\d{2}$/.test(expDate)) return alert(VALIDATION_MESSAGES.expDate);
    if (!cvv || cvv.length !== 3 || !/^\d{3}$/.test(cvv)) return alert(VALIDATION_MESSAGES.cvv);

    setCartItems([]);
    sessionStorage.setItem("cartItems", JSON.stringify([])); 

    setState(prevState => ({
      ...prevState,
      paymentDetails: { cardNumber: '', expDate: '', cvv: '', accountHolderName: '' },
      purchaseCompleted: true,
      showPaymentForm: false
    }));

    setTimeout(() => {
      setState(prevState => ({
        ...prevState,
        purchaseCompleted: false,
        showPayButton: true,
        showPaymentForm: false
      }));
      sessionStorage.setItem("cartItems"); 
    }, 2000);
  };

  const handleClosePopup = () => {
    setState(prevState => ({ ...prevState, purchaseCompleted: false }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = formatPaymentField(name, value);

    setState(prevState => ({
      ...prevState,
      paymentDetails: { ...prevState.paymentDetails, [name]: formattedValue }
    }));
  };

  const formatPaymentField = (name, value) => {
    switch (name) {
      case "accountHolderName":
        return value.replace(/[^A-Za-z\s]/g, '');
      case "cardNumber":
        return value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1-').slice(0, 19);
      case "expirationDate":
        return value.replace(/\D/g, '').slice(0, 4).replace(/(\d{2})(?=\d)/, '$1/').slice(0, 5);
      case "cvv":
        return value.slice(0, 3);
      default:
        return value;
    }
  };

  return (
    <div className="checkout">
      {!state.purchaseCompleted && (
        <CartItemList 
          cartItems={cartItems} 
          clicked={state.clicked} 
          handleClick={handleClick} 
        />
      )}
      <CartTotal 
        totalPrice={totalPrice} 
        purchaseCompleted={state.purchaseCompleted} 
      />
      {state.showPayButton && (
        <PaymentButton handlePay={handlePay} />
      )}
      {state.showPaymentForm && (
        <PaymentForm
          paymentDetails={state.paymentDetails}
          handlePaymentChange={handlePaymentChange}
          handlePurchase={handlePurchase}
        />
      )}
      {state.showConfirm && (
        <ConfirmPopup
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
      {state.purchaseCompleted && (
        <PurchasePopup
          message="Thank you for your purchase!"
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Checkout;
