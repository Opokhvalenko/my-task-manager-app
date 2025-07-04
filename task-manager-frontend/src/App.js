import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import new components with .js extension
import MessageDisplay from './components/MessageDisplay.js';
import LoadingSpinner from './components/LoadingSpinner.js';
import TaskForm from './components/TaskForm.js';
import TaskFilter from './components/TaskFilter.js';
import TaskSort from './components/TaskSort.js';
import SearchBar from './components/SearchBar.js';
import TaskList from './components/TaskList.js';

// Main Task Manager application component
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskDescription, setEditingTaskDescription] = useState('');
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('createdAt_desc');
  const [searchTerm, setSearchTerm] = useState('');

  const API_URL = '/api/v1/tasks';

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    setMessage('');
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data.tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setMessage('Error loading tasks. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!newTaskDescription.trim()) {
      setMessage('Task description cannot be empty.');
      return;
    }

    setLoading(true);
    setMessage('');
    try {
      const response = await axios.post(API_URL, { description: newTaskDescription });
      setTasks([...tasks, response.data.task]);
      setNewTaskDescription('');
      setMessage('Task added successfully!');
    } catch (error) {
      console.error('Error adding task:', error);
      if (error.response && error.response.data && error.response.data.errors) {
        setMessage(error.response.data.errors.map(err => err.msg).join(', '));
      } else if (error.response && error.response.data && error.response.data.msg) {
        setMessage(error.response.data.msg);
      }
      else {
        setMessage('Error adding task.');
      }
    } finally {
      setLoading(false);
    }
  };

  const toggleComplete = async (id, completed) => {
    setLoading(true);
    setMessage('');
    try {
      const response = await axios.patch(`${API_URL}/${id}`, { completed: !completed });
      setTasks(tasks.map(task =>
        task._id === id ? { ...task, completed: response.data.task.completed } : task
      ));
      setMessage('Task status updated!');
    } catch (error) {
      console.error('Error updating task:', error);
      setMessage('Error updating task.');
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    setLoading(true);
    setMessage('');
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
      setMessage('Task deleted successfully!');
    } catch (error) {
      console.error('Error deleting task:', error);
      setMessage('Error deleting task.');
    } finally {
      setLoading(false);
    }
  };

  const startEditing = (task) => {
    setEditingTaskId(task._id);
    setEditingTaskDescription(task.description);
  };

  const cancelEditing = () => {
    setEditingTaskId(null);
    setEditingTaskDescription('');
  };

  const saveEditedTask = async (id) => {
    if (!editingTaskDescription.trim()) {
      setMessage('Task description cannot be empty.');
      return;
    }
    setLoading(true);
    setMessage('');
    try {
      const response = await axios.patch(`${API_URL}/${id}`, { description: editingTaskDescription });
      setTasks(tasks.map(task =>
        task._id === id ? { ...task, description: response.data.task.description } : task
      ));
      setMessage('Task updated successfully!');
      cancelEditing();
    } catch (error) {
      console.error('Error saving edited task:', error);
      if (error.response && error.response.data && error.response.data.errors) {
        setMessage(error.response.data.errors.map(err => err.msg).join(', '));
      } else if (error.response && error.response.data && error.response.data.msg) {
        setMessage(error.response.data.msg);
      }
      else {
        setMessage('Error updating task.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Filter tasks based on the current filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    }
    if (filter === 'incomplete') {
      return !task.completed;
    }
    return true; // 'all'
  });

  // Apply search to filtered tasks
  const searchedTasks = filteredTasks.filter(task =>
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort filtered and searched tasks
  const sortedTasks = [...searchedTasks].sort((a, b) => {
    if (sortBy === 'createdAt_asc') {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }
    if (sortBy === 'createdAt_desc') {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    if (sortBy === 'description_asc') {
      return a.description.localeCompare(b.description);
    }
    if (sortBy === 'description_desc') {
      return b.description.localeCompare(a.description);
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Task Manager</h1>

        <TaskForm
          newTaskDescription={newTaskDescription}
          setNewTaskDescription={setNewTaskDescription}
          addTask={addTask}
          loading={loading}
        />

        <MessageDisplay message={message} />

        {loading && <LoadingSpinner />}

        <TaskFilter
          filter={filter}
          setFilter={setFilter}
          loading={loading}
        />

        <TaskSort
          sortBy={sortBy}
          setSortBy={setSortBy}
          loading={loading}
        />

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          loading={loading}
        />

        <TaskList
          tasks={sortedTasks}
          loading={loading}
          filter={filter}
          searchTerm={searchTerm}
          editingTaskId={editingTaskId}
          editingTaskDescription={editingTaskDescription}
          setEditingTaskDescription={setEditingTaskDescription}
          startEditing={startEditing}
          cancelEditing={cancelEditing}
          saveEditedTask={saveEditedTask}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
