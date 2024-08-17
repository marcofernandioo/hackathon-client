/* eslint-disable react/prop-types */
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, LinearScale, CategoryScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, PointElement, LinearScale, CategoryScale);

const BMIScatterPlot = ({ data }) => {
    const chartData = {
        datasets: [
            {
                label: 'Patient Data (BMI vs Age)',
                data: data.map((patient) => ({
                    x: patient.BMI,
                    y: patient.Age,
                })),
                backgroundColor: 'rgba(54, 162, 235, 0.8)', // Blue fill color for dots
                borderColor: 'rgba(54, 162, 235, 1)', // Blue border color for dots
                pointRadius: 3, // Smaller point size
                pointHoverRadius: 5, // Slightly larger on hover
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'BMI',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Age',
                },
            },
        },
    };

    return (
        <div style={{ width: '600px', height: '400px' }}>
            <Scatter data={chartData} options={options} />
        </div>
    );
};

export default BMIScatterPlot;
