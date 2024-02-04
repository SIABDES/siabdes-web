import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Card, CardContent } from '../ui/card';

ChartJS.register(ArcElement, Tooltip, Legend);

export const dataPendapatan = {
  labels: ['Parkir', 'Tiket', 'Toilet'],
  datasets: [
    {
      label: 'Pendapatan', //# of Votes
      data: [40000000, 90000000, 40000000],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(53, 162, 235)',
      ],
    },
  ],
};

export default function ChartIncome() {
  return (
    <Card>
      <p className="p-3">Pendapatan</p>
      <CardContent>
        <Doughnut
          data={dataPendapatan}
          className="w-full h-full"
          options={{ maintainAspectRatio: false }}
        />
      </CardContent>
    </Card>
  );
}
