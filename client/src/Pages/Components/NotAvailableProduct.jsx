import React from "react";
import mockData from "../Components/Modules/mockData.json";

function CardButton() {
  const incomingData = mockData;

  return (
    <div className="mainContent">
      {incomingData.data.map((item) => {
        return (
          <div key={item.productId} className="courseContainer">
            <h3>{item.name}</h3>
            <img src={item.image} alt={"course"} />
            <p>{item.shortDescription}</p>
            <p>{item.price} kr</p>
            <button className="buyButton-unavailable">Add to cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default CardButton;