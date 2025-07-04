import React from 'react';

/**
 * Component for displaying a single task and its interactions.
 * @param {object} props - Component properties.
 * @param {object} props.task - Task object.
 * @param {boolean} props.loading - Loading state.
 * @param {string|null} props.editingTaskId - ID of the task being edited.
 * @param {string} props.editingTaskDescription - Description of the task being edited.
 * @param {function} props.setEditingTaskDescription - Function to update the description of the task being edited.
 * @param {function} props.startEditing - Function to start editing.
 * @param {function} props.cancelEditing - Function to cancel editing.
 * @param {function} props.saveEditedTask - Function to save the edited task.
 * @param {function} props.toggleComplete - Function to toggle the completed status.
 * @param {function} props.deleteTask - Function to delete the task.
 */
function TaskItem({
  task,
  loading,
  editingTaskId,
  editingTaskDescription,
  setEditingTaskDescription,
  startEditing,
  cancelEditing,
  saveEditedTask,
  toggleComplete,
  deleteTask,
}) {
  return (
    <div
      className="flex items-center justify-between bg-gray-50 p-4 rounded-md shadow-sm border border-gray-200 transition-all duration-300 ease-in-out transform hover:scale-102"
    >
      {editingTaskId === task._id ? (
        <input
          type="text"
          value={editingTaskDescription}
          onChange={(e) => setEditingTaskDescription(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 mr-2 transition duration-300"
          disabled={loading}
        />
      ) : (
        <span
          className={`text-lg ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'} transition-all duration-300`}
        >
          {task.description}
        </span>
      )}

      <div className="flex items-center space-x-3">
        {editingTaskId === task._id ? (
          <>
            <button
              onClick={() => saveEditedTask(task._id)}
              className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition duration-300 ease-in-out font-semibold shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110"
              title="Save changes"
              disabled={loading}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </button>
            <button
              onClick={cancelEditing}
              className="bg-gray-400 text-white p-2 rounded-full hover:bg-gray-500 transition duration-300 ease-in-out font-semibold shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110"
              title="Cancel editing"
              disabled={loading}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => startEditing(task)}
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110"
              title="Edit task"
              disabled={loading}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L15.232 5.232z"></path></svg>
            </button>
            <button
              onClick={() => toggleComplete(task._id, task.completed)}
              className={`p-2 rounded-full transition duration-300 ease-in-out shadow-sm ${
                task.completed
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              } disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110`}
              title={task.completed ? 'Restore task' : 'Complete task'}
              disabled={loading}
            >
              {task.completed ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              )}
            </button>
            <button
              onClick={() => deleteTask(task._id)}
              className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-300 ease-in-out shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110"
              title="Delete task"
              disabled={loading}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskItem;
