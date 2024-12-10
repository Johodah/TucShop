import React, { useEffect } from "react";
import mockData from "../Components/Modules/mockData.json";
import AddToCart from "../Components/Modules/AddToCartButton/AddtoCartButton";
import { useNavigate } from "react-router-dom";

function ProductCard() {
  const [incomingData, setIncomingData] = React.useState([]);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:7181/api/Products");
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setIncomingData(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate("/product", { state: { product: item } });
  };

  return (
    <div className="mainContent">
      {error && <p className="error">{error}</p>}
      {incomingData.length > 0 &&
        incomingData.map((item) => {
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
