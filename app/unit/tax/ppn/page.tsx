"use client";

import { formatDateToString } from "@/common/helpers/date";
import { formatRupiah } from "@/common/helpers/number-format";
import { formatPPNtaxObject } from "@/common/helpers/ppn-format";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import Layout from "@/components/layout/layout";
import PPNOverviewCard from "@/components/pages/tax/ppn/overview-card";
import { Button } from "@/components/ui/button";
import { Command, CommandInput, CommandList } from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useGetPPN from "@/hooks/ppn/useGetPPN";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import { DateRange } from "react-day-picker";

export default function PPN() {
  const { data, isLoading } = useGetPPN();
  const ppn = data?.data.taxes;

  const router = useRouter();
  const handleRowClick = (
    e: React.MouseEvent<HTMLTableRowElement>,
    ppnId: string
  ) => {
    e.preventDefault();
    router.push(`/unit/tax/ppn/${ppnId}/details`);
  };
  // const [sumIncome, setSumIncome] = useState(0);
  // const [sumOutcome, setSumOutcome] = useState(0);
  // const totalPPN = useMemo(
  //   () => sumOutcome - sumIncome,
  //   [sumOutcome, sumIncome]
  // );\
  // Calculate the sums for PPN Masukan and PPN Keluaran
  const sumIncome = useMemo(() => {
    return (
      ppn
        ?.filter((ppn) => ppn.transaction_type === "PURCHASE")
        .reduce((sum, ppn) => sum + ppn.total_ppn, 0) || 0
    );
  }, [ppn]);

  const sumOutcome = useMemo(() => {
    return (
      ppn
        ?.filter((ppn) => ppn.transaction_type === "SALES")
        .reduce((sum, ppn) => sum + ppn.total_ppn, 0) || 0
    );
  }, [ppn]);

  const totalPPN = useMemo(
    () => sumOutcome - sumIncome,
    [sumOutcome, sumIncome]
  );

  const [date, setDate] = React.useState<DateRange | undefined>(undefined);

  return (
    <Layout>
      <h1 className="align-baseline my-auto font-semibold">
        Pajak Pertambahan Nilai
      </h1>
      <div className="grid grid-cols-3 gap-x-16 mt-4">
        <PPNOverviewCard
          title="PPN Masukan"
          mainText={formatRupiah(sumIncome)}
        />
        <PPNOverviewCard
          title="PPN Keluaran"
          mainText={formatRupiah(sumOutcome)}
        />
        <PPNOverviewCard
          title={`Total PPN (${
            totalPPN >= 0 ? "Kurang Bayar" : "Lebih Bayar"
          })`}
          mainText={formatRupiah(totalPPN)}
        />
      </div>
      <div className="flex justify-between items-center mt-8">
        <div className="grid grid-cols-2 gap-x-6">
          <Command className="rounded-lg border shadow-md w-72">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              {/* <CommandEmpty>No results found.</CommandEmpty> */}
            </CommandList>
          </Command>
          <CalendarDateRangePicker date={date} setDate={setDate} />
        </div>

        <div className="grid grid-cols-2">
          <Link href="/unit/tax/ppn/add">
            <Button>Tambah PPN</Button>
          </Link>
          <Link href="/unit/tax/report/ppn">
            <Button variant={"outline"}>Cetak Keseluruhan</Button>
          </Link>
        </div>
      </div>
      <section className="pt-8 space-y-9 mb-9">
        <div>
          <h2 className="font-semibold mt-2 mb-2">PPN Masukan</h2>
          <div className="h-72 w-full">
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
                      ?.filter((ppn) => ppn.transaction_type === "PURCHASE")
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
                            {formatRupiah(ppn.total_ppn)}
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
                      ?.filter((ppn) => ppn.transaction_type === "SALES")
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
                            {formatRupiah(ppn.total_ppn)}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </ScrollArea>
          </div>
        </div>
      </section>
    </Layout>
  );
}
