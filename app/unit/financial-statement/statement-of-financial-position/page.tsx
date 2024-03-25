"use client";
import React from "react";
import Layout from "@/components/layout/layout";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetWtb } from "@/hooks/wtb/useGetWtb";
import Link from "next/link";
import { DateRange } from "react-day-picker";
import { formatRupiah } from "@/common/helpers/number-format";
import { RetrievalCategory } from "@/types/journals";

export default function StatementOfFinancialPosition() {
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);

  const { data, isLoading } = useGetWtb({
    start_occurred_at: date?.from,
    end_occurred_at: date?.to,
    retrieval_category: RetrievalCategory.FINANCIAL_STATE,
  });

  const accounts = data?.list;

  const filteredAccounts = accounts?.filter(
    (account) => account.account.is_posisi_keuangan
  );
  function sum(posisi_keuangan: any) {
    return posisi_keuangan.debit + posisi_keuangan.credit;
  }
  return (
    <Layout>
      <section>
        <header>
          <h1 className="text-2xl font-bold mb-4 text-center">
            Laporan Keuangan Posisi Keuangan
          </h1>
          <div className="flex justify-between pt-4">
            <h1 className="text-base font-medium mb-4 text-left">
              Entitas Jasa <br />
              Laporan Keuangan Posisi Keuangan <br />1 Januari 2022 - 31
              Desember 2023
            </h1>
            <div className="flex space-x-6 pt-8">
              <CalendarDateRangePicker date={date} setDate={setDate} />
              <Link href="/unit/financial-statement/report/statement-of-financial-position/preview">
                <Button className="">Cetak</Button>
              </Link>
            </div>
          </div>
        </header>

        <section className="pt-8">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="text-center font-bold">
                  Kode Rekening
                </TableHead>
                <TableHead className="text-center font-bold">
                  Nama Akun
                </TableHead>
                <TableHead className="text-center font-bold">2023</TableHead>
                <TableHead className="text-center font-bold">2024</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {isLoading && (
                <>
                  {Array.from(Array(8).keys()).map((_, index) => (
                    <TableRow key={index}>
                      <TableCell colSpan={4}>
                        <Skeleton className="w-full h-[2rem]" />
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              )}

              {filteredAccounts &&
                filteredAccounts.map((account) => (
                  <TableRow key={account.account.id}>
                    <TableCell className="text-center">
                      {account.account.ref.complete_ref}
                    </TableCell>
                    <TableCell>{account.account.name}</TableCell>
                    <TableCell className="text-center">
                      {/* {sum(account.result.posisi_keuangan)} */}
                      {formatRupiah(sum(account.result.posisi_keuangan))}
                    </TableCell>
                    <TableCell className="text-center">
                      {formatRupiah(sum(account.result.posisi_keuangan))}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </section>
      </section>
    </Layout>
  );
}
