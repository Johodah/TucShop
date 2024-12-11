import React from "react";
import AddToCartButton from "../Pages/Components/Modules/AddtoCartButton";
import { useLocation } from "react-router-dom";
function Product() {
  const location = useLocation();
  const item = location.state.product;

  return (
    <div className="courseContainer">
      <h1>{item.productName}</h1>
      <p>{item.productDescription}</p>
      <p>{item.stock} spot(s)</p>
      <p>{item.price} kr</p>
      <AddToCartButton stock={item.stock} productId={item.productId} />
    </div>
  );
}

export default Product;
