import React from "react";
import { useProductContext } from "../ProductContext";

function Search() {
  const { searchItems, setSearchTerm, searchTerm } = useProductContext();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = () => {
    searchItems(searchTerm); 
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button className="search-button" onClick={handleClick}>
        Go!
      </button>
    </div>
  );
}

export default Search;
