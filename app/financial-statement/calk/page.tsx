import React from 'react';
import Table from '@/components/table/table';
import Layout from '@/components/layout/layout';
import { Button } from '@/components/ui/button';
import { CalendarDateRangePicker } from '@/components/date-range-picker';

export default function calk() {
  const Tableheader = ['No', 'Tanggal', 'Bulan', 'Tahun'];
  const Tabledata = [
    { No: '1', Tanggal: '17 Agustus 2023', Bulan: 'Agustus', Tahun: '2023' },
    { No: '2', Tanggal: '17 Agustus 2023', Bulan: 'Agustus', Tahun: '2023' },
    { No: '3', Tanggal: '17 Agustus 2023', Bulan: 'Agustus', Tahun: '2023' },
    { No: '4', Tanggal: '17 Agustus 2023', Bulan: 'Agustus', Tahun: '2023' },
  ];
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 text-center ">
        Catatan Atas Laporan Keuangan
      </h1>
      <h1 className="text-center font-bold text-lg mb-1">Entitas Jasa</h1>
      <h1 className="text-center font-bold text-lg mb-5">
        Catatan Atas Laporan Keuangan
      </h1>
      <div className="flex my-10 space-x-96">
        <div className="flex space-x-2">
          <CalendarDateRangePicker />
          <Button className="">Terapkan</Button>
        </div>
        <Button className="ml-96">Tambah Data CALK</Button>
      </div>
      <Table headers={Tableheader} data={Tabledata} />
    </Layout>
  );
}
