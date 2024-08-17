// src/components/CreateOrgWalletModal.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateOrgWalletModal({ closeModal }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    role: 'medical-staff', // Default value
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
      const response = await fetch('http://localhost:8000/wallet/wallet', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: formData.name }),
      });

      if (response.ok) {
        // Navigate based on selected role
        if (formData.role === 'medical-staff') {
          navigate('/medical-staff');
        } else if (formData.role === 'external-party') {
          navigate('/external-party');
        }
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
        <h2 className="text-2xl font-bold mb-4">Create Organization Wallet</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name} 
              onChange={handleChange} 
              className="w-full border border-gray-300 rounded px-4 py-2 mt-2" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <select 
              name="role" 
              value={formData.role} 
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 mt-2" 
              required
            >
              <option value="medical-staff">Medical Staff</option>
              <option value="external-party">External Party</option>
            </select>
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
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateOrgWalletModal;
