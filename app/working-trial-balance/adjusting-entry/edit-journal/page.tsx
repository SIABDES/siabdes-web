import React from 'react';
import Layout from '@/components/layout/layout';
import EditAdjustingEntryJournal from '@/components/add-edit-journal';
import { Button } from '@/components/ui/button';

export default function EditJournal() {
  const namaAkunsData = ['Akun 1', 'Akun 2', 'Akun 3'];
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 text-center">
        Ubah Jurnal Penyesuaian
      </h1>
      <div className="container mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>
        <EditAdjustingEntryJournal nama_akuns={namaAkunsData} />
        <div className="my-10 space-x-8">
          <Button type="button" className="btn btn-success">
            Tambah Akun
          </Button>
          <Button type="button" className="btn btn-danger">
            Hapus Akun
          </Button>
          <Button type="submit" className="btn btn-primary">
            Simpan
          </Button>
        </div>
      </div>
    </Layout>
  );
}
