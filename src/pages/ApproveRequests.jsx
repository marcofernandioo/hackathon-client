/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

function ApproveRequests() {
  const [mr, setMr] = useState(null);

  async function getMR() {
    fetch('http://localhost:8000/mr/one')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setMr(JSON.parse(data));
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }

  function handleApprove() {
    fetch('http://localhost:8000/mr/create', {
      method: 'POST', // Specify the request method
      headers: {
        'Content-Type': 'application/json' // Indicate that you're sending JSON data
      },
      body: JSON.stringify(mr)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setMr(null);
        alert("Approved!")
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }

  useEffect(() => {
    getMR();
  }, [])

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Patient - Approve Request</h1>
      <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Hospital</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {mr && mr.visitDate ? (
            <tr>
              <td className="border px-4 py-2">{mr.visitDate || ''}</td>
              <td className="border px-4 py-2">{mr.hospital || ''}</td>
              <td className="border px-4 py-2">
                <button className="bg-gray-300 px-4 py-1 mr-2" onClick={handleApprove}>Approve</button>
              </td>
            </tr>
          ) : (
            <tr>
              <td colSpan="3" className="border px-4 py-2 text-center">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ApproveRequests;
