import React, { useState } from "react";
import mockData from '/src/Pages/Components/Modules/mockData.json';
import './Components/Modules/Checkout.css';
import trashCan from './Components/Modules/Images/trash-can.png';

const Checkout = () => {
  const [cartItems, setCartItems] = useState(mockData.data);

  const [clicked, setClicked] = useState(false);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleClick = (productId) => {
    setClicked(!clicked);

    const updatedCartItems = cartItems.filter(item => item.productId !== productId);
    setCartItems(updatedCartItems); 
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
                className={`cart-item-trash-can ${clicked ? 'clicked' : ''}`}  
                onClick={() => handleClick(item.productId)} 
              />
            </div>
          </div>
        </div>
      ))}
      <h2>Total: {totalPrice} kr</h2>
      <button className="purchase-button">Purchase</button>
    </div>
  );
};

export default Checkout;
