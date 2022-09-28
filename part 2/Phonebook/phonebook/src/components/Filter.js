import React from "react";

const Filter = ({ handleSearch, searchKey, handleSearchKey }) => {
  return (
    <div>
      <form>
        <label htmlFor="search">filter shown with</label>
        <input id="search" value={searchKey} onChange={handleSearchKey} />
      </form>
    </div>
  );
};

export default Filter;
