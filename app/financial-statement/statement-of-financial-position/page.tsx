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

export default function StatementOfFinancialPosition() {
  const { data, isLoading } = useGetWtb();

  const accounts = data?.list;
  console.log(accounts);

  const filteredAccounts = accounts?.filter(
    (account) => account.account.is_posisi_keuangan
  );
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
            <div className="flex space-x-2 pt-8">
              <CalendarDateRangePicker />
              <Button className="">Terapkan</Button>
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
                filteredAccounts.map((account) => (
                  <TableRow key={account.account.id}>
                    <TableCell className="text-center">
                      {account.account.ref}
                    </TableCell>
                    <TableCell>{account.account.name}</TableCell>
                    <TableCell className="text-center">
                      {account.result.posisi_keuangan.debit}
                    </TableCell>
                    <TableCell className="text-center">
                      {account.result.posisi_keuangan.debit}
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
