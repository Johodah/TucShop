import React from "react";
import AddToCartButton from "../Pages/Components/Modules/AddToCartButton/AddtoCartButton";
import { useLocation } from "react-router-dom";
function Product() {
  const location = useLocation();
  const item = location.state.product;
  console.log(item);

  return (
    <div className="courseContainer">
      <h1>{item.name}</h1>
      <img src={item.image} alt={"course"} />
      <p>{item.description}</p>
      <p>{item.stock} spot(s)</p>
      <p>{item.price} kr</p>
      <AddToCartButton stock={item.stock} productId={item.productId} />
    </div>
  );
}

export default Product;
