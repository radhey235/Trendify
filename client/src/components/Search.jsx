import React from 'react';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded-full px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-amber-500"
      />
      <button
        className="absolute right-1 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition"
        onClick={() => console.log('Search clicked for:', searchTerm)}
      >
        🔍
      </button>
    </div>
  );
};

export default Search;
