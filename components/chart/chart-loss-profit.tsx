import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Card, CardContent } from '../ui/card';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

export const dataLabaRugi: ChartData<'bar', number[], string> = {
  labels: ['Pendapatan', 'Beban'],
  datasets: [
    {
      label: 'Beban',
      data: [0, 110000000],
      backgroundColor: 'rgb(53, 162, 235)',
    },
    {
      label: 'Pendapatan',
      data: [160000000, 0],
      backgroundColor: 'rgb(255, 99, 132)',
    },
  ],
};

export default function ChartLossProfit() {
  return (
    <Card>
      <p className="p-3">Laba/Rugi</p>
      <CardContent>
        <Bar data={dataLabaRugi} />
      </CardContent>
    </Card>
  );
}
