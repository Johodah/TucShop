import React from "react";

function Cart() {
  const handleClick = () => {
    window.location.pathname = "/checkout";
  };

  return (
    <>
      <button onClick={handleClick}>Cart</button>
    </>
  );
}

export default Cart;
