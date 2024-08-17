// src/pages/ApproveMRRequest.jsx
import React, { useState } from 'react';

const dummyRequests = [
  { id: 1, date: '2024-08-16', hospital: 'Columbia Asia', doctor: 'Dr. Tan', diagnosis: 'Cancer' },
  { id: 2, date: '2024-08-17', hospital: 'Columbia Asia', doctor: 'Dr. Wong', diagnosis: 'Flu' },
];

function ApproveMRRequest() {
  const [requests, setRequests] = useState(dummyRequests);

  const handleApprove = (id) => {
    // Logic for approving the request
    setRequests(requests.filter(request => request.id !== id));
  };

  const handleReject = (id) => {
    // Logic for rejecting the request
    setRequests(requests.filter(request => request.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Approve Medical Record Requests</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Hospital</th>
            <th className="border px-4 py-2">Doctor</th>
            <th className="border px-4 py-2">Diagnosis</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request.id}>
              <td className="border px-4 py-2">{request.id}</td>
              <td className="border px-4 py-2">{request.date}</td>
              <td className="border px-4 py-2">{request.hospital}</td>
              <td className="border px-4 py-2">{request.doctor}</td>
              <td className="border px-4 py-2">{request.diagnosis}</td>
              <td className="border px-4 py-2">
                <button
                  className="mr-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  onClick={() => handleApprove(request.id)}
                >
                  Approve
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => handleReject(request.id)}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApproveMRRequest;
