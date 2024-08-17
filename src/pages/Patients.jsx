import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ViewMedRecPatient from './ViewMedRecPatient';
import ApproveRequests from './ApproveRequests';

function Patients() {
  const items = [
    { to: 'medical-records', label: 'View Medical Records' },
    { to: 'approve-requests', label: 'Approve Requests' },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar items={items} title="Patient Menu" />
      <div className="flex-grow p-8">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                Welcome to the Patients Section. Please select an option from the sidebar.
              </div>
            }
          />
          <Route path="medical-records" element={<ViewMedRecPatient />} />
          <Route path="approve-requests" element={<ApproveRequests />} />
        </Routes>
      </div>
    </div>
  );
}

export default Patients;
