import React from "react";
import Search from "../Pages/Components/Modules/SearchBar";
import ProductCard from "../Pages/Components/ProductCard";
import NotAvailableProduct from "../Pages/Components/NotAvailableProduct";
import { useProductContext } from "./Components/ProductContext";

function HomePage() {
  const { results, tag } = useProductContext();
  console.log("This is the Tag " + tag);
  console.log("tHIS IS THE RESULTS " + results);
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
        //  stock === 0 || stock === null ?
        //   <ProductCard /> : <NotAvailableProduct />} />
      ) : (
        <div className="mainContent">
          {results.map((item) => {
            return (
              <div key={item.productId} className="courseContainer">
                <h3>{item.name}</h3>
                <img src={item.image} alt={"course"} />
                <p>{item.shortDescription}</p>
                <p>{item.price} kr</p>
                <button className="buyButton">Add to cart</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default HomePage;
