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
import React from "react";

export default function ClosingEntry() {
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
            <TableHead>Debit</TableHead>
            <TableHead>Kredit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1 Januari 2021</TableCell>
            <TableCell>Pendapatan</TableCell>
            <TableCell>10000</TableCell>
            <TableCell>0</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Layout>
  );
}
