import React from 'react';

/**
 * Task search bar component.
 * @param {object} props - Component properties.
 * @param {string} props.searchTerm - Current search query.
 * @param {function} props.setSearchTerm - Function to update the search query.
 * @param {boolean} props.loading - Loading state.
 */
function SearchBar({ searchTerm, setSearchTerm, loading }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        disabled={loading}
      />
    </div>
  );
}

export default SearchBar;
