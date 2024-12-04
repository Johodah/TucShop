import React from "react";

function Cart() {
  const handleClick = () => {
    window.location.pathname = "/checkout";
  };

  return (
    <>
      <button onClick={handleClick}>
        <img
          alt="cart"
          src="https://img.icons8.com/ios/452/shopping-cart.png"
          width={40}
        />
      </button>
    </>
  );
}

export default Cart;
