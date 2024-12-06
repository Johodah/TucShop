import React from "react";
import { useProductContext } from "../ProductContext";

function Search() {
  const { searchItems, setTag, tag } = useProductContext();

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  const handleClick = () => {
    searchItems(tag);
    setTag("");
  };

  return (
    <div className="searchBar">
      <input
        type="search"
        placeholder="Search..."
        value={tag}
        onChange={handleChange}
      />
      <button className="searchButton" onClick={handleClick}>
        Go!
      </button>
    </div>
  );
}

export default Search;
