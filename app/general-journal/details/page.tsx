'use client';

import Table from '@/components/table/table';
import Layout from '@/components/layout/layout';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import ConfirmationModal from '@/components/confirmation-modal';
import Link from 'next/link';

export default function Details() {
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [isDataDeleted, setDataDeleted] = useState(false);

  const handleDeleteButtonClick = () => {
    setConfirmationModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setDataDeleted(true);
    setConfirmationModalOpen(false);
  };

  const handleCancelDelete = () => {
    setConfirmationModalOpen(false);
  };
  const tableHeaders = ['Noref', 'Nama Akun', 'Debit', 'Kredit'];
  const tableData = [
    {
      Noref: '12102121',
      'Nama Akun': 'Akun Toleweda',
      Debit: '20000',
      Kredit: '20000',
    },
    {
      Noref: '21233234',
      'Nama Akun': 'Akun Slamet Kecrit',
      Debit: '10000',
      Kredit: '10000',
    },
    {
      Noref: '32435678',
      'Nama Akun': 'Akun Punya Daryanah',
      Debit: '90000',
      Kredit: '90000',
    },
  ];

  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold mb-4">Detail Jurnal Umum</h1>
        <Table headers={tableHeaders} data={tableData} />
        <div className="flex justify-end">
          <Link href={'/general-journal/edit-journal'}>
            <Button className="mt-4">Ubah</Button>
          </Link>
          <Button
            className="mt-4 ml-4"
            onClick={handleDeleteButtonClick}
            disabled={isDataDeleted}
          >
            Hapus
          </Button>
          <Button className="mt-4 ml-4">Unduh Bukti Transaksi</Button>
        </div>
        <ConfirmationModal
          isOpen={isConfirmationModalOpen}
          onClose={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      </div>
    </Layout>
  );
}
