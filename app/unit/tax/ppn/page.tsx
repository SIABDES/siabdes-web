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
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from '@/components/ui/command';
import { CalendarDateRangePicker } from '@/components/date-range-picker';
import { DateRange } from 'react-day-picker';
import useGetPPN from '@/hooks/ppn/useGetPPN';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { formatDateToString } from '@/common/helpers/date';
import { formatPPNtaxObject } from '@/common/helpers/ppn-format';
import useGetPPNDetails from '@/hooks/ppn/useGetPPNDetails';
import Details from './[ppn_id]/details/page';

export default function PPN() {
  const { data, isLoading } = useGetPPN();
  const ppn = data?.data.taxes;
  console.log(ppn);

  const router = useRouter();

  const [isPPNDetailsFetched, setIsPPNDetailsFetched] = useState(false);
  const [ppnDetails, setPPNDetails] = useState<any>({});
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
  // const tableDataIncome = ppn
  //   .filter((item) => item.transaction_type === 'SALES')
  //   .map((item) => ({
  //     Tanggal: item.transaction_date,
  //     'Nama Pengusaha Kena Pajak': item.given_to,
  //     'No. Bukti Transaksi': item.transaction_number,
  //     'Objek Pajak': item.tax_object,
  //     PPN: formatNumber(parseFloat(item.PPN.replace(/\./g, ''))),
  //   }));

  const tableDataIncome = ppn
    ?.filter((item) => item.transaction_type === 'SALES')
    .map((item) => ({
      Tanggal: item.transaction_date,
      'Nama Pengusaha Kena Pajak': item.given_to,
      'No. Bukti Transaksi': item.transaction_number,
      'Objek Pajak': item.tax_object,
      PPN: formatNumber(parseFloat(item.tax_object.replace(/\./g, ''))),
    }));

  const tableDataOutcome = ppn
    ?.filter((item) => item.transaction_type === 'PURCHASE')
    .map((item) => ({
      Tanggal: item.transaction_date,
      'Nama Pengusaha Kena Pajak': item.given_to,
      'No. Bukti Transaksi': item.transaction_number,
      'Objek Pajak': item.tax_object,
      PPN: formatNumber(parseFloat(item.tax_object.replace(/\./g, ''))),
    }));
  const handleRowClick = (
    e: React.MouseEvent<HTMLTableRowElement>,
    ppnId: string
  ) => {
    e.preventDefault();
    router.push(`/unit/tax/ppn/${ppnId}/details`);
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
            {/* <TablePPN
              headers={tableHeadersIncome}
              data={tableDataIncome}
              onSumCalculated={setSumIncome}
              onRowClick={handleRowClick}
            /> */}
            <ScrollArea className="h-full w-full rounded-md border">
              <div className="overflow-x-auto">
                <Table className="relative w-full">
                  <TableHeader className="">
                    <TableRow>
                      <TableHead className="sticky top-0 px-6 py-3 font-bold">
                        No
                      </TableHead>
                      <TableHead className="sticky top-0 px-6 py-3 font-bold">
                        Tanggal
                      </TableHead>
                      <TableHead className="sticky top-0 px-6 py-3 font-bold">
                        Nama Pengusaha Kena Pajak
                      </TableHead>
                      <TableHead className="sticky top-0 px-6 py-3 font-bold">
                        No. Bukti Transaksi
                      </TableHead>
                      <TableHead className="sticky top-0 px-6 py-3 font-bold">
                        Objek Pajak
                      </TableHead>
                      <TableHead className="sticky top-0 px-6 py-3 font-bold">
                        PPN
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="divide-y ">
                    {isLoading && (
                      <>
                        {Array.from(Array(8).keys()).map((_, index) => (
                          <TableRow key={index}>
                            <TableCell className="px-6 py-4">
                              <Skeleton className="w-full h-[2rem]" />
                            </TableCell>
                            <TableCell className="px-6 py-4">
                              <Skeleton className="w-full h-[2rem]" />
                            </TableCell>
                            <TableCell className="px-6 py-4">
                              <Skeleton className="w-full h-[2rem]" />
                            </TableCell>
                            <TableCell className="px-6 py-4">
                              <Skeleton className="w-full h-[2rem]" />
                            </TableCell>
                            <TableCell className="px-6 py-4">
                              <Skeleton className="w-full h-[2rem]" />
                            </TableCell>
                            <TableCell className="px-6 py-4">
                              <Skeleton className="w-full h-[2rem]" />
                            </TableCell>
                          </TableRow>
                        ))}
                      </>
                    )}

                    {ppn
                      ?.filter((ppn) => ppn.transaction_type === 'PURCHASE')
                      .map((ppn, index) => (
                        <TableRow
                          key={ppn.id}
                          onClick={(e) => handleRowClick(e, ppn.id)}
                          className="cursor-pointer hover:bg-gray-200 w-full"
                        >
                          <TableCell className="px-6 py-4">
                            {index + 1}
                          </TableCell>
                          <TableCell className="px-6 py-4">
                            {formatDateToString(ppn.transaction_date)}
                          </TableCell>
                          <TableCell className="px-6 py-4">
                            {ppn.given_to}
                          </TableCell>
                          <TableCell className="px-6 py-4">
                            {ppn.transaction_number}
                          </TableCell>
                          <TableCell className="px-6 py-4">
                            {formatPPNtaxObject(ppn.tax_object)}
                          </TableCell>
                          <TableCell className="px-6 py-4">
                            {/* {ppn.tax_object.ppn_id. */}
                            {/* {pp} */}
                            {/* {isPPNDetailsFetched
                              ? ppnDetails?.tax_object?.ppn_id?.pph
                              : 'Loading...'} */}
                            {/* {ppn.tax_object.pph} */}
                            {ppn.tax_object}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </ScrollArea>
          </div>
        </div>

        <div>
          <h2 className="font-semibold mt-2 mb-2">PPN Keluaran</h2>
          <div className="h-72 w-full">
            {/* <TablePPN
            headers={tableHeadersOutcome}
            data={tableDataOutcome}
            onSumCalculated={setSumOutcome}
            onRowClick={handleRowClick}
          /> */}
            <ScrollArea className="h-full w-full rounded-md border">
              <div className="overflow-x-auto">
                <Table className="relative w-full">
                  <TableHeader className="">
                    <TableRow>
                      <TableHead className="sticky top-0 px-6 py-3 font-bold">
                        No
                      </TableHead>
                      <TableHead className="sticky top-0 px-6 py-3 font-bold">
                        Tanggal
                      </TableHead>
                      <TableHead className="sticky top-0 px-6 py-3 font-bold">
                        Nama Pengusaha Kena Pajak
                      </TableHead>
                      <TableHead className="sticky top-0 px-6 py-3 font-bold">
                        No. Bukti Transaksi
                      </TableHead>
                      <TableHead className="sticky top-0 px-6 py-3 font-bold">
                        Objek Pajak
                      </TableHead>
                      <TableHead className="sticky top-0 px-6 py-3 font-bold">
                        PPN
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="divide-y ">
                    {isLoading && (
                      <>
                        {Array.from(Array(8).keys()).map((_, index) => (
                          <TableRow key={index}>
                            <TableCell className="px-6 py-4">
                              <Skeleton className="w-full h-[2rem]" />
                            </TableCell>
                            <TableCell className="px-6 py-4">
                              <Skeleton className="w-full h-[2rem]" />
                            </TableCell>
                            <TableCell className="px-6 py-4">
                              <Skeleton className="w-full h-[2rem]" />
                            </TableCell>
                            <TableCell className="px-6 py-4">
                              <Skeleton className="w-full h-[2rem]" />
                            </TableCell>
                            <TableCell className="px-6 py-4">
                              <Skeleton className="w-full h-[2rem]" />
                            </TableCell>
                            <TableCell className="px-6 py-4">
                              <Skeleton className="w-full h-[2rem]" />
                            </TableCell>
                          </TableRow>
                        ))}
                      </>
                    )}

                    {ppn
                      ?.filter((ppn) => ppn.transaction_type === 'SALES')
                      .map((ppn, index) => (
                        <TableRow
                          key={ppn.id}
                          onClick={(e) => handleRowClick(e, ppn.id)}
                          className="cursor-pointer hover:bg-gray-200 w-full"
                        >
                          <TableCell className="px-6 py-4">
                            {index + 1}
                          </TableCell>
                          <TableCell className="px-6 py-4">
                            {formatDateToString(ppn.transaction_date)}
                          </TableCell>
                          <TableCell className="px-6 py-4">
                            {ppn.given_to}
                          </TableCell>
                          <TableCell className="px-6 py-4">
                            {ppn.transaction_number}
                          </TableCell>
                          <TableCell className="px-6 py-4">
                            {formatPPNtaxObject(ppn.tax_object)}
                          </TableCell>
                          <TableCell className="px-6 py-4">
                            {/* {ppn.tax_object.pph} */}
                            Gak ada datanya yg dari database
                            {ppn.tax_object}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </ScrollArea>
          </div>
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
