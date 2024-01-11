'use client';

import React from 'react';
import Layout from '@/components/layout/layout';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import ClikableTable from '@/components/table/clickable-table';
import DropdownMenuButtonPPh21 from '@/components/pages/pph21/button-pph21/dropdown-menu-button-pph21';
import { Command, CommandInput, CommandList } from '@/components/ui/command';
import { CalendarDateRangePicker } from '@/components/date-range-picker';
import { DateRange } from 'react-day-picker';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);
  return (
    <Layout>
      <h1 className="align-baseline my-auto font-semibold">
        Pajak Penghasilan 21
      </h1>
      <div className="flex justify-between mb-3 mt-3">
        <Command className="rounded-lg border shadow-md w-72">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList></CommandList>
        </Command>
        <Link href="/unit/tax/pph21">
          <Button>Kembali</Button>
        </Link>
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-6">
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Pilih tenega kerja" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Januari 2024" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex space-x-6">
          <DropdownMenuButtonPPh21 />
          <Link href="/unit/tax/report/pph">
            <Button>Unduh Keseluruhan</Button>
          </Link>
        </div>
      </div>
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
