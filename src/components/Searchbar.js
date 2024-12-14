import React, { useState } from "react";
import "../Style/Search.css";

const Searchbar = ({ items, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className="input-field"
      />
    </div>
  );
};

export default Searchbar;
