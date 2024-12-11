import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Cart state

  // Other context states
  const [results, setResults] = useState([]);
  const [tag, setTag] = useState("");
  const [coursesCount, setCoursesCount] = useState(0);
  const [clickedButtons, setClickedButtons] = useState({});
  const [fetchedData, setFetchedData] = useState([]);

  const handleButtonClick = (productId, productData) => {
    setCartItems((prevState) => {
      if (prevState.some(item => item.productId === productId)) {
        return prevState;
      }
      return [...prevState, productData];
    });
    setCoursesCount((prevState) => prevState + 1);
  };

  return (
    <ProductContext.Provider
      value={{
        cartItems,
        setCartItems,
        handleButtonClick,
        results,
        tag,
        setTag,
        clickedButtons,
        setCoursesCount,
        coursesCount,
        setFetchedData,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
