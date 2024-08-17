// src/components/Table.jsx
import React from 'react';

function Table({ medicalRecordsList, handleView }) {
  return (
    <table className="table-auto w-full border border-gray-300">
      <thead>
        <tr>
          <th className="border px-4 py-2">ID</th>
          <th className="border px-4 py-2">Date</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {medicalRecordsList.map(record => (
          <tr key={record.id}>
            <td className="border px-4 py-2">{record.id}</td>
            <td className="border px-4 py-2">{record.date}</td>
            <td className="border px-4 py-2">
              <button 
                onClick={() => handleView(record)} 
                className="bg-gray-300 px-4 py-1">
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
