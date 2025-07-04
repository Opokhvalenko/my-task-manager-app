import React from 'react';

/**
 * Component for filtering tasks.
 * @param {object} props - Component properties.
 * @param {string} props.filter - Current active filter ('all', 'completed', 'incomplete').
 * @param {function} props.setFilter - Function to set the filter.
 * @param {boolean} props.loading - Loading state.
 */
function TaskFilter({ filter, setFilter, loading }) {
  return (
    <div className="flex justify-center space-x-2 mb-4">
      <button
        onClick={() => setFilter('all')}
        className={`px-4 py-2 rounded-md font-semibold transition duration-300 ease-in-out ${
          filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        disabled={loading}
      >
        All
      </button>
      <button
        onClick={() => setFilter('incomplete')}
        className={`px-4 py-2 rounded-md font-semibold transition duration-300 ease-in-out ${
          filter === 'incomplete' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        disabled={loading}
      >
        Active
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={`px-4 py-2 rounded-md font-semibold transition duration-300 ease-in-out ${
          filter === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        disabled={loading}
      >
        Completed
      </button>
    </div>
  );
}

export default TaskFilter;
