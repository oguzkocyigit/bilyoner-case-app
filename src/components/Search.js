import React, { useState } from 'react'
import './Search.scss'

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchInputChanges = (event) => {
    setSearchValue(event.target.value)
  }

  const callSearchFunction = (event) => {
    event.preventDefault();
    if (searchValue.length > 0) {
      search(searchValue);
      setSearchValue("");
    }
  };

  return (
    <div className="search-bar">

      <form>
        <div className="columns is-marginless">
          <div className="column is-paddingless">
            <input
              value={searchValue}
              onChange={handleSearchInputChanges}
              type="text"
              placeholder="Search a movie"
            />
          </div>
          <div className="column is-narrow is-paddingless">
            <button
              onClick={callSearchFunction}
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Search
