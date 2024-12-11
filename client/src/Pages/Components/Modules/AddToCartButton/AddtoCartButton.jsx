import React from "react";
import { useProductContext } from "../../ProductContext";

function AddToCartButton({ stock, productId }) {
  const { clickedButtons, handleButtonClick } = useProductContext();

  const handleClick = () => {
    handleButtonClick(productId);
  };

  return (
    <>
      {stock > 0 ? (
        <button className="buyButton" onClick={handleClick}>
          {clickedButtons[productId] ? "Added" : "Add to cart"}
        </button>
      ) : (
        <p className="outOfStock">Out of Stock</p>
      )}
    </>
  );
}

export default AddToCartButton;
