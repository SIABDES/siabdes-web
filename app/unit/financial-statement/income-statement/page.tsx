'use client';
import React from 'react';
import Layout from '@/components/layout/layout';
import { CalendarDateRangePicker } from '@/components/date-range-picker';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetWtb } from '@/hooks/wtb/useGetWtb';
import Link from 'next/link';

export default function IncomeStatement() {
  const { data, isLoading } = useGetWtb({
    start_occurred_at: new Date(2022, 1, 1),
    end_occurred_at: new Date(2023, 12, 31),
  });
  const accounts = data?.list ?? [];
  const filteredAccounts = accounts.filter(
    (account) => !account.account.is_posisi_keuangan
  );

  function formatDebit(account: any) {
    if (account.account.ref === '6' && account.account.ref === '8') {
      return `(${account.result.laba_rugi.debit})`;
    } else {
      return `${account.result.laba_rugi.debit}`;
    }
  }
  function sum(laba_rugi: any) {
    return laba_rugi.debit + laba_rugi.credit;
  }
  const getRandomYear = (startYear: number, endYear: number) => {
    return Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
  };
  return (
    <Layout>
      <section>
        <header>
          <h1 className="text-2xl font-bold mb-4 text-center">
            Laporan Keuangan Laba Rugi
          </h1>
          <div className="flex justify-between pt-4">
            <h1 className="text-base font-medium mb-4 text-left">
              Entitas Jasa <br />
              Laporan Keuangan Laba Rugi <br />1 Januari 2022 - 31 Desember 2023
            </h1>
            <div className="flex space-x-6 pt-8">
              <CalendarDateRangePicker />
              <Link href="/unit/financial-statement/report/income-statement/preview">
                <Button>Cetak</Button>
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
                <TableHead className="text-center font-bold">2022</TableHead>
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
                filteredAccounts.map((account, index) => (
                  <TableRow key={index + 1}>
                    <TableCell className="text-center">
                      {account.account.ref.complete_ref}
                    </TableCell>
                    <TableCell>{account.account.name}</TableCell>
                    <TableCell className="text-center">
                      {sum(account.result.laba_rugi)}
                    </TableCell>
                    <TableCell className="text-center">
                      {sum(account.result.laba_rugi)}
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
