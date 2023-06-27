import React, { useState, useEffect } from 'react';
import "./SearchContainer.css";

const SearchContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isGifContainerOpen, setIsGifContainerOpen] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const apiKey = process.env.REACT_APP_GIPHY_API_KEY; // Replace with your GIPHY API key
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=10`
      );
      const data = await response.json();
      setSearchResults(data.data);
      setIsGifContainerOpen(true);
    } catch (error) {
      console.error('Error searching for GIFs:', error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsGifContainerOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search for GIFs and Artists here..."/>
        <button className="search-button" type="submit">Let's Go</button>
      </form>
      {isGifContainerOpen && searchResults.length > 0 && (
        <div className="gif-container">
          {searchResults.map((gif) => (
            <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchContainer;
