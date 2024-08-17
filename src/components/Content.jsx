// src/components/Content.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ViewMedRecPatient from '../pages/ViewMedRecPatient';
import ApproveRequests from '../pages/ApproveRequests';

function Content() {
  return (
    <div className="w-3/4 p-8">
      <Routes>
        <Route path="medical-records" element={<ViewMedRecPatient />} />
        <Route path="approve-requests" element={<ApproveRequests />} />
      </Routes>
    </div>
  );
}

export default Content;
