// src/pages/Home.jsx
import React, { useState } from 'react';
import CreateWalletModal from '../components/CreateWalletModal';
import CreateOrgWalletModal from '../components/CreateOrgWalletModal';
import LoginModal from '../components/LoginModal'; // New LoginModal

function Home() {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isOrgModalOpen, setIsOrgModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // New Login state

  const openUserModal = () => setIsUserModalOpen(true);
  const closeUserModal = () => setIsUserModalOpen(false);

  const openOrgModal = () => setIsOrgModalOpen(true);
  const closeOrgModal = () => setIsOrgModalOpen(false);

  const openLoginModal = () => setIsLoginModalOpen(true); // Open Login Modal
  const closeLoginModal = () => setIsLoginModalOpen(false); // Close Login Modal

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold">EHR System Demo</h1>
      <p className="mt-4 text-gray-600">Create a wallet or login to get started</p>
      <div className="mt-8 flex space-x-4">
        <button 
          onClick={openUserModal} 
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
        >
          Create User Wallet
        </button>
        <button 
          onClick={openOrgModal} 
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition"
        >
          Create Organization Wallet
        </button>
        <button 
          onClick={openLoginModal} 
          className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600 transition"
        >
          Login
        </button>
      </div>

      {isUserModalOpen && <CreateWalletModal closeModal={closeUserModal} />}
      {isOrgModalOpen && <CreateOrgWalletModal closeModal={closeOrgModal} />}
      {isLoginModalOpen && <LoginModal closeModal={closeLoginModal} />} {/* New Login Modal */}
    </div>
  );
}

export default Home;
