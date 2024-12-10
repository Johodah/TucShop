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

  const handlePurchase = () => {
    setCartItems([]);
    setPurchaseCompleted(true);
  };

  const handleClosePopup = () => {
    setPurchaseCompleted(false);
  };

  return (
    <div className="checkout">
      {cartItems.map((item) => (
        <CartItem
          key={item.productId}
          item={item}
          clicked={clicked}
          onClick={handleClick}
          stock={item.stock}
        />
      ))}
      <h2>Total: {totalPrice} kr</h2>
      <button onClick={handlePurchase} className="purchase-button">Purchase</button>

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
