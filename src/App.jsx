// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Patients from './pages/Patients';
import MedicalStaff from './pages/MedicalStaff';
import ExternalParty from './pages/ExternalParty';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients/*" element={<Patients />} />
        <Route path="/medical-staff/*" element={<MedicalStaff />} />
        <Route path="/external-party/*" element={<ExternalParty />} />
      </Routes>
    </Router>
  );
}

export default App;
