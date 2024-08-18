/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/LoginModal.jsx// src/components/LoginModal.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
function LoginModal({ closeModal }) {
  // Added useState to manage wallet address and password inputs
  const [walletAddress, setWalletAddress] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    // Added API request to check wallet address and password
    try {
      const response = await fetch('http://localhost:8000/wallet/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          wallet_address: walletAddress,
          password: password,
        }),
      });
 
      if (response.ok) {
        const result = await response.json();
        console.log(result);
 
        if (result.wallet_data) { // Check if login is successful
          navigate('/patients'); // Navigate based on the user role
        } else {
          alert("Invalid wallet address or password");
        }
      } else {
        console.error('Failed to login');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
 
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Wallet Address</label>
            {/* Updated input to handle wallet address */}
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2 mt-2"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            {/* Updated input to handle password */}
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-4 py-2 mt-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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
 
 