import React, { useEffect } from "react";
import { useProductContext } from "../../ProductContext";

function AddToCartButton({ stock, productId }) {
  const { clickedButtons, handleButtonClick, setCoursesCount, coursesCount } =
    useProductContext();

  useEffect(() => {
    setCoursesCount(coursesCount);
  }, [coursesCount]);

  const handleClick = () => {
    handleButtonClick(productId);
    setCoursesCount((prevState) => prevState + 1);
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
