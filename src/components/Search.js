import React, { useState } from "react";

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (event) => {
    setSearchValue(event.target.value);
  };

  const callSearchFunction = (event) => {
    event.preventDefault();
    search(searchValue);
    setSearchValue("");
  };

  return (
    <form className="search-bar">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />

      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;
