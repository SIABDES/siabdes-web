import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker, fakerJA } from '@faker-js/faker';
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
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['Aset', 'Utang', 'Modal'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Bumdes Cipagalo',
      data: labels.map(() =>
        fakerJA.datatype.number({ min: -1000, max: 1000 })
      ),
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',
    },
    {
      label: 'Bumdes Ciparangan',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 0',
    },
    {
      label: 'Bumdes Kalisusu',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(53, 162, 235)',
      stack: 'Stack 0',
    },
    {
      label: 'Bumdes Balamoa',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(123, 78, 235)',
      stack: 'Stack 0',
    },
    {
      label: 'Bumdes Kalinyamat',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(80, 30, 235)',
      stack: 'Stack 0',
    },
    {
      label: 'Bumdes Cipagalo',
      data: labels.map(() =>
        fakerJA.datatype.number({ min: -1000, max: 1000 })
      ),
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',
    },
    {
      label: 'Bumdes Ciparangan',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 0',
    },
    {
      label: 'Bumdes Kalisusu',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(53, 162, 235)',
      stack: 'Stack 0',
    },
    {
      label: 'Bumdes Balamoa',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(123, 78, 235)',
      stack: 'Stack 0',
    },
    {
      label: 'Bumdes Kalinyamat',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(80, 30, 235)',
      stack: 'Stack 0',
    },
    {
      label: 'Bumdes Cipagalo',
      data: labels.map(() =>
        fakerJA.datatype.number({ min: -1000, max: 1000 })
      ),
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',
    },
    {
      label: 'Bumdes Ciparangan',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 0',
    },
    {
      label: 'Bumdes Kalisusu',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(53, 162, 235)',
      stack: 'Stack 0',
    },
    {
      label: 'Bumdes Balamoa',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(123, 78, 235)',
      stack: 'Stack 0',
    },
    {
      label: 'Bumdes Kalinyamat',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(80, 30, 235)',
      stack: 'Stack 0',
    },
  ],
};

export default function ChartFinancialPosition() {
  return (
    <Card>
      <p className="text-center mt-6 mb-3 font-semibold">Posisi Keuangan</p>
      <CardContent>
        <Bar
          options={options}
          data={data}
          width={30}
          height={9}
          // options={{ maintainAspectRatio: false }}
        />
      </CardContent>
    </Card>
  );
}
