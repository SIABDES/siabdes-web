'use client';

import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ChartIncome from '@/components/chart/chart-income';
import ChartExpense from '@/components/chart/chart-expense';
import ChartLossProfit from '@/components/chart/chart-loss-profit';
import ChartFinancialPosition from '@/components/chart/chart-financial-position';
import { ComboBox } from '@/components/ui/combobox';
import { Item } from '@radix-ui/react-select';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      label: 'Dataset 1',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: labels.map(() => ({ min: -1000, max: 1000 })),
    },
    {
      type: 'bar' as const,
      label: 'Dataset 2',
      backgroundColor: 'rgb(75, 192, 192)',
      data: labels.map(() => ({ min: -1000, max: 1000 })),
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar' as const,
      label: 'Dataset 3',
      backgroundColor: 'rgb(53, 162, 235)',
      data: labels.map(() => ({ min: -1000, max: 1000 })),
    },
  ],
};

export default function DistrictDashboard() {
  const [value, setValue] = React.useState<string | null>(null);

  const unit = [
    { label: 'Unit Dagang', value: 'Dagang' },
    { label: 'Unit Jasa', value: 'Jasa' },
    { label: 'Unit Industri', value: 'Industri' },
  ];

  const bumdes = [
    { label: 'BUMDes Cipagalo', value: 'Cipagalo' },
    { label: 'BUMDes Soreang', value: 'Soreang' },
    { label: 'BUMDes Lengkong', value: 'Lengkong' },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-left underline">
        Dashboard Kecamatan
      </h1>
      <div className="grid grid-cols-3 gap-9 mt-9 mb-9">
        <ChartIncome />
        <ChartExpense />
        <ChartLossProfit />
      </div>

      <div className="grid grid-cols-9 gap-6 pb-3">
        <ComboBox
          items={unit}
          setValue={setValue}
          placeholder="Cari nama unit..."
          triggerText="Pilih Unit"
          className="col-span-2"
        />
        <ComboBox
          items={bumdes}
          setValue={setValue}
          placeholder="Cari nama BUMDes..."
          triggerText="Pilih BUMDes"
          className="col-span-2"
        />
      </div>

      <div className="grid grid-cols-3 gap-9 mt-3 mb-6">
        <Card>
          <CardContent>
            <p className="p-3">Pendapatan</p>
            <p className="ml-9 text-center font-bold text-2xl">
              Rp 175.000.000
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="p-3">Beban</p>
            <p className="ml-9 text-center font-semibold text-2xl">
              Rp 125.000.000
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="p-3">Laba/Rugi</p>
            <p className="ml-9 text-center font-semibold text-2xl">
              Rp 50.000.000
            </p>
          </CardContent>
        </Card>
      </div>

      <ChartFinancialPosition />
    </>
  );
}
