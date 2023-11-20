'use client';

import Layout from '@/components/layout/layout';
import React from 'react';
import { useRouter } from 'next/navigation';
import ClickableTable from '@/components/table/clickable-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AdjustingEntry() {
  const router = useRouter();

  const handleRowClick = (journal_id: any) => {
    router.push(`/working-trial-balance/adjusting-entry/details`);
  };

  const tableHeaders = ['No', 'Tanggal Transaksi', 'Deskripsi Transaksi'];
  const tableData = [
    {
      No: '1',
      'Tanggal Transaksi': '25 Agustus 2022',
      'Deskripsi Transaksi': 'Membeli peralatan kantor',
    },
    {
      No: '2',
      'Tanggal Transaksi': '26 agustus 2022',
      'Deskripsi Transaksi': 'Membeli rumah untuk orang tua di kampung',
    },
  ];
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 text-center">
        Jurnal Penyesuaian
      </h1>
      <Link href={'/working-trial-balance/adjusting-entry/add-journal'}>
        <Button className="mb-4">Tambah Jurnal Penyesuaian</Button>
      </Link>
      <ClickableTable
        headers={tableHeaders}
        data={tableData}
        onRowClick={handleRowClick}
      />
    </Layout>
  );
}
