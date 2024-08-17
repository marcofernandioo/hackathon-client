// src/components/CreateWalletModal.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function CreateWalletModal({ closeModal }) {
  const navigate = useNavigate();
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ic, setIc] = useState("");
  const [walletName, setWalletName] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ userName, email, ic, walletName})
    // Here you would handle the form submission logic, e.g., saving wallet info
    
    // Navigate to /medical-staff after form submission
    navigate('/patients');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Create Wallet</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2 mt-2" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded px-4 py-2 mt-2" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">IC</label>
            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2 mt-2" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Wallet Name</label>
            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2 mt-2" required />
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
