import React, { useState } from "react";
import mockData from '/src/Pages/Components/Modules/mockData.json';
import './Components/Modules/Checkout.css';
import trashCan from './Components/Modules/Images/trash-can.png';

const Checkout = () => {
  const [cartItems, setCartItems] = useState(mockData.data);
  const [clicked, setClicked] = useState(null); 
  const [showConfirm, setShowConfirm] = useState(false); 

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

  return (
    <div className="checkout">
      {cartItems.map((item) => (
        <div key={item.productId} className="cart-item">
          <div className="cart-item-header">
            <h3 className="cart-item-name">{item.name}</h3>
            <div className="cart-item-content">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <p className="cart-item-price">{item.price} kr</p>
              <img 
                src={trashCan} 
                alt="Remove item" 
                className={`cart-item-trash-can ${clicked === item.productId ? 'clicked' : ''}`}  
                onClick={() => handleClick(item.productId)} 
              />
            </div>
          </div>
        </div>
      ))}
      <h2>Total: {totalPrice} kr</h2>
      <button className="purchase-button">Purchase</button>
      {showConfirm && (
        <div className="confirm-popup">
          <p>Are you sure you want to remove this course from your cart?</p>
          <div className="confirm-popup-remove">
          <button onClick={handleConfirmDelete}>Yes, Remove</button>
          </div>
          <div className="confirm-popup-cancel">
          <button onClick={handleCancelDelete}>Cancel</button>
        </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
