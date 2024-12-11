import React, { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [coursesCount, setCoursesCount] = useState(0);
  const [clickedButtons, setClickedButtons] = useState({});
  const [fetchedData, setFetchedData] = useState([]);  

  useEffect(() => {
    const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    setCoursesCount(cartItems.length);
  }, []); 

  const handleButtonClick = (productId) => {
    const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    const existingItemIndex = cartItems.findIndex(item => item.productId === productId);

    setCoursesCount(cartItems.length);
    setClickedButtons((prevState) => ({
      ...prevState,
      [productId]: true,
    }));
  };

  return (
    <ProductContext.Provider
      value={{
        coursesCount,
        clickedButtons,
        handleButtonClick,
        setCoursesCount,
        fetchedData,   
        setFetchedData 
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
