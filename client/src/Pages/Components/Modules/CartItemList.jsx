import React from "react";
import CartItem from './CartItem';

const CartItemList = ({ cartItems, clicked, handleClick }) => {
  return (
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
  );
};

export default CartItemList;
