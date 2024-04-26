import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import './SearchBar.css';
import Nav from '../navbar/Nav';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  

  // Function to handle search
  const handleSearch = () => {
    // Your logic to fetch search results based on searchTerm
    // For demonstration, let's assume searchResult is an array of search results
    const searchResult = []; // Placeholder for search result
    setSearchResult(searchResult);
  };

  // Function to handle search when the enter key is pressed
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search">
      <Nav />
      <input
        className="product-search-input"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="product-search-button" onClick={handleSearch}>
        <IoSearch />
      </button>
      <div className="search-result">
        {searchResult.map((item, index) => (
          <div key={index}>{/* Render your search result item here */}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;