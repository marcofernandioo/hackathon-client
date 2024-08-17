// src/components/SuccessModal.jsx
import React from 'react';

function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Request Sent</h2>
        <p>Your request for medical record creation has been successfully sent to the patient for approval.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
