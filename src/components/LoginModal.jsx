// src/components/LoginModal.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginModal({ closeModal }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the login logic here, for now we just redirect
    navigate('/patients');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Wallet Address</label>
            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2 mt-2" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full border border-gray-300 rounded px-4 py-2 mt-2" required />
          </div>
          <div className="flex justify-end">
            <button 
              type="button" 
              onClick={closeModal} 
              className="bg-gray-200 px-4 py-2 rounded mr-2 hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
