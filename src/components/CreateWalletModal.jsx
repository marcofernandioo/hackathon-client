import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
function CreateWalletModal({ closeModal }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ic: '',
    walletName: '',
  });
 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const response = await fetch('http://localhost:8000/wallet/create', {         // Nanti ganti 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
 
      if (response.ok) {
        // Navigate to /patients after successful form submission
        navigate('/patients');
      } else {
        console.error('Failed to create wallet');
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };
 
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Create Wallet</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 rounded px-4 py-2 mt-2"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded px-4 py-2 mt-2"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full border border-gray-300 rounded px-4 py-2 mt-2"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">IC</label>
            <input
              type="text"
              name="ic"
              className="w-full border border-gray-300 rounded px-4 py-2 mt-2"
              value={formData.ic}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Wallet Name</label>
            <input
              type="text"
              name="walletName"
              className="w-full border border-gray-300 rounded px-4 py-2 mt-2"
              value={formData.walletName}
              onChange={handleChange}
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
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
 
export default CreateWalletModal;
 