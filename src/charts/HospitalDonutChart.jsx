/* eslint-disable react/prop-types */
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
// import patientData from '../data/patientData';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const HospitalDonutChart = ({data}) => {
    const hospitalCounts = data.reduce((acc, patient) => {
        acc[patient.Hospital] = (acc[patient.Hospital] || 0) + 1;
        return acc;
    }, {});

    const chartData = {
        labels: Object.keys(hospitalCounts),
        datasets: [
            {
                label: 'Hospital Distribution',
                data: Object.values(hospitalCounts),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '50%', // This creates the donut hole
    };

    return (
        <div style={{ width: '400px', height: '400px' }}>
            <Doughnut data={chartData} options={options} />
        </div>
    );
};

export default HospitalDonutChart;
