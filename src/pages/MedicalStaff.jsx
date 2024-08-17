// src/pages/MedicalStaff.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import CreateMR from './CreateMedRec';
import RequestMRAccess from './RequestMRAccess';
import ViewMR from './ViewMedRecOthers';

function MedicalStaff() {
  const items = [
    { to: 'create-mr', label: 'Create MR' },
    { to: 'request-mr-access', label: 'Request MR Access' },
    { to: 'view-mr', label: 'View MR' },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar items={items} title="Medical Staff Menu" />
      <div className="flex-grow p-8">
        <Routes>
          <Route 
            path="/" 
            element={
              <div>Welcome to the Medical Staff Section. Please select an option from the sidebar.</div>
            } 
          />
          <Route path="create-mr" element={<CreateMR />} />
          <Route path="request-mr-access" element={<RequestMRAccess />} />
          <Route path="view-mr" element={<ViewMR />} />
        </Routes>
      </div>
    </div>
  );
}

export default MedicalStaff;
