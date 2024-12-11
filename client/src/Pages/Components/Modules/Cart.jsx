import React from "react";
import { useProductContext } from "../ProductContext";

function Cart() {
  const { coursesCount } = useProductContext();

  const handleClick = () => {
    window.location.pathname = "/checkout";
  };

  return (
    <div>
      <button onClick={handleClick}>
        <img
          alt="cart"
          src="https://img.icons8.com/ios/452/shopping-cart.png"
          width={30}
        />
      </button>
      {coursesCount > 0 ? (
        <div className="cart-count">{coursesCount}</div>
      ) : null}
    </div>
  );
}

export default Cart;
