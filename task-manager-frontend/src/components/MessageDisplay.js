import React from 'react';

/**
 * 
 * @param {object} props 
 * @param {string} props.message 
 */
function MessageDisplay({ message }) {
  if (!message) return null;

  return (
    <div className="bg-blue-100 text-blue-800 p-3 rounded-md mb-4 text-center animate-fade-in">
      {message}
    </div>
  );
}

export default MessageDisplay;
