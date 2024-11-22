import React from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Charts = ({ trips }) => {
  const data = {
    labels: trips.map((trip) => `Trip ${trip.id}`),
    datasets: [
      {
        label: 'Fare Amount (USD)',
        data: trips.map((trip) => trip.fare),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div style={{ height: '300px', width: '100%' }}>
      <Bar data={data} />
    </div>
  );
};

export default Charts;
