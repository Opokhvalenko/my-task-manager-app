import React from 'react';

/**
 * Form component for adding a new task.
 * @param {object} props - Component properties.
 * @param {string} props.newTaskDescription - Current description of the new task.
 * @param {function} props.setNewTaskDescription - Function to update the new task description.
 * @param {function} props.addTask - Function to add a task.
 * @param {boolean} props.loading - Loading state.
 */
function TaskForm({ newTaskDescription, setNewTaskDescription, addTask, loading }) {
  return (
    <form onSubmit={addTask} className="flex flex-col sm:flex-row gap-3 mb-6">
      <input
        type="text"
        className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        placeholder="Add a new task..."
        value={newTaskDescription}
        onChange={(e) => setNewTaskDescription(e.target.value)}
        disabled={loading}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add Task'}
      </button>
    </form>
  );
}

export default TaskForm;