import React, { createContext, useContext, useState } from "react";
import mock from "../Components/Modules/mockData.json";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [tag, setTag] = useState("");
  const searchItems = (searchWord) => {
    return setResults(
      mock.data.filter((element) => element.category.includes(searchWord))
    );
  };

  return (
    <ProductContext.Provider value={{ searchItems, results, tag, setTag }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
