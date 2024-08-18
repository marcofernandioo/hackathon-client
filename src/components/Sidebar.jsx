/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
 
export default function Sidebar({ items, title = "Menu" }) {
  // Retrieve walletAddress from sessionStorage
  const walletAddress = sessionStorage.getItem("walletAddress");
 
  // Function to truncate the wallet address
  const truncateAddress = (address) => {
    if (!address) return '';
    return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
  };
 
  // Function to copy the full wallet address to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    alert("Wallet address copied to clipboard!");
  };
 
  return (
    <aside className="w-72 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl flex flex-col justify-between">
      <div>
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">{title}</h2>
        <ul className="mt-8">
          {items.map(item => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `block w-full text-left px-4 py-3 rounded-sm my-1 transition-all ${
                    isActive ? 'bg-stone-800 text-stone-200' : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
 
      <div className="mb-4">
        {/* Display Truncated Wallet Address */}
        <p className="text-stone-200 mb-2">Wallet Address:</p>
        <p
          className="text-stone-400 cursor-pointer px-4"
          onClick={copyToClipboard}
          title="Click to copy the full address"
        >
          {truncateAddress(walletAddress)}
        </p>
 
        {/* Disconnect button */}
        <button
          className="bg-red-600 text-white w-full px-4 py-2 rounded hover:bg-red-700 mt-4"
          onClick={() => {
            window.location.href = '/';
          }}
        >
          Disconnect
        </button>
      </div>
    </aside>
  );
}