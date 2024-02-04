'use client';

import ChartExpense from '@/components/chart/chart-expense';
import ChartFinancialPosition from '@/components/chart/chart-financial-position';
import ChartIncome from '@/components/chart/chart-income';
import ChartLossProfit from '@/components/chart/chart-loss-profit';
import DataBumdes from '@/components/pages/regency/data-bumdes';
import { Card, CardContent } from '@/components/ui/card';
import { ComboBox } from '@/components/ui/combobox';
import React from 'react';

export default function RegencyDashboard() {
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
      <p>Dashboard Kabupaten</p>
      <div className="grid grid-cols-3 gap-9 mt-9 mb-6">
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
              Rp 175.000.000
            </p>
          </CardContent>
        </Card>
        <Card>
          <p className="p-3">Laba/Rugi</p>
          <CardContent>RP 5.000.000</CardContent>
        </Card>
      </div>

      <ChartFinancialPosition />
      <DataBumdes />
    </>
  );
}
