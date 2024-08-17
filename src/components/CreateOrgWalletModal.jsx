// src/components/CreateOrgWalletModal.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function CreateOrgWalletModal({ closeModal }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    navigate('/medical-staff'); // Assuming medical staff will be the next page after creation
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Create Organization Wallet</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2 mt-2" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <select className="w-full border border-gray-300 rounded px-4 py-2 mt-2" required>
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
