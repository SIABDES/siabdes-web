'use client';

import React from 'react';
import Layout from '@/components/layout/layout';
import Table from '@/components/table/table';
import { Button } from '@/components/ui/button';
import { Combobox } from '@/components/ui/combobox';

export default function Ledger() {
  const tableHeaders = [
    'No',
    'Tanggal',
    'Keterangan',
    'Debit',
    'Kredit',
    'Saldo',
  ];
  const tableData = [
    {
      No: '1',
      Tanggal: '17 Agustus 2023',
      Keterangan: 'Membeli peralatan kantor',
      Debit: '20000',
      Kredit: '20000',
      Saldo: '20000',
    },
    {
      No: '2',
      Tanggal: '26 agustus 2023',
      Keterangan: 'Membeli rumah untuk orang tua di kampung',
      Debit: '40000',
      Kredit: '40000',
      Saldo: '40000',
    },
    {
      No: '3',
      Tanggal: '16 september 2023',
      Keterangan: 'Membeli rumah untuk kucing',
      Debit: '30000',
      Kredit: '30000',
      Saldo: '20000',
    },
    {
      No: '4',
      Tanggal: '20 oktober 2023',
      Keterangan: 'Membeli makanan untuk kucing',
      Debit: '80000',
      Kredit: '80000',
      Saldo: '20000',
    },
  ];

  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold mb-4 text-center">Buku Besar</h1>
        <Combobox />
        <Table headers={tableHeaders} data={tableData} />
      </div>
    </Layout>
  );
}
