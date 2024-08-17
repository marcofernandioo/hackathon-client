// src/pages/RequestMRAccess.jsx
import React from 'react';

function RequestMRAccess() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Request MR Access</h1>
      <form>
        <input type="text" placeholder="Patient Address" className="border p-2 w-full" />
        <button type="submit" className="mt-4 bg-gray-300 p-2">Request Access</button>
      </form>
    </div>
  );
}

export default RequestMRAccess;