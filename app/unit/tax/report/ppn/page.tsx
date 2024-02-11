'use client';
import React, { useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Lengkong from '../../../../../public/lengkong.png';
import TablePPN from '@/components/pages/tax/ppn/tabe-ppn';
import useGetPPN from '@/hooks/ppn/useGetPPN';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { formatDateToString } from '@/common/helpers/date';
import { formatPPNtaxObject } from '@/common/helpers/ppn-format';
import { formatRupiah, numberToWordsID } from '@/common/helpers/number-format';
import { useReactToPrint } from 'react-to-print';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import TableReportPPN from '@/components/pages/tax/table-report-ppn';
import { Session } from 'inspector';

export default function PreviewPPN() {
  const { data, isLoading } = useGetPPN();
  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: 'Laporan Pajak Pertambahan Nilai',
  });
  const ppn = data?.data.taxes;

  // gunakan session

  // const sumIncome = useMemo(() => {
  //   return (
  //     ppn
  //       ?.filter((ppn) => ppn.transaction_type === 'PURCHASE')
  //       .reduce((sum, ppn) => sum + ppn.total_ppn, 0) || 0
  //   );
  // }, [ppn]);

  // const sumOutcome = useMemo(() => {
  //   return (
  //     ppn
  //       ?.filter((ppn) => ppn.transaction_type === 'SALES')
  //       .reduce((sum, ppn) => sum + ppn.total_ppn, 0) || 0
  //   );
  // }, [ppn]);

  // const totalPPN = useMemo(
  //   () => sumOutcome - sumIncome,
  //   [sumOutcome, sumIncome]
  // );

  const totalDPPPurchase = useMemo(() => {
    return (
      ppn
        ?.filter((ppn) => ppn.transaction_type === 'PURCHASE')
        .reduce((sum, item) => sum + item.total_dpp, 0) ?? 0
    );
  }, [ppn]);

  const totalDPPSales = useMemo(() => {
    return (
      ppn
        ?.filter((ppn) => ppn.transaction_type === 'SALES')
        .reduce((sum, item) => sum + item.total_dpp, 0) ?? 0
    );
  }, [ppn]);

  const totalPPNPurchase = useMemo(() => {
    return (
      ppn
        ?.filter((ppn) => ppn.transaction_type === 'PURCHASE')
        .reduce((sum, item) => sum + item.total_ppn, 0) ?? 0
    );
  }, [ppn]);

  const totalPPNSales = useMemo(() => {
    return (
      ppn
        ?.filter((ppn) => ppn.transaction_type === 'SALES')
        .reduce((sum, item) => sum + item.total_ppn, 0) ?? 0
    );
  }, [ppn]);
  return (
    <>
      <div id="print-controller" className="my-6">
        <div className="mx-auto max-w-6xl flex justify-between">
          <Button variant={'secondary'} asChild>
            <Link href={'/unit/tax/ppn'}>Kembali ke halaman PPN</Link>
          </Button>

          <Button onClick={handlePrint}>Cetak Laporan (PDF)</Button>
        </div>

        <Separator />
      </div>

      <section ref={contentRef} className="max-w-full mx-auto">
        <header>
          <div className="flex justify-center mt-10 space-x-6">
            <div>
              <Image src={Lengkong} alt="bg" width={130} />
            </div>
            <div className="text-center">
              <div className="font-bold text-xl mb-2 max-w-md">
                <h1>BADAN USAHA MILIK DESA LENGKONG</h1>
                <h1>UNIT USAHA JASA WISATA</h1>
              </div>
              <h3>Desa Lengkong, Kec. Bojongsoang,</h3>
              <h3>Kab. Bandung, Provinsi Jawa Barat</h3>
            </div>
          </div>
          <p className="h-1 w-2/5 mx-auto my-8 bg-black border-0 rounded" />
        </header>
        <div className="px-36 space-y-9 mb-9">
          <div className="text-center">
            <h1 className="font-semibold text-xl">
              LAPORAN PAJAK PERTAMBAHAN NILAI
            </h1>
            <h2>Periode 1 Januari - 31 januari 2023</h2>
          </div>
          {/* if (activeTransactionType == 'PEMBELIAN') {
            
          } */}
          <div>
            <h2 className="font-semibold mt-2 mb-2">PPN Masukan</h2>
            {/* // percabangan disini
            <ReportPPNPurchase data={ppn} isLoading={isLoading} />
            <ReportPPNSales data={ppn} isLoading={isLoading} /> */}
            {/* <TablePPN
            headers={tableHeadersIncome}
            data={tableDataIncome}
            onSumCalculated={setSumIncome}
          /> */}

            <TableReportPPN
              data={ppn?.filter((ppn) => ppn.transaction_type === 'PURCHASE')}
              isLoading={isLoading}
            />

            {/* < className="overflow-x-auto">
              <Table className="relative w-full">
                <TableHeader className="">
                  <TableRow>
                    <TableCell className="sticky top-0 px-6 py-3 border border-black font-black bg-white">
                      No
                    </TableCell>
                    <TableCell className="sticky top-0 px-6 py-3 border border-black font-black bg-white">
                      Tanggal
                    </TableCell>
                    <TableCell className="sticky top-0 px-6 py-3 border border-black font-black bg-white">
                      Nama Pengusaha Kena Pajak
                    </TableCell>
                    <TableCell className="sticky top-0 px-6 py-3 border border-black font-black bg-white">
                      No. Bukti Transaksi
                    </TableCell>
                    <TableCell className="sticky top-0 px-6 py-3 border border-black font-black bg-white">
                      Nama Barang/Jasa
                    </TableCell>
                    <TableCell className="sticky top-0 px-6 py-3 border border-black font-black bg-white">
                      Objek Pajak
                    </TableCell>
                    <TableCell className="sticky top-0 px-6 py-3 border border-black font-black bg-white">
                      Dasar Pengenaan Pajak
                    </TableCell>
                    <TableCell className="sticky top-0 px-6 py-3 border border-black font-black bg-white">
                      PPN
                    </TableCell>
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
                        // onClick={(e) => handleRowClick(e, ppn.id)}
                        className="cursor-pointer hover:bg-gray-200 w-full"
                      >
                        <TableCell className="px-6 py-4 border border-black  bg-white">
                          {index + 1}
                        </TableCell>
                        <TableCell className="px-6 py-4 border border-black  bg-white">
                          {formatDateToString(ppn.transaction_date)}
                        </TableCell>
                        <TableCell className="px-6 py-4 border border-black  bg-white">
                          {ppn.given_to}
                        </TableCell>
                        <TableCell className="px-6 py-4 border border-black  bg-white">
                          {ppn.transaction_number}
                        </TableCell>
                        <TableCell className="px-6 py-4 border border-black  bg-white">
                          tes
                        </TableCell>
                        <TableCell className="px-6 py-4 border border-black  bg-white">
                          {formatPPNtaxObject(ppn.tax_object)}
                        </TableCell>
                        <TableCell className="px-6 py-4 border border-black  bg-white">
                          tes
                        </TableCell>
                        <TableCell className="px-6 py-4 border border-black  bg-white">
                          {formatRupiah(ppn.total_ppn)}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="sticky top-0 px-6 py-3 border border-black font-black bg-white text-end"
                    >
                      Total
                    </TableCell>
                    <TableCell className="sticky top-0 px-6 py-3 border border-black font-black bg-white">
                      Rp 2.890.000.000
                    </TableCell>
                    <TableCell className="sticky top-0 px-6 py-3 border border-black font-black bg-white">
                      {formatRupiah(sumIncome)}
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
          </div> */}
          </div>
          <div className="border p-4 flex flex-col items-center border-black rounded-lg">
            <div className="font-bold">
              Dasar Pengenaan Pajak Masukan:{' '}
              {`${formatRupiah(totalDPPPurchase)}`}
            </div>
            <p className="h-0.5 my-2 w-full bg-black border-0 rounded" />
            <div>{`Terbilang: ${numberToWordsID(totalDPPPurchase)}`} </div>
          </div>
          <div className="border p-4 flex flex-col justify-center items-center border-black rounded-lg">
            <div className="font-bold">
              Pajak Pertambahan Nilai Masukan:{' '}
              {`${formatRupiah(totalPPNPurchase)}`}
            </div>
            <p className="h-0.5 my-2 w-full bg-black border-0 rounded" />
            <div>{`Terbilang: ${numberToWordsID(totalPPNPurchase)}`}</div>
          </div>
          <div>
            <h2 className="font-semibold mt-2 mb-2">PPN Keluaran</h2>
            <TableReportPPN
              data={ppn?.filter((ppn) => ppn.transaction_type === 'SALES')}
              isLoading={isLoading}
            />
            {/* <TablePPN
            headers={tableHeadersOutcome}
            data={tableDataOutcome}
            onSumCalculated={setSumOutcome}
          /> */}
            {/* <div className="overflow-x-auto">
              <Table className="relative w-full">
                <TableHeader className="">
                  <TableRow>
                    <TableCell className="sticky top-0 px-6 py-3 border border-black font-black bg-white">
                      No
                    </TableCell>
                    <TableCell className="sticky top-0 px-6 py-3 border border-black font-black bg-white">
                      Tanggal
                    </TableCell>
                    <TableCell className="sticky top-0 px-6 py-3 border border-black font-black bg-white">
                      Nama Pengusaha Kena Pajak
                    </TableCell>
                    <TableCell className="sticky top-0 px-6 py-3 border border-black font-black bg-white">
                      No. Bukti Transaksi
                    </TableCell>
                    <TableCell className="sticky top-0 px-6 py-3 border border-black font-black bg-white">
                      Nama Barang/Jasa
                    </TableCell>
                    <TableCell className="sticky top-0 px-6 py-3 border border-black font-black bg-white">
                      Objek Pajak
                    </TableCell>
                    <TableCell className="sticky top-0 px-6 py-3 border border-black font-black bg-white">
                      Dasar Pengenaan Pajak
                    </TableCell>
                    <TableCell className="sticky top-0 px-6 py-3 border border-black font-black bg-white">
                      PPN
                    </TableCell>
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
                        // onClick={(e) => handleRowClick(e, ppn.id)}
                        className="cursor-pointer hover:bg-gray-200 w-full"
                      >
                        <TableCell className="px-6 py-4 border border-black  bg-white">
                          {index + 1}
                        </TableCell>
                        <TableCell className="px-6 py-4 border border-black  bg-white">
                          {formatDateToString(ppn.transaction_date)}
                        </TableCell>
                        <TableCell className="px-6 py-4 border border-black  bg-white">
                          {ppn.given_to}
                        </TableCell>
                        <TableCell className="px-6 py-4 border border-black  bg-white">
                          {ppn.transaction_number}
                        </TableCell>
                        <TableCell className="px-6 py-4 border border-black  bg-white">
                          tes
                        </TableCell>
                        <TableCell className="px-6 py-4 border border-black  bg-white">
                          {formatPPNtaxObject(ppn.tax_object)}
                        </TableCell>
                        <TableCell className="px-6 py-4 border border-black  bg-white">
                          tes
                        </TableCell>
                        <TableCell className="px-6 py-4 border border-black  bg-white">
                          {formatRupiah(ppn.total_ppn)}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="sticky top-0 px-6 py-3 border border-black font-black bg-white text-end"
                    >
                      Total
                    </TableCell>
                    <TableCell className="sticky top-0 px-6 py-3 border border-black font-black bg-white">
                      Rp 3.500.000.000
                    </TableCell>
                    <TableCell className="sticky top-0 px-6 py-3 border border-black font-black bg-white">
                      {formatRupiah(sumOutcome)}
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div> */}
          </div>
          <div className="border p-4 flex flex-col items-center border-black rounded-lg">
            <div className="font-bold">
              Dasar Pengenaan Pajak Masukan: {`${formatRupiah(totalDPPSales)}`}
            </div>
            <p className="h-0.5 my-2 w-full bg-black border-0 rounded" />
            <div>{`Terbilang: ${numberToWordsID(totalDPPSales)}`} </div>
          </div>
          <div className="border p-4 flex flex-col justify-center items-center border-black rounded-lg">
            <div className="font-bold">
              Pajak Pertambahan Nilai Masukan:{' '}
              {`${formatRupiah(totalPPNSales)}`}
            </div>
            <p className="h-0.5 my-2 w-full bg-black border-0 rounded" />
            <div>{`Terbilang: ${numberToWordsID(totalPPNSales)}`}</div>
          </div>
          {/* <div className="flex justify-center space-x-12 mb-12">
            <div className="border p-4 flex flex-col justify-center items-center w-1/2 border-black rounded-lg">
              <div className="font-bold">
                Dasar Pengenaan Pajak Masukan: Rp 2.890.000.000
              </div>
              <p className="h-0.5 my-2 w-full bg-black border-0 rounded" />
              <div>{`Terbilang: ${numberToWordsID(2890000000)}`} </div>
            </div>
            <div className="border p-4 flex flex-col justify-center items-center w-1/2 border-black rounded-lg">
              <div className="font-bold">
                Dasar Pengenaan Pajak Keluaran: Rp 3.500.000.000
              </div>
              <p className="h-0.5 my-2 w-full bg-black border-0 rounded" />
              <div>{`Terbilang: ${numberToWordsID(3500000000)}`}</div>
            </div>
          </div>
          <div className="flex justify-center space-x-12 mb-12">
            <div className="border p-4 flex flex-col justify-center items-center w-1/2 border-black rounded-lg">
              <div className="font-bold">
                {`Pajak Pertambahan Nilai Masukan: ${formatRupiah(sumIncome)}`}
              </div>
              <p className="h-0.5 my-2 w-full bg-black border-0 rounded" />
              <div>{`Terbilang: ${numberToWordsID(sumIncome)}`}</div>
            </div>
            <div className="border p-4 flex flex-col justify-center items-center w-1/2 border-black rounded-lg">
              <div className="font-bold">
                {`Pajak Pertambahan Nilai Keluaran: ${formatRupiah(
                  sumOutcome
                )}`}
              </div>
              <p className="h-0.5 my-2 w-full bg-black border-0 rounded" />
              <div className="text-center">{`Terbilang : ${numberToWordsID(
                sumOutcome
              )}`}</div>
            </div>
          </div>
          <div className="border p-4 flex flex-col justify-center items-center border-black rounded-lg w-full">
            <div className="font-bold">
              {`Pajak Pertambahan Nilai (Kurang Bayar): ${formatRupiah(
                totalPPN
              )}`}
            </div>
            <p className="h-0.5 my-2 w-full bg-black border-0 rounded" />
            <div>{`Terbilang : ${numberToWordsID(totalPPN)}`}</div>
          </div> */}
        </div>
      </section>
    </>
  );
}
