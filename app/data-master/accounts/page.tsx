import React from 'react';
import Layout from '@/components/layout/layout';
import { TableComponent } from '@/components/table/table';

export default function ListAccount() {
  const tableHeaders = ['No', 'Nama Akun', 'No Ref', 'Saldo Umum', 'Kategori'];
  const tableData = [
    {
      No: '1',
      'Nama Akun': 'Kas',
      'No Ref': '1-1001',
      'Saldo Umum': 'Debit',
      Kategori: 'ASET',
    },
    {
      No: '2',
      'Nama Akun': 'Rekening Bank',
      'No Ref': '1-1002',
      'Saldo Umum': 'Debit',
      Kategori: 'ASET',
    },
    {
      No: '3',
      'Nama Akun': 'Giro',
      'No Ref': '1-1003',
      'Saldo Umum': 'Debit',
      Kategori: 'ASET',
    },
    {
      No: '4',
      'Nama Akun': 'Aset Tetap - Bangunan',
      'No Ref': '1-2002',
      'Saldo Umum': 'Debit',
      Kategori: 'ASET',
    },
    {
      No: '5',
      'Nama Akun': 'Akumulasi Penyusutan - Bangunan',
      'No Ref': '1-2012',
      'Saldo Umum': 'Kredit',
      Kategori: 'ASET',
    },
    {
      No: '6',
      'Nama Akun': 'Hak Merek Dagang',
      'No Ref': '1-3001',
      'Saldo Umum': 'Debit',
      Kategori: 'ASET',
    },
    {
      No: '7',
      'Nama Akun': 'Utang Usaha',
      'No Ref': '2-1001',
      'Saldo Umum': 'Kredit',
      Kategori: 'LIABILITAS',
    },
    {
      No: '8',
      'Nama Akun': 'Utang Lain Lain',
      'No Ref': '2-1002',
      'Saldo Umum': 'Kredit',
      Kategori: 'LIABILITAS',
    },
    {
      No: '9',
      'Nama Akun': 'Utang Gaji',
      'No Ref': '2-1003',
      'Saldo Umum': 'Kredit',
      Kategori: 'LIABILITAS',
    },
    {
      No: '10',
      'Nama Akun': 'Pendapatan Diterima Di Muka',
      'No Ref': '2-1004',
      'Saldo Umum': 'Kredit',
      Kategori: 'LIABILITAS',
    },
    {
      No: '11',
      'Nama Akun': 'Utang Konsinyasi',
      'No Ref': '2-1005',
      'Saldo Umum': 'Kredit',
      Kategori: 'LIABILITAS',
    },
    {
      No: '14',
      'Nama Akun': 'Penyertaan Modal Desa',
      'No Ref': '3-1001',
      'Saldo Umum': 'Kredit',
      Kategori: 'EKUITAS',
    },
    {
      No: '15',
      'Nama Akun': 'Cadangan',
      'No Ref': '3-1002',
      'Saldo Umum': 'Kredit',
      Kategori: 'EKUITAS',
    },
    {
      No: '16',
      'Nama Akun': 'Bagi Hasil PADes',
      'No Ref': '3-1012',
      'Saldo Umum': 'Debit',
      Kategori: 'EKUITAS',
    },
    {
      No: '17',
      'Nama Akun': 'Pendapatan Jasa',
      'No Ref': '4-1001',
      'Saldo Umum': 'Kredit',
      Kategori: 'PENDAPATAN',
    },
    {
      No: '18',
      'Nama Akun': 'Pendapatan Tiket',
      'No Ref': '4-1002',
      'Saldo Umum': 'Kredit',
      Kategori: 'PENDAPATAN',
    },
    {
      No: '19',
      'Nama Akun': 'Pendapatan Parkir',
      'No Ref': '4-2001',
      'Saldo Umum': 'Kredit',
      Kategori: 'PENDAPATAN',
    },
    {
      No: '20',
      'Nama Akun': 'Beban Iklan & Promosi',
      'No Ref': '6-1001',
      'Saldo Umum': 'Debit',
      Kategori: 'BEBAN',
    },
    {
      No: '21',
      'Nama Akun': 'Beban Komisi & Fee',
      'No Ref': '6-1002',
      'Saldo Umum': 'Debit',
      Kategori: 'BEBAN',
    },
    {
      No: '22',
      'Nama Akun': 'Beban Bensin, Tol dan Parkir - Penjualan',
      'No Ref': '6-1003',
      'Saldo Umum': 'Debit',
      Kategori: 'BEBAN',
    },
    {
      No: '23',
      'Nama Akun': 'Pendapatan dari Desa',
      'No Ref': '7-1001',
      'Saldo Umum': 'Kredit',
      Kategori: 'PENDAPATAN LAIN',
    },
    {
      No: '24',
      'Nama Akun': 'Pendapatan Bunga - Bank',
      'No Ref': '7-1005',
      'Saldo Umum': 'Kredit',
      Kategori: 'PENDAPATAN LAIN',
    },
    {
      No: '25',
      'Nama Akun': 'Pendapatan Bunga - Deposito',
      'No Ref': '7-1006',
      'Saldo Umum': 'Kredit',
      Kategori: 'PENDAPATAN LAIN',
    },
    {
      No: '26',
      'Nama Akun': 'Beban Bunga',
      'No Ref': '8-1001',
      'Saldo Umum': 'Debit',
      Kategori: 'BEBAN LAIN',
    },
    {
      No: '27',
      'Nama Akun': '(Laba)/Rugi Pelepasan Aset Tetap',
      'No Ref': '8-1002',
      'Saldo Umum': 'Debit',
      Kategori: 'BEBAN LAIN',
    },
    {
      No: '28',
      'Nama Akun': 'Penyesuaian Persediaan',
      'No Ref': '8-1003',
      'Saldo Umum': 'Debit',
      Kategori: 'BEBAN LAIN',
    },
  ];
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 text-center ">Daftar Akun</h1>
      <table className="mb-4">
        <tbody>
          <tr>
            <th className="border border-black border-solid h-12 p-2">
              Rill Akun
            </th>
            <th className="border border-black border-solid h-12 p-2">
              Nominal Akun
            </th>
          </tr>
        </tbody>
      </table>
      <TableComponent data={tableData} />
    </Layout>
  );
}
