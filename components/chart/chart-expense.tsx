import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Card, CardContent } from '../ui/card';

ChartJS.register(ArcElement, Tooltip, Legend);

export const dataBeban = {
  labels: ['Listrik', 'Air', 'Gaji', 'Bunga Bank', 'Iklan'],
  datasets: [
    {
      label: 'Beban', //# of Votes
      data: [20000000, 25000000, 35000000, 10000000, 20000000],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(53, 162, 235)',
        'rgb(25, 90, 132)',
        'rgb(210, 10, 80)',
      ],
    },
  ],
};

export default function ChartExpense() {
  return (
    <Card>
      <p className="p-3">Beban</p>
      <CardContent>
        <Doughnut
          data={dataBeban}
          className="w-full h-full"
          options={{ maintainAspectRatio: false }}
        />
      </CardContent>
    </Card>
  );
}
