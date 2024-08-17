import React, { useState } from 'react';
import SuccessModal from '../components/SuccessModal';

function CreateMR() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle the form submission (sending request, etc.)
    // For now, we'll just open the modal after submission
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Redirect or any other logic here, if needed
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Medical Staff - Create MR</h2>
      <form onSubmit={handleSubmit}>
        {/* Your form fields */}
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Hospital" className="p-2 border" />
          <input type="text" placeholder="Doctor In Charge" className="p-2 border" />
          <input type="text" placeholder="Treatment" className="p-2 border" />
          <input type="text" placeholder="Date" className="p-2 border" />
          <textarea placeholder="Diagnosis" className="col-span-2 p-2 border"></textarea>
          <input type="text" placeholder="Sender Public Key" className="col-span-2 p-2 border" />
          <input type="text" placeholder="Private Key Signature" className="col-span-2 p-2 border" />
        </div>
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Create Medical Record
        </button>
      </form>

      {/* Modal */}
      <SuccessModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default CreateMR;
