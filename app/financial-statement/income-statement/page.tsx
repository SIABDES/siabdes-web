import React from 'react';
import Layout from '@/components/layout/layout';
import { TableComponent } from '@/components/table/table';
import TableFinancialStatement from '@/components/table/table-financial-statement';
import { Button } from '@/components/ui/button';

export default function LabaRugi() {
  const tableTitle = [
    {
      unit: 'Jasa',
      title: 'Laba Rugi',
      range1: '1 Januari 2022',
      range2: '31 Desember 2023',
    },
  ];
  const tableHeaders = ['KodeRekening', 'NamaAkun', 'T2023', 'T2022'];
  const tableData = [
    {
      KodeRekening: '4101',
      NamaAkun: 'Pendapatan Tiket Masuk Perseorangan',
      T2023: '0',
      T2022: '0',
    },
    {
      KodeRekening: '4102',
      NamaAkun: 'Pendapatan Tiket Masuk Rombongan',
      T2023: '0',
      T2022: '0',
    },
    {
      KodeRekening: '4199',
      NamaAkun: 'Pendapatan Tiket Lainnya',
      T2023: '0',
      T2022: '0',
    },
    {
      KodeRekening: '4301',
      NamaAkun: 'Pendapatan Komisi',
      T2023: '0',
      T2022: '0',
    },
    {
      KodeRekening: '4302',
      NamaAkun: 'Pendapatan Parkir',
      T2023: '0',
      T2022: '0',
    },
    {
      KodeRekening: '4303',
      NamaAkun: 'Pendapatan Toilet',
      T2023: '0',
      T2022: '0',
    },
    {
      KodeRekening: '4304',
      NamaAkun: 'Pendapatan Sewa',
      T2023: '0',
      T2022: '0',
    },
    {
      KodeRekening: '-',
      NamaAkun: 'JUMLAH PENDAPATAN',
      T2023: '0',
      T2022: '0',
    },
    {
      KodeRekening: '-',
      NamaAkun: 'JUMLAH BEBAN',
      T2023: '0',
      T2022: '0',
    },
    {
      KodeRekening: '-',
      NamaAkun: 'LABA/RUGI BERSIH',
      T2023: '0',
      T2022: '0',
    },
  ];
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 text-center">
        Laporan Keuangan Laba Rugi
      </h1>
      <Button className="mb-4">Rangeeeeee</Button>
      <TableFinancialStatement data={tableTitle} />
      <TableComponent data={tableData} />
    </Layout>
  );
}
