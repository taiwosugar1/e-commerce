import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import './SearchBar.css';



const SearchBar = () => {
 
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter data based on search term
 
  
 

  return (
    <div>
      {/* Search icon */}
      < IoSearch className="product-search-button" onClick={handleSearchClick}/>

      {/* Search bar */}
      {isSearchOpen && (
        <input
          className='product-search-input'
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      )}

    
    </div>
  );
};

export default SearchBar;