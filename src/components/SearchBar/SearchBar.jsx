import React from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {

  return (
    <>
      <input type="text" className="search-input" placeholder="Search..." />
      <button className="search-button">
        <FaSearch className="search-icon" />
        Search
      </button>
    </>
  );
};

export default SearchBar;
