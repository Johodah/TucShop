import React, { createContext, useContext, useState } from "react";
import mock from "../Components/Modules/mockData.json";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [tag, setTag] = useState("");
  const [coursesCount, setCoursesCount] = useState(0);
  const [clickedButtons, setClickedButtons] = useState({});
  const [fetchedData, setFetchedData] = useState([]);

  const updateSpots = () => {
    mock.data.map((item) => {});
  };

  const searchItems = (searchWord) => {
    return setResults(
      fetchedData.filter((element) => element.productName.includes(searchWord))
    );
  };

  const handleButtonClick = (id) => {
    setClickedButtons((prevState) => ({
      ...prevState,
      [id]: true,
    }));
  };

  return (
    <ProductContext.Provider
      value={{
        searchItems,
        results,
        tag,
        setTag,
        clickedButtons,
        handleButtonClick,
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
