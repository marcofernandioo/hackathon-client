import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Sidebar({ items, title = "Menu" }) {
  const navigate = useNavigate();

  /*
  useEffect(() => {
    const storedWalletAddress = localStorage.getItem("walletAddress");
    if (storedWalletAddress) {
      setWalletAddress(storedWalletAddress);
    }
  }, []);
 */

  const handleDisconnect = () => {
    sessionStorage.removeItem("walletAddress");
    //setWalletAddress(null)
    navigate("/"); // Redirect to home page
  };

  return (
    <aside className="w-72 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl flex flex-col justify-between h-screen">
      {/* Sidebar Items */}
      <div>
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">{title}</h2>
        <ul className="mt-8">
          {items.map((item) => (
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

      {/* Disconnect Button */}
      <button
        onClick={handleDisconnect}
        className="block w-full text-left px-4 py-3 rounded-sm my-1 bg-red-600 text-stone-200 hover:bg-red-500"
      >
        Disconnect
      </button>
    </aside>
  );
}
