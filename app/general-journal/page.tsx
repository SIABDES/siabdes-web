'use client';

import React from 'react';
import Layout from '@/components/layout/layout';
import ClickableTable from '@/components/table/clickable-table';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function GeneralJournal() {
  const router = useRouter();

  const handleRowClick = (journal_id: any) => {
    router.push(`/general-journal/details`);
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
      <div>
        <h1 className="text-2xl font-bold mb-4 text-center ">Jurnal Umum</h1>
        <Link href="/general-journal/add-journal">
          <Button className="mb-4">Tambah</Button>
        </Link>
        <ClickableTable
          headers={tableHeaders}
          data={tableData}
          onRowClick={handleRowClick}
        />
      </div>
    </Layout>
  );
}
