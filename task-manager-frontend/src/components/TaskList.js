import React from 'react';
import TaskItem from './TaskItem.js';

/**
 * Component for displaying a list of tasks.
 * @param {object} props - Component properties.
 * @param {Array<object>} props.tasks - Array of task objects to display.
 * @param {boolean} props.loading - Loading state.
 * @param {string} props.filter - Current filter.
 * @param {string} props.searchTerm - Current search query.
 * @param {string|null} props.editingTaskId - ID of the task being edited.
 * @param {string} props.editingTaskDescription - Description of the task being edited.
 * @param {function} props.setEditingTaskDescription - Function to update the description of the task being edited.
 * @param {function} props.startEditing - Function to start editing.
 * @param {function} props.cancelEditing - Function to cancel editing.
 * @param {function} props.saveEditedTask - Function to save the edited task.
 * @param {function} props.toggleComplete - Function to toggle the completed status.
 * @param {function} props.deleteTask - Function to delete the task.
 */
function TaskList({
  tasks,
  loading,
  filter,
  searchTerm,
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
    <div className="space-y-4">
      {tasks.length === 0 && !loading && (
        <p className="text-center text-gray-500">
          {filter === 'all' && searchTerm === '' && 'No tasks. Add the first one!'}
          {filter === 'completed' && searchTerm === '' && 'No completed tasks.'}
          {filter === 'incomplete' && searchTerm === '' && 'No active tasks.'}
          {searchTerm !== '' && 'No tasks found for this query.'}
        </p>
      )}
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          loading={loading}
          editingTaskId={editingTaskId}
          editingTaskDescription={editingTaskDescription}
          setEditingTaskDescription={setEditingTaskDescription}
          startEditing={startEditing}
          cancelEditing={cancelEditing}
          saveEditedTask={saveEditedTask}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
