import React from 'react';
import SearchBar from './searchbar';

const YourComponent = () => {
  const handleSearch = (searchTerm) => {
    // Handle the search logic here
    console.log('Searching for:', searchTerm);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {/* Other content in your component */}
    </div>
  );
};

export default YourComponent;