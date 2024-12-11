import React, { useEffect } from "react";
import { useProductContext } from "../ProductContext";

function AddToCartButton({ stock, productId, productName, productDescription, price }) {
  const { clickedButtons, handleButtonClick, setCoursesCount, coursesCount } = useProductContext();

  useEffect(() => {
    setCoursesCount(coursesCount);
  }, [coursesCount]);

  const handleClick = (event) => {
    event.stopPropagation();
    handleButtonClick(productId);
    setCoursesCount((prevState) => prevState + 1);

    const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

    const newItem = {
      productId,
      productName,
      productDescription,
      price,
      stock 
    };

    cartItems.push(newItem);

    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return (
    <>
      {stock > 0 ? (
        <button className="buyButton" onClick={handleClick}>
          {clickedButtons[productId] ? "Added" : "Add to cart"}
        </button>
      ) : (
        <p className="outOfStock" aria-label="out of stock">
          Out of Stock
        </p>
      )}
    </>
  );
}

export default AddToCartButton;
