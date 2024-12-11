import React from "react";
import Search from "../Pages/Components/Modules/SearchBar";
import ProductCard from "../Pages/Components/ProductCard";
import AddToCart from "../Pages/Components/Modules/AddtoCartButton";
import { useProductContext } from "./Components/ProductContext";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { results } = useProductContext();
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate("/product", { state: { product: item } });
  };

  return (
    <div>
      <h1>Welcome to CUT👑!</h1>
      <p>
        Check the different courses below🤩 <br /> or <br /> search your
        favourite course in the searchbar🔎!
      </p>
      <Search />
      {!results || results.length === 0 ? (
        <ProductCard />
      ) : (
        <div className="mainContent">
          {results.map((item) => {
            return (
              <button onClick={() => handleClick(item)} key={item.productId}>
                <div className="courseContainer">
                  <h3>{item.productName}</h3>
                  <p>{item.productDescription}</p>
                  <p>{item.stock} spot(s)</p>
                  <p>{item.price} kr</p>
                  <AddToCart stock={item.stock} productId={item.productId} />
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default HomePage;
