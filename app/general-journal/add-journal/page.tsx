'use client';

import React, { useState } from 'react';
import Layout from '@/components/layout/layout';
import AddGeneralJournal from '@/components/add-edit-journal';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import { useGetAccounts } from '@/hooks/account/useGetAccounts';

export default function AddJournal() {
  // const namaAkunsData = ['Akun 1', 'Akun 2', 'Akun 3'];

  // const [selectedAccountId, setSelectedAccountId] = useState<number>(1);
  const getAccounts = useGetAccounts();

  const session = useSession();
  const [formData, setFormData] = useState({
    jenis_transaksi: '',
    tanggal: '',
    bukti_transaksi: '',
    jumlah: '',
    nomor_akun: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8080/api/v1/general_journals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.data?.backendTokens.accessToken}`,
        },
        body: JSON.stringify({
          description: formData.jenis_transaksi,
          occured_at: formData.tanggal,
          evidence: formData.bukti_transaksi,
          data_transactions: [
            {
              amount: formData.jumlah,
              is_credit: false,
              account_ref: formData.nomor_akun,
            },
            {
              amount: formData.jumlah,
              is_credit: true,
              account_ref: formData.nomor_akun,
            },
          ],
        }),
      });

      if (res.ok) {
        const result = await res.json();
        console.log('Transaction created successfully:', result);
      } else {
        console.error('Failed to add journal');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <Layout>
      <div className="container ">
        <h1 className="text-2xl font-bold mb-5 text-center">
          Tambah Jurnal Umum
        </h1>
        <div className="mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="mb-4">
              <label
                htmlFor="jenis_transaksi"
                className="block text-sm font-medium text-black"
              >
                Jenis Transaksi
              </label>
              <input
                type="text"
                placeholder="Masukkan Jenis Transaksi"
                name="jenis_transaksi"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="tanggal"
                className="block text-sm font-medium text-black"
              >
                Tanggal Transaksi
              </label>
              <input
                type="date"
                placeholder="DD/MM/YYYY"
                name="tanggal"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="bukti_transaksi"
                className="block text-sm font-medium text-black"
              >
                Upload Bukti Transaksi
              </label>
              <input
                type="file"
                placeholder="Masukkan Bukti Transaksi"
                name="Bukti_transaksi"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
          </div>
        </div>
        <AddGeneralJournal />
        <form onSubmit={handleSubmit}>
          <div className="my-10 ml-8 space-x-8">
            <Button type="button" className="btn btn-success">
              Tambah Akun
            </Button>
            <Button type="button" className="btn btn-danger">
              Hapus Akun
            </Button>
            <Button type="submit" className="btn btn-primary">
              Selesai
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
