import React, { useState, useEffect } from "react";
import "./Components/Modules/Checkout.css";
import CartItemList from "./Components/Modules/CartItemList";
import CartTotal from "./Components/Modules/CartTotal";
import ConfirmPopup from "./Components/Modules/ConfirmPopup";
import PurchasePopup from "./Components/Modules/PurchasePopup";
import PaymentForm from "./Components/Modules/PaymentForm";
import PaymentButton from "./Components/Modules/PaymentButton";
import CheckoutValidationMessages from "./Components/Modules/CheckoutValidationMessages";
import { FormatPaymentField } from "./Components/Modules/FormatPaymentFields";
import { DefaultState, DefaultPaymentDetails } from "./Components/Modules/CheckoutDefaultStates";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [state, setState] = useState({ ...DefaultState });

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    const savedCart = JSON.parse(sessionStorage.getItem("cartItems"));
    if (savedCart) setCartItems(savedCart);
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

    if (!accountHolderName.trim()) return alert(CheckoutValidationMessages.accountHolderName);
    if (!cardNumber || cardNumber.replace(/\D/g, "").length !== 16)
      return alert(CheckoutValidationMessages.cardNumber);
    if (!expirationDate || expirationDate.length !== 5 || !/^\d{2}\/\d{2}$/.test(expirationDate))
      return alert(CheckoutValidationMessages.expirationDate);
    if (!cvv || cvv.length !== 3 || !/^\d{3}$/.test(cvv)) return alert(CheckoutValidationMessages.cvv);

    setCartItems([]);
    sessionStorage.setItem("cartItems", JSON.stringify([]));

    updateState({
      paymentDetails: { ...DefaultPaymentDetails },
      purchaseCompleted: true,
      showPaymentForm: false,
    });

    setTimeout(() => updateState({ purchaseCompleted: false, showPayButton: true }), 2000);
  };

  const handlePaymentInputChange = (e) => {
    const { name, value } = e.target;
    updateState({
      paymentDetails: { ...state.paymentDetails, [name]: FormatPaymentField(name, value) },
    });
  };

  return (
    <div className="checkout">
      {!state.purchaseCompleted && (
        <CartItemList
          cartItems={cartItems}
          clicked={state.clicked}
          handleClick={(id) => updateState({ clicked: id, showConfirm: true })}
        />
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
      {state.purchaseCompleted && (
        <PurchasePopup
          message="Thank you for your purchase!"
          onClose={() => updateState({ purchaseCompleted: false })}
        />
      )}
    </div>
  );
};

export default Checkout;
