import React from "react";
import Search from "../Pages/Components/Modules/SearchBar";
import ProductCard from "../Pages/Components/ProductCard";
import AddToCart from "../Pages/Components/Modules/AddToCartButton/AddtoCartButton";
import { useProductContext } from "./Components/ProductContext";

function HomePage() {
  const { results } = useProductContext();
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
              <div key={item.productId} className="courseContainer">
                <h3>{item.name}</h3>
                <img src={item.image} alt={"course"} />
                <p>{item.shortDescription}</p>
                <p>{item.price} kr</p>
                <AddToCart item={item} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default HomePage;
