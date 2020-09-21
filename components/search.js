import React from "react";

// Component to filter results
const Search = ({ handleSearch, query }) => {
  return (
    <div>
      <p>Search by name:</p>
      <input type="text" value={query} onChange={handleSearch} />
    </div>
  );
};

export default Search;
