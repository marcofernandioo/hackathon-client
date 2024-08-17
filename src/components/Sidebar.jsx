// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ items, title = "Menu" }) {
  return (
    <aside className="w-72 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl">
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

      {/* Disconnect button */}
      <div className="absolute bottom-0 left-0 mb-4 ml-4">
        <button
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
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
