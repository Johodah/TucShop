import React from "react";
import mockData from '/src/Pages/Components/Modules/mockData.json';
import './Components/Modules/Checkout.css';

const Checkout = () => {
  const cartItems = mockData.data; 

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="checkout">
      <div className="cartItems">
        {cartItems.map((item) => (
          <div key={item.productId} className="cart-item">
            <h3 className="cart-item-name">{item.name}</h3>
            <img src={item.image} alt={item.name} style={{ width: "100px" }} />
            <p>Price: {item.price} kr</p>
          </div>
        ))}
        <h2>Total: {totalPrice} kr</h2>
        <button className="purchaseButton">Purchase</button>
      </div>
    </div>
  );
};

export default Checkout;
