import React from 'react';

/**
 * Component for selecting task sorting criteria.
 * @param {object} props - Component properties.
 * @param {string} props.sortBy - Current sorting criteria.
 * @param {function} props.setSortBy - Function to set the sorting criteria.
 * @param {boolean} props.loading - Loading state.
 */
function TaskSort({ sortBy, setSortBy, loading }) {
  return (
    <div className="flex justify-center mb-4">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        disabled={loading}
      >
        <option value="createdAt_desc">By Date (Newest)</option>
        <option value="createdAt_asc">By Date (Oldest)</option>
        <option value="description_asc">By Description (A-Z)</option>
        <option value="description_desc">By Description (Z-A)</option>
      </select>
    </div>
  );
}

export default TaskSort;
