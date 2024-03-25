"use client";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetWtb } from "@/hooks/wtb/useGetWtb";
import { useRouter } from "next/navigation";
import React from "react";

export default function ClosingEntry() {
  const router = useRouter();
  const { data, isLoading } = useGetWtb({
    start_occurred_at: new Date(2022, 1, 1),
    end_occurred_at: new Date(2023, 12, 31),
  });
  const accountCadangan = data?.list.filter(
    (account) => account.account.ref.complete_ref === "3-1002"
  );
  const totalCadangan =
    data?.summary.laba_rugi_bersih.laba_rugi.debit ??
    0 + (data?.summary.laba_rugi_bersih.laba_rugi.credit ?? 0);
  const accounts = data?.list ?? [];
  const filteredAccounts = accounts.filter(
    (account) => !account.account.is_posisi_keuangan
  );
  const pendapatan = filteredAccounts.filter(
    (account) =>
      account.account.ref.group_ref === "4" ||
      account.account.ref.group_ref === "7"
  );
  const totalPendapatan = pendapatan.reduce(
    (acc, account) =>
      acc + account.result.laba_rugi.debit + account.result.laba_rugi.credit,
    0
  );
  const beban = filteredAccounts.filter(
    (account) =>
      account.account.ref.group_ref === "5" ||
      account.account.ref.group_ref === "6" ||
      account.account.ref.group_ref === "8"
  );
  const totalBeban = beban.reduce(
    (acc, account) =>
      acc + account.result.laba_rugi.debit + account.result.laba_rugi.credit,
    0
  );
  const yearNow = new Date().getFullYear();

  return (
    <Layout>
      <header className="flex justify-between items-center mb-5 mr-10">
        <h1 className="text-2xl font-bold  text-center">Jurnal Penutup</h1>
        <Button>Unduh</Button>
      </header>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tanggal</TableHead>
            <TableHead>Akun</TableHead>
            <TableHead className="text-center">Debit</TableHead>
            <TableHead className="text-center">Kredit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pendapatan.map((account) => (
            <TableRow key={account.account.id}>
              <TableCell>31 Desember {yearNow}</TableCell>
              <TableCell>{account.account.name}</TableCell>
              <TableCell className="text-center">
                {account.result.laba_rugi.debit +
                  account.result.laba_rugi.credit}
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>31 Desember {yearNow}</TableCell>
            <TableCell className="pl-10">Ikhtisar Laba/Rugi</TableCell>
            <TableCell></TableCell>
            <TableCell className="text-center">{totalPendapatan}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>31 Desember {yearNow}</TableCell>
            <TableCell>Ikhtisar Laba/Rugi</TableCell>
            <TableCell className="text-center">{totalBeban}</TableCell>
            <TableCell></TableCell>
          </TableRow>
          {beban.map((account) => (
            <TableRow key={account.account.id}>
              <TableCell>31 Desember {yearNow}</TableCell>
              <TableCell className="pl-10">{account.account.name}</TableCell>
              <TableCell></TableCell>
              <TableCell className="text-center">
                {account.result.laba_rugi.debit +
                  account.result.laba_rugi.credit}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>31 Desember {yearNow}</TableCell>
            <TableCell>Ikhtisar Laba/Rugi</TableCell>
            <TableCell className="text-center">{totalPendapatan}</TableCell>
            <TableCell></TableCell>
          </TableRow>
          {accountCadangan?.map((account) => (
            <TableRow key={account.account.id}>
              <TableCell>31 Desember {yearNow}</TableCell>
              <TableCell className="pl-10">{account.account.name}</TableCell>
              <TableCell></TableCell>
              <TableCell className="text-center">{totalCadangan}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={2} className="text-center font-bold">
              TOTAL
            </TableCell>
            <TableCell className="text-center">Total Debit</TableCell>
            <TableCell className="text-center">Total Kredit</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Layout>
  );
}
