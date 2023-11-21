// Import dependencies
'use client';
import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/layout';
import Table from '@/components/table/table';
import { Button } from '@/components/ui/button';
import ConfirmationModal from '@/components/confirmation-modal';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface Transaction {
  id: string;
  Noref: string;
  'Nama Akun': string;
  Debit: number;
  Kredit: number;
}

interface JournalDetails {
  id: string;
  description: string;
  occuredAt: string;
  evidence: string;
  data_transactions: [
    {
      id: string;
      account_ref: string;
      account_name: string;
      amount: number;
      is_credit: boolean;
    }
  ];
}

export default function Details({
  params,
}: {
  params: { journal_id: string };
}) {
  const { data: session } = useSession();
  const [journalDetails, setJournalDetails] = useState<
    JournalDetails | undefined
  >();
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [isDataDeleted, setDataDeleted] = useState(false);

  const { journal_id } = params;

  useEffect(() => {
    if (session) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://localhost:8080/api/v1/general_journals/${journal_id}`,
            {
              headers: {
                Authorization: `Bearer ${session.backendTokens.accessToken}`,
                'Content-Type': 'application/json',
              },
            }
          );

          if (response.ok) {
            const result = await response.json();
            const details = result.data.details;
            setJournalDetails(details);
          } else {
            console.error('Gagal mengambil data dari API');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

      fetchData();
    }
  }, [session]);

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

  // const transactionData: Transaction[] = journalDetails?.data_transactions.map(
  //   (transaction) => ({
  //     id: transaction.id,
  //     Noref: transaction.account_ref,
  //     'Nama Akun': transaction.account_name,
  //     Debit: transaction.is_credit ? '' : transaction.amount,
  //     Kredit: transaction.is_credit ? transaction.amount : '',
  //   })
  // );

  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold mb-4">Detail Jurnal Umum</h1>
        {/* <>
          <p>ID: {journalDetails?.id}</p>
          <p>Deskripsi: {journalDetails?.description}</p>
          <p>
            Tanggal Transaksi:{' '}
            {isNaN(Date.parse(journalDetails?.occuredAt))
              ? 'Invalid Date'
              : new Date(journalDetails?.occuredAt).toLocaleDateString()}
          </p>
        </> */}

        <Table
          headers={tableHeaders}
          data={journalDetails?.data_transactions ?? []}
        />
        <div className="flex justify-end">
          <Link href="/general-journal/edit-journal">
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
