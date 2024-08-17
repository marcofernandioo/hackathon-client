import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import RequestMRAccess from './RequestMRAccess';
import ViewMR from './ViewMedRecOthers';
import PatientAnalytics from './PatientAnalytics'; // Import the new PatientAnalytics page

function ExternalParty() {
  const items = [
    { to: 'request-mr-access', label: 'Request MR Access' },
    { to: 'view-mr', label: 'View MR' },
    { to: 'patient-analytics', label: 'Patient Analytics' }, // Add this new item for analytics
  ];

  

  return (
    <div className="flex min-h-screen">
      <Sidebar items={items} title="External Party Menu" />
      <div className="flex-grow p-8">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                Welcome to the External Party Section. Please select an option from the sidebar.
              </div>
            }
          />
          <Route path="request-mr-access" element={<RequestMRAccess  />} />
          <Route path="view-mr" element={<ViewMR />} />
          <Route path="patient-analytics" element={<PatientAnalytics />} /> {/* Add this route */}
        </Routes>
      </div>
    </div>
  );
}

export default ExternalParty;
