'use client';

import React from 'react';
import Layout from '@/components/layout/layout';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import ClikableTable from '@/components/table/clickable-table';
import DropdownMenuButtonPPh21 from '@/components/pages/pph21/button-pph21/dropdown-menu-button-pph21';

export default function PPH21() {
  const router = useRouter();
  const tableHeaders = [
    'No',
    'Nama Lengkap',
    'NPWP',
    'NIK',
    'Jenis Pegawai',
    'Masa Pajak',
    'Gaji Bruto',
    'PPh 21',
    'Status',
  ];
  const tableData = [
    {
      No: '1',
      'Nama Lengkap': 'Rizky Wijaya',
      NPWP: '1234567890',
      NIK: '1234567890',
      'Jenis Pegawai': 'PNS',
      'Masa Pajak': 'Januari',
      'Gaji Bruto': 'Rp. 10.000.000',
      'PPh 21': 'Rp. 1.000.000',
      Status: 'Lunas',
    },
    {
      No: '2',
      'Nama Lengkap': 'Antony Wijaya',
      NPWP: '1234567890',
      NIK: '1234567890',
      'Jenis Pegawai': 'Penerima Pesangon',
      'Masa Pajak': 'Januari',
      'Gaji Bruto': 'Rp. 10.000.000',
      'PPh 21': 'Rp. 1.000.000',
      Status: 'Lunas',
    },
    {
      No: '3',
      'Nama Lengkap': 'Antony Wijaya',
      NPWP: '1234567890',
      NIK: '1234567890',
      'Jenis Pegawai': 'Penerima Pesangon',
      'Masa Pajak': 'Januari',
      'Gaji Bruto': 'Rp. 10.000.000',
      'PPh 21': 'Rp. 1.000.000',
      Status: 'Lunas',
    },
    {
      No: '4',
      'Nama Lengkap': 'Rizky Wijaya',
      NPWP: '1234567890',
      NIK: '1234567890',
      'Jenis Pegawai': 'PNS',
      'Masa Pajak': 'Januari',
      'Gaji Bruto': 'Rp. 10.000.000',
      'PPh 21': 'Rp. 1.000.000',
      Status: 'Lunas',
    },
  ];
  const handleRowClick = (tax_id: any) => {
    router.push(`/unit/tax/pph21/{tax_id}/details`);
  };
  const rows = [
    {
      titleLeft: 'Pegawai Upah Mingguan',
      peopleCount: 2,
      total: 'Jumlah PPh',
      currency: 'Rp',
      amount: '132.500',
      status: 'Pegawai Tetap',
      statusPeopleCount: 1,
      taxAmount: '7.866',
    },
    {
      titleLeft: 'Pegawai Upah Satuan',
      peopleCount: 1,
      total: 'Jumlah PPh',
      currency: 'Rp',
      amount: '0',
      status: 'Penerima Pesangon',
      statusPeopleCount: 2,
      taxAmount: '23.522.500',
    },
    {
      titleLeft: 'Pegawai Upah Borongan',
      peopleCount: 1,
      total: 'Jumlah PPh',
      currency: 'Rp',
      amount: '145.250',
      status: 'PPH 21 Lainnya',
      statusPeopleCount: 2,
      taxAmount: '0',
    },
    // Add more rows as needed
  ];
  return (
    <Layout>
      <header className="flex justify-between items-center">
        <h1 className="align-baseline my-auto font-semibold">
          Pajak Penghasilan 21
        </h1>
        <div>
          <DropdownMenuButtonPPh21 />
        </div>
      </header>
      <section className="pt-8">
        <ClikableTable
          headers={tableHeaders}
          data={tableData}
          onRowClick={handleRowClick}
        />
        <div>
          <div className="overflow-x-auto mt-10">
            <table className="min-w-full bg-white">
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-blue-100' : ''}
                  >
                    <td className="py-2 px-4">{row.titleLeft}</td>
                    <td className="py-2 px-4">{row.peopleCount} Orang</td>
                    <td className="py-2 px-4">{row.total}</td>
                    <td className="py-2 px-4">
                      {row.currency} {row.amount}
                    </td>
                    <td className="py-2 px-4">{row.status}</td>
                    <td className="py-2 px-4">{row.peopleCount} Orang</td>
                    <td className="py-2 px-4">{row.total}</td>
                    <td className="py-2 px-4">
                      {row.currency} {row.taxAmount}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2} className="py-2 px-4 font-semibold">
                    TOTAL PPH 21
                  </td>
                  <td colSpan={2} className="py-2 px-4 font-semibold">
                    Rp. 132.500
                  </td>
                  <td colSpan={3} className="py-2 px-4 font-semibold">
                    TOTAL TENAGA KERJA KENA PAJAK
                  </td>
                  <td colSpan={2} className="py-2 px-4 font-semibold">
                    4 Orang
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
}
