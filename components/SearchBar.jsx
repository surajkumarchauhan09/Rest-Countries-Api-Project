import React from "react";

const SearchBar = ({setQuery}) => {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass" />
      <input type="text" placeholder="Search for a country..."  onChange={(e)=>setQuery(e.target.value.toLocaleLowerCase())}/>
    </div>
  );
};
export default SearchBar;
