'use client';
import Layout from '@/components/layout/layout';
import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ClikableTable from '@/components/table/clickable-table';
import TablePPN from '@/components/pages/tax/ppn/tabe-ppn';
import { set } from 'date-fns';
import { formatNumber } from '@/common/helpers/number-format';
import { useRouter } from 'next/navigation';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Command, CommandInput, CommandList } from '@/components/ui/command';
import { CalendarDateRangePicker } from '@/components/date-range-picker';
import { DateRange } from 'react-day-picker';

export default function PPN() {
  const router = useRouter();
  const tableHeadersIncome = [
    'Tanggal',
    'Nama Pengusaha Kena Pajak',
    'No. Bukti Transaksi',
    'Objek Pajak',
    'PPN',
  ];
  const tableHeadersOutcome = [
    'Tanggal',
    'Nama Pengusaha Kena Pajak',
    'No. Bukti Transaksi',
    'Objek Pajak',
    'PPN',
  ];
  const tableDataIncome = [
    {
      Tanggal: '12 Oktober 2021',
      'Nama Pengusaha Kena Pajak': 'PT Cipta Karya',
      'No. Bukti Transaksi': '1920192019021.0001',
      'Objek Pajak': 'Objek Kena Pajak - Dalam Negeri',
      PPN: '10.000.000',
    },
    {
      Tanggal: '12 Oktober 2021',
      'Nama Pengusaha Kena Pajak': 'PT Cipta Karya',
      'No. Bukti Transaksi': '1920192019021.0001',
      'Objek Pajak': 'Objek Kena Pajak - Dalam Negeri',
      PPN: '20.000.000',
    },
    {
      Tanggal: '12 Oktober 2021',
      'Nama Pengusaha Kena Pajak': 'PT Cipta Karya',
      'No. Bukti Transaksi': '1920192019021.0001',
      'Objek Pajak': 'Objek Kena Pajak - Dalam Negeri',
      PPN: '40.000.000',
    },
  ];
  const tableDataOutcome = [
    {
      Tanggal: '12 Oktober 2021',
      'Nama Pengusaha Kena Pajak': 'PT Cipta Karya',
      'No. Bukti Transaksi': '1920192019021.0001',
      'Objek Pajak': 'Objek Kena Pajak - Dalam Negeri',
      PPN: '20.000.000',
    },
    {
      Tanggal: '12 Oktober 2021',
      'Nama Pengusaha Kena Pajak': 'PT Cipta Karya',
      'No. Bukti Transaksi': '1920192019021.0001',
      'Objek Pajak': 'Objek Kena Pajak - Dalam Negeri',
      PPN: '20.000.000',
    },
    {
      Tanggal: '12 Oktober 2021',
      'Nama Pengusaha Kena Pajak': 'PT Cipta Karya',
      'No. Bukti Transaksi': '1920192019021.0001',
      'Objek Pajak': 'Objek Kena Pajak - Dalam Negeri',
      PPN: '40.000.000',
    },
    {
      Tanggal: '12 Oktober 2021',
      'Nama Pengusaha Kena Pajak': 'PT Cipta Karya',
      'No. Bukti Transaksi': '1920192019021.0001',
      'Objek Pajak': 'Objek Kena Pajak - Dalam Negeri',
      PPN: '20.000.000',
    },
    {
      Tanggal: '12 Oktober 2021',
      'Nama Pengusaha Kena Pajak': 'PT Cipta Karya',
      'No. Bukti Transaksi': '1920192019021.0001',
      'Objek Pajak': 'Objek Kena Pajak - Dalam Negeri',
      PPN: '20.000.000',
    },
    {
      Tanggal: '12 Oktober 2021',
      'Nama Pengusaha Kena Pajak': 'PT Cipta Karya',
      'No. Bukti Transaksi': '1920192019021.0001',
      'Objek Pajak': 'Objek Kena Pajak - Dalam Negeri',
      PPN: '40.000.000',
    },
    {
      Tanggal: '12 Oktober 2021',
      'Nama Pengusaha Kena Pajak': 'PT Cipta Karya',
      'No. Bukti Transaksi': '1920192019021.0001',
      'Objek Pajak': 'Objek Kena Pajak - Dalam Negeri',
      PPN: '20.000.000',
    },
    {
      Tanggal: '12 Oktober 2021',
      'Nama Pengusaha Kena Pajak': 'PT Cipta Karya',
      'No. Bukti Transaksi': '1920192019021.0001',
      'Objek Pajak': 'Objek Kena Pajak - Dalam Negeri',
      PPN: '20.000.000',
    },
    {
      Tanggal: '12 Oktober 2021',
      'Nama Pengusaha Kena Pajak': 'PT Cipta Karya',
      'No. Bukti Transaksi': '1920192019021.0001',
      'Objek Pajak': 'Objek Kena Pajak - Dalam Negeri',
      PPN: '40.000.000',
    },
  ];
  const handleRowClick = (tax_id: any) => {
    router.push(`/unit/tax/ppn/{tax_id}/details`);
  };
  const [sumIncome, setSumIncome] = useState(0);
  const [sumOutcome, setSumOutcome] = useState(0);
  const totalPPN = useMemo(
    () => sumOutcome - sumIncome,
    [sumOutcome, sumIncome]
  );

  const [date, setDate] = React.useState<DateRange | undefined>(undefined);

  return (
    <Layout>
      <h1 className="align-baseline my-auto font-semibold mb-9">
        Pajak Pertambahan Nilai
      </h1>
      <header className="flex justify-between items-center">
        <div className="flex space-x-6">
          <Command className="rounded-lg border shadow-md w-72">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              {/* <CommandEmpty>No results found.</CommandEmpty> */}
            </CommandList>
          </Command>
          <CalendarDateRangePicker date={date} setDate={setDate} />
        </div>
        <div className="flex space-x-6">
          <Link href="/unit/tax/ppn/add">
            <Button>Tambah PPN</Button>
          </Link>
          <Link href="/unit/tax/report/ppn">
            <Button>Cetak</Button>
          </Link>
        </div>
      </header>

      <section className="pt-8 space-y-9">
        {/* <ClikableTable
          headers={tableHeadersIncome}
          data={tableDataIncome}
          onRowClick={handleRowClick}
        /> */}
        <div>
          <h2 className="font-semibold mt-2 mb-2">PPN Masukan</h2>
          <div className="h-72 w-full">
            <TablePPN
              headers={tableHeadersIncome}
              data={tableDataIncome}
              onSumCalculated={setSumIncome}
              onRowClick={handleRowClick}
            />
          </div>
        </div>

        <h2 className="font-semibold mt-2 mb-2">PPN Keluaran</h2>
        <div className="h-72 w-full">
          <TablePPN
            headers={tableHeadersOutcome}
            data={tableDataOutcome}
            onSumCalculated={setSumOutcome}
            onRowClick={handleRowClick}
          />
        </div>

        <div className="flex justify-center font-semibold space-x-24">
          <div>
            <div className="flex space-x-4">
              <h2>PPN Masukan :</h2>
              <p>{sumIncome.toLocaleString()}</p>
            </div>
            <div className="flex space-x-4">
              <h2>PPN Keluaran : </h2>
              <p>{sumOutcome.toLocaleString()}</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <h2>PPN ({totalPPN < 0 ? 'Lebih Bayar' : 'Kurang Bayar'}) :</h2>
            <p>{totalPPN.toLocaleString()}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
