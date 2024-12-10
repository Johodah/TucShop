import React from "react";
import { useProductContext } from "../ProductContext";

function Cart() {
  const { coursesCount } = useProductContext();
  console.log("in the cart " + coursesCount);

  const handleClick = () => {
    window.location.pathname = "/checkout";
  };

  return (
    <>
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
    </>
  );
}

export default Cart;
