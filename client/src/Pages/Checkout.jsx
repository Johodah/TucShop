import React, { useState, useEffect } from "react";
import CartItemList from "./Components/Modules/CartItemList";
import CartTotal from "./Components/Modules/CartTotal";
import ConfirmPopup from "./Components/Modules/ConfirmPopup";
import PurchasePopup from "./Components/Modules/PurchasePopup";
import PaymentForm from "./Components/Modules/PaymentForm";
import PaymentButton from "./Components/Modules/PaymentButton";
import "./Components/Modules/Checkout.css";

const VALIDATION_MESSAGES = {
  accountHolderName: "Please fill out the Account Holder Name.",
  cardNumber: "Please enter a valid Card Number with 16 digits.",
  expirationDate: "Please enter a valid Expiration Date in MM/YY format.",
  cvv: "Please enter a valid CVV with exactly 3 digits.",
};

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [state, setState] = useState({
    clicked: null,
    showConfirm: false,
    purchaseCompleted: false,
    showPaymentForm: false,
    showPayButton: true,
    paymentDetails: { accountHolderName: "", cardNumber: "", expirationDate: "", cvv: "" },
  });

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    const savedCart = JSON.parse(sessionStorage.getItem("cartItems"));
    if (savedCart) {
      setCartItems(savedCart);
    } else {
    }
  }, []);

  const updateState = (updates) => setState((prevState) => ({ ...prevState, ...updates }));

  const confirmDeleteItem = () => {
    const updatedItems = cartItems.filter((item) => item.productId !== state.clicked);
    setCartItems(updatedItems);
    sessionStorage.setItem("cartItems", JSON.stringify(updatedItems));
    updateState({ showConfirm: false, clicked: null });
  };

  const cancelDeleteItem = () => updateState({ showConfirm: false, clicked: null });

  const initiatePayment = () => updateState({ showPaymentForm: true, showPayButton: false });

  const completePurchase = () => {
    const { accountHolderName, cardNumber, expirationDate, cvv } = state.paymentDetails;

    if (!accountHolderName.trim()) return alert(VALIDATION_MESSAGES.accountHolderName);
    if (!cardNumber || cardNumber.replace(/\D/g, "").length !== 16) return alert(VALIDATION_MESSAGES.cardNumber);
    if (!expirationDate || expirationDate.length !== 5 || !/^\d{2}\/\d{2}$/.test(expirationDate)) return alert(VALIDATION_MESSAGES.expirationDate);
    if (!cvv || cvv.length !== 3 || !/^\d{3}$/.test(cvv)) return alert(VALIDATION_MESSAGES.cvv);

    setCartItems([]);
    sessionStorage.setItem("cartItems", JSON.stringify([]));

    updateState({
      paymentDetails: { accountHolderName: "", cardNumber: "", expirationDate: "", cvv: "" },
      purchaseCompleted: true,
      showPaymentForm: false,
    });

    setTimeout(() => updateState({ purchaseCompleted: false, showPayButton: true }), 2000);
  };

  const handlePaymentInputChange = (e) => {
    const { name, value } = e.target;
    updateState({
      paymentDetails: { ...state.paymentDetails, [name]: formatPaymentField(name, value) },
    });
  };

  const formatPaymentField = (name, value) => {
    const formatters = {
      accountHolderName: (v) => v.replace(/[^A-Za-z\s]/g, ""),
      cardNumber: (v) => v.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1-").slice(0, 19),
      expirationDate: (v) => v.replace(/\D/g, "").slice(0, 4).replace(/(\d{2})(?=\d)/, "$1/").slice(0, 5),
      cvv: (v) => v.replace(/\D/g, "").slice(0, 3),
    };
    return formatters[name] ? formatters[name](value) : value;
  };

  return (
    <div className="checkout">
      {!state.purchaseCompleted && (
        <CartItemList cartItems={cartItems} clicked={state.clicked} handleClick={(id) => updateState({ clicked: id, showConfirm: true })} />
      )}
      <CartTotal totalPrice={totalPrice} purchaseCompleted={state.purchaseCompleted} />
      {state.showPayButton && <PaymentButton handlePay={initiatePayment} />}
      {state.showPaymentForm && (
        <PaymentForm
          paymentDetails={state.paymentDetails}
          handlePaymentChange={handlePaymentInputChange}
          handlePurchase={completePurchase}
        />
      )}
      {state.showConfirm && <ConfirmPopup onConfirm={confirmDeleteItem} onCancel={cancelDeleteItem} />}
      {state.purchaseCompleted && <PurchasePopup message="Thank you for your purchase!" onClose={() => updateState({ purchaseCompleted: false })} />}
    </div>
  );
};

export default Checkout;
