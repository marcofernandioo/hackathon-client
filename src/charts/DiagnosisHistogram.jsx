/* eslint-disable react/prop-types */
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import patientData from '../data/patientData';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DiagnosisHistogram = ({data}) => {
    // Grouping patients by diagnosis
    const diagnosisCounts = data.reduce((acc, patient) => {
        const diagnosis = patient.Diagnosis;
        acc[diagnosis] = (acc[diagnosis] || 0) + 1;
        return acc;
    }, {});

    const chartData = {
        labels: Object.keys(diagnosisCounts),
        datasets: [
            {
                label: 'Diagnosis Frequency',
                data: Object.values(diagnosisCounts),
                backgroundColor: 'rgba(255, 99, 132, 0.8)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div style={{ width: '600px', height: '400px' }}>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default DiagnosisHistogram;
