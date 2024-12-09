import React from "react";
import { useProductContext } from "../../ProductContext";
import mock from "../mockData.json";

function AddToCartButton(item) {
  const { clickedButtons, handleButtonClick, setCoursesCount } =
    useProductContext();

  const courses = item.stock;
  const productId = item.productId;

  const handleClick = () => {
    handleButtonClick(productId);
  };

  return (
    <>
      {courses > 0 ? (
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
