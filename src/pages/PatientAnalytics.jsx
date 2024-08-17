import BMIScatterPlot from '../charts/BMIScatterPlot';
import HospitalDonutChart from '../charts/HospitalDonutChart';
import DiagnosisHistogram from '../charts/DiagnosisHistogram';
import { useEffect, useState } from 'react';

const PatientAnalytics = () => {
    const [patientData, setPatientData] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    async function getAnalytics() {
        try {
            const res = await fetch('http://localhost:8000/statistics');
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            const data = await res.json(); // Parse the JSON data
            setPatientData(data);
            setLoading(false); // Set loading to false after data is fetched
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getAnalytics();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center space-y-10">
            <h1 className="text-3xl font-bold mb-6">Patient Analytics</h1>

            {loading ? ( // Conditionally render based on loading state
                <p>Loading data...</p>
            ) : (
                <>
                    <div className="flex items-center justify-center space-x-10">
                        {/* BMI Scatter Plot */}
                        <div className="flex-shrink-0">
                            <BMIScatterPlot data={patientData} />
                        </div>
                        {/* Hospital Distribution Donut Chart */}
                        <div className="flex-shrink-0">
                            <HospitalDonutChart data={patientData} />
                        </div>
                    </div>

                    {/* Diagnosis Frequency Histogram */}
                    <div className="w-full flex justify-center">
                        <DiagnosisHistogram data={patientData} />
                    </div>
                </>
            )}
        </div>
    );
};

export default PatientAnalytics;
