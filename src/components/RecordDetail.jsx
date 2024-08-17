// src/components/RecordDetail.jsx
import React from 'react';

function RecordDetail({ record, onBack }) {
  return (
    <div className="p-4 border border-gray-300 rounded">
      <h2 className="text-2xl font-bold mb-4">Medical Record Details</h2>
      <p><strong>ID:</strong> {record.id}</p>
      <p><strong>Date:</strong> {record.date}</p>
      <p><strong>Hospital:</strong> {record.hospital}</p>
      <p><strong>Doctor:</strong> {record.doctor}</p>
      <p><strong>Diagnosis:</strong> {record.diagnosis}</p>
      <p><strong>Treatment:</strong> {record.treatment}</p>
      <button 
        onClick={onBack} 
        className="mt-4 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
        Back to List
      </button>
    </div>
  );
}

export default RecordDetail;
