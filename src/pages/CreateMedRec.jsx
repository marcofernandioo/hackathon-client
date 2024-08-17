// src/pages/CreateMR.jsx
import React from 'react';

function CreateMR() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Medical Staff - Create MR</h1>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Hospital" className="border p-2" />
          <input type="text" placeholder="Doctor In Charge" className="border p-2" />
          <input type="text" placeholder="Treatment" className="border p-2" />
          <input type="text" placeholder="Date" className="border p-2" />
        </div>
        <textarea placeholder="Diagnosis" className="border p-2 mt-4 w-full"></textarea>
        <input type="text" placeholder="Sender Public Key" className="border p-2 mt-4 w-full" />
        <input type="text" placeholder="Private Key Signature" className="border p-2 mt-4 w-full" />
        <button type="submit" className="mt-4 bg-gray-300 p-2">Create Medical Record</button>
      </form>
    </div>
  );
}

export default CreateMR;
