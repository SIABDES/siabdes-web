import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Card, CardContent } from '../ui/card';

ChartJS.register(ArcElement, Tooltip, Legend);

export const dataBeban = {
  labels: [
    'Seragam',
    'Gaji',
    'Perbaikan & Pemeliharaan',
    'Listrik',
    'Air',
    'Sewa - Kendaraan',
    'Penyusutan - Peralatan Kantor',
  ],
  datasets: [
    {
      label: 'Beban', //# of Votes
      data: [2650000, 8500000, 5000000, 500000, 350000, 500000, 200000],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(53, 162, 235)',
        'rgb(25, 90, 132)',
        'rgb(210, 10, 80)',
        'rgb(95, 120, 60)',
        'rgb(20, 119, 90)',
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
