import  { useState } from 'react';
import SuccessModal from '../components/SuccessModal';
 
function CreateMR() {
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  // State for each input field
  const [formData, setFormData] = useState({
    patientID: '',
    visitDate: '',
    hospital: '',
    doctorName: '',
    diagnosis: '',
    allergies: '',
    currentMedications: '',
    bloodPressure: '',
    heartRate: '',
    weightKg: '',
    heightCm: '',
    age: '',
    bmi: ''
  });
 
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form Submitted', formData);
   
    const response = await fetch('http://localhost:8000/mr/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result)
 
    setIsModalOpen(true);
  };
 
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
 
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Medical Staff - Create MR</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="patientID"
            placeholder="Patient ID"
            className="p-2 border"
            value={formData.patientID}
            onChange={handleChange}
          />
          <input
            type="date"
            name="visitDate"
            placeholder="Visit Date"
            className="p-2 border"
            value={formData.visitDate}
            onChange={handleChange}
          />
          <input
            type="text"
            name="hospital"
            placeholder="Hospital"
            className="p-2 border"
            value={formData.hospital}
            onChange={handleChange}
          />
          <input
            type="text"
            name="doctorName"
            placeholder="Doctor Name"
            className="p-2 border"
            value={formData.doctorName}
            onChange={handleChange}
          />
          <textarea
            name="diagnosis"
            placeholder="Diagnosis"
            className="col-span-2 p-2 border"
            value={formData.diagnosis}
            onChange={handleChange}
          ></textarea>
          <input
            type="text"
            name="allergies"
            placeholder="Allergies"
            className="p-2 border"
            value={formData.allergies}
            onChange={handleChange}
          />
          <input
            type="text"
            name="currentMedications"
            placeholder="Current Medications"
            className="p-2 border"
            value={formData.currentMedications}
            onChange={handleChange}
          />
          <input
            type="text"
            name="bloodPressure"
            placeholder="Blood Pressure"
            className="p-2 border"
            value={formData.bloodPressure}
            onChange={handleChange}
          />
          <input
            type="number"
            name="heartRate"
            placeholder="Heart Rate"
            className="p-2 border"
            value={formData.heartRate}
            onChange={handleChange}
          />
          <input
            type="number"
            name="weightKg"
            placeholder="Weight (kg)"
            className="p-2 border"
            value={formData.weightKg}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            className="p-2 border"
            value={formData.age}
            onChange={handleChange}
          />
          <input
            type="number"
            name="heightCm"
            placeholder="Height (cm)"
            className="p-2 border"
            value={formData.heightCm}
            onChange={handleChange}
          />
          <input
            type="number"
            name="bmi"
            placeholder="BMI"
            className="p-2 border"
            value={formData.bmi}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Create Medical Record
        </button>
      </form>
 
      {/* Success Modal */}
      <SuccessModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
 
export default CreateMR;