import React from 'react';

function ApproveRequests() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Patient - Approve Request</h1>
      <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Organization</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Add rows here */}
          <tr>
            <td className="border px-4 py-2">2024-08-01</td>
            <td className="border px-4 py-2">Organization XYZ</td>
            <td className="border px-4 py-2">
              <button className="bg-gray-300 px-4 py-1 mr-2">Approve</button>
              <button className="bg-gray-300 px-4 py-1">Reject</button>
            </td>
          </tr>
          {/* Additional rows can be added as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default ApproveRequests;
