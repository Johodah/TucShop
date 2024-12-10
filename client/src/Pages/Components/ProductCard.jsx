import React from "react";
import mockData from "../Components/Modules/mockData.json";
import AddToCart from "../Components/Modules/AddToCartButton/AddtoCartButton";
import { useNavigate } from "react-router-dom";

function ProductCard() {
  const incomingData = mockData;
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate("/product", { state: { product: item } });
  };

  return (
    <div className="mainContent">
      {incomingData.data.map((item) => {
        return (
          <button onClick={() => handleClick(item)} key={item.productId}>
            <div className="courseContainer">
              <h3>{item.name}</h3>
              <img src={item.image} alt={"course"} />
              <p>{item.shortDescription}</p>
              <p>{item.stock} spot(s)</p>
              <p>{item.price} kr</p>
              <AddToCart stock={item.stock} productId={item.productId} />
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default ProductCard;
