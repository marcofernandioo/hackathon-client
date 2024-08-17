// src/pages/ViewMR.jsx
import React from 'react';

function ViewMedRecOthers() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">View MR</h1>
      <form>
        <input type="text" placeholder="Sender Public Key" className="border p-2 w-full" />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <input type="text" placeholder="Hospital" className="border p-2" />
          <input type="text" placeholder="Doctor In Charge" className="border p-2" />
          <input type="text" placeholder="Treatment" className="border p-2" />
          <input type="text" placeholder="Date" className="border p-2" />
        </div>
        <textarea placeholder="Diagnosis" className="border p-2 mt-4 w-full"></textarea>
        <button type="submit" className="mt-4 bg-gray-300 p-2">Done</button>
      </form>
    </div>
  );
}

export default ViewMedRecOthers;
