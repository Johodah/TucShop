import React, { createContext, useContext, useState } from "react";
import mock from "../Components/Modules/mockData.json";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [tag, setTag] = useState("");
  const [coursesCount, setCoursesCount] = useState();
  const [clickedButtons, setClickedButtons] = useState({});

  const updateSpots = () => {
    mock.data.map((item) => {});
  };

  const searchItems = (searchWord) => {
    return setResults(
      mock.data.filter((element) => element.category.includes(searchWord))
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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
