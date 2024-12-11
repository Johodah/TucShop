import React, { useEffect } from "react";
import { useProductContext } from "../ProductContext";

function AddToCartButton({ stock, productId, productName, productDescription, price }) {
  const { clickedButtons, handleButtonClick, setCoursesCount, coursesCount } = useProductContext();

  useEffect(() => {
    setCoursesCount(coursesCount);
  }, [coursesCount]);

  const handleClick = () => {
    handleButtonClick(productId);
    setCoursesCount((prevState) => prevState + 1);

    // Get cart items from sessionStorage or initialize as an empty array
    const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

    const newItem = {
      productId,
      productName,
      productDescription,
      price,
      stock // Add stock to the cart item
    };

    // Push the new item into the cart
    cartItems.push(newItem);

    // Save the updated cart back to sessionStorage
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
