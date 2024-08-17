// src/pages/ViewMedRecPatient.jsx
import React, { useState } from 'react';
import Table from '../components/Table';
import RecordDetail from '../components/RecordDetail';

const medicalRecordsList = [
  {
    id: "1",
    date: "16/08/2024",
    hospital: "Columbia Asia Hospital",
    doctor: "Dr. Tan",
    diagnosis: "Cancer",
    treatment: "Thoughts and prayers",
  },
  {
    id: "2",
    date: "16/08/2024",
    hospital: "Columbia Asia Hospital",
    doctor: "Dr. Tan",
    diagnosis: "Cancer",
    treatment: "Thoughts and prayers",
  }
];

function ViewMedRecPatient() {
  const [selectedRecord, setSelectedRecord] = useState(null);

  const handleView = (record) => {
    setSelectedRecord(record); // Set the selected record for viewing
  };

  const handleBack = () => {
    setSelectedRecord(null); // Go back to the list view
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Patient - View Medical Records</h1>

      {/* Conditionally render either the Table or the RecordDetail based on the selectedRecord state */}
      {!selectedRecord ? (
        <Table medicalRecordsList={medicalRecordsList} handleView={handleView} />
      ) : (
        <RecordDetail record={selectedRecord} onBack={handleBack} />
      )}
    </div>
  );
}

export default ViewMedRecPatient;
