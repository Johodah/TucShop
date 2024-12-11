import React, { useEffect } from "react";
import AddToCartButton from "../Components/Modules/AddtoCartButton";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../Components/ProductContext";

function ProductCard() {
  const [incomingData, setIncomingData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const { setFetchedData } = useProductContext();

  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate("/product", { state: { product: item } });
  };

  useEffect(() => {
    fetch("https://localhost:7181/api/Products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setIncomingData(data);
        setFetchedData(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div className="mainContent">
      {error && <p className="error">{error}</p>}
      {incomingData.length > 0 &&
        incomingData.map((item) => {
          return (
            <button onClick={() => handleClick(item)} key={item.productId}>
              <div className="courseContainer">
                <h3>{item.productName}</h3>
                <p>{item.productDescription}</p>
                <p>{item.stock} spot(s)</p>
                <p>{item.price} kr</p>
                {/* Pass all product details to AddToCartButton */}
                <AddToCartButton
                  stock={item.stock}
                  productId={item.productId}
                  productName={item.productName}
                  productDescription={item.productDescription}
                  price={item.price}
                />
              </div>
            </button>
          );
        })}
    </div>
  );
}

export default ProductCard;
