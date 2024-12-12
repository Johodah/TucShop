import React from "react";

const CartTotal = ({ totalPrice, purchaseCompleted }) => {
  return (
    <div className="cart-total-price">
      {!purchaseCompleted && <h2>Total: {totalPrice} kr</h2>}
    </div>
  );
};

export default CartTotal;
