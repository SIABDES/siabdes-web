'use client';
import React from 'react';
import Layout from '@/components/layout/layout';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ComboBox } from '@/components/ui/combobox';
import ClikableTable from '@/components/table/clickable-table';
import Link from 'next/link';

export default function Employees() {
  const router = useRouter();
  const handleRowClick = (employees_id: any) => {
    router.push(`/unit/data-master/employees/details`);
  };
  const tableHeaders = ['No', 'Nama Tenaga Kerja', 'NIK', 'Jenis Tenaga Kerja'];
  const tableData = [
    {
      No: '1',
      'Nama Tenaga Kerja': 'Asep Sutarjo',
      NIK: '1234567891011121',
      'Jenis Tenaga Kerja': 'Pegawai Tetap',
    },
    {
      No: '2',
      'Nama Tenaga Kerja': 'Bambang Sugeni',
      NIK: '1234567891011122',
      'Jenis Tenaga Kerja': 'Pegawai Tidak Tetap',
    },
    {
      No: '3',
      'Nama Tenaga Kerja': 'Ucok Diskriminasi',
      NIK: '8934567891011122',
      'Jenis Tenaga Kerja': 'Pegawai Tidak Tetap',
    },
  ];

  const items = [
    { label: 'Pegawai Tetap', value: 'Pegawai Tetap' },
    { label: 'Pegawai Tidak Tetap', value: 'Pegawai Tidak Tetap' },
  ];

  const [value, setValue] = React.useState<string | undefined>(undefined);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 text-left underline underline-offset-8 ">
        Data Tenaga Kerja Unit
      </h1>
      <div className="flex justify-end container px-16 mb-5">
        {/* <Button className="w-32 h-14">Tambah</Button> */}
        <Link href="/unit/data-master/employees/add">
          <Button>Tambah Data Karyawan</Button>
        </Link>
      </div>
      {/* <div className="flex justify-end container">
        <ComboBox items={items} setValue={}/>
      </div> */}
      <ClikableTable
        headers={tableHeaders}
        data={tableData}
        onRowClick={handleRowClick}
      />
    </Layout>
  );
}
