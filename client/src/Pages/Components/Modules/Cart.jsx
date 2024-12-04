import React from "react";

function Cart() {
  const [count, setCount] = React.useState(2);

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
      {count > 0 ? <div className="cart-count">{count}</div> : null}
    </>
  );
}

export default Cart;
