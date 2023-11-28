import Layout from "@/components/layout/layout";
import React from "react";
import TableWTB from "@/components/table/table-wtb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PatanTable } from "@/components/patan-ui/table";

const WorkingTrialBalance: React.FC = () => {
  const data = [
    {
      namaAkun: "Akun Pos.Keu 1",
      neracaSaldo: { debit: 100000, kredit: 0 },
      penyesuaian: { debit: 0, kredit: 10000 },
      neracaSetelahnya: { debit: 90000, kredit: 0 },
      labaRugi: { debit: 0, kredit: 0 },
      posisiKeuangan: { debit: 90000, kredit: 0 },
    },
    {
      namaAkun: "Akun Pos.Keu 2",
      neracaSaldo: { debit: 0, kredit: 100000 },
      penyesuaian: { debit: 10000, kredit: 0 },
      neracaSetelahnya: { debit: 0, kredit: 90000 },
      labaRugi: { debit: 0, kredit: 0 },
      posisiKeuangan: { debit: 0, kredit: 90000 },
    },
    {
      namaAkun: "Akun Pos.Keu 3",
      neracaSaldo: { debit: 50000, kredit: 0 },
      penyesuaian: { debit: 0, kredit: 0 },
      neracaSetelahnya: { debit: 50000, kredit: 0 },
      labaRugi: { debit: 0, kredit: 0 },
      posisiKeuangan: { debit: 50000, kredit: 0 },
    },
    {
      namaAkun: "Akun Laba Rugi 1",
      neracaSaldo: { debit: 100000, kredit: 0 },
      penyesuaian: { debit: 80000, kredit: 0 },
      neracaSetelahnya: { debit: 180000, kredit: 0 },
      labaRugi: { debit: 180000, kredit: 0 },
      posisiKeuangan: { debit: 0, kredit: 0 },
    },
    {
      namaAkun: "Akun Laba Rugi 2",
      neracaSaldo: { debit: 0, kredit: 100000 },
      penyesuaian: { debit: 0, kredit: 80000 },
      neracaSetelahnya: { debit: 0, kredit: 180000 },
      labaRugi: { debit: 0, kredit: 180000 },
      posisiKeuangan: { debit: 0, kredit: 0 },
    },
    {
      namaAkun: "Akun Laba Rugi 3",
      neracaSaldo: { debit: 0, kredit: 50000 },
      penyesuaian: { debit: 0, kredit: 0 },
      neracaSetelahnya: { debit: 0, kredit: 50000 },
      labaRugi: { debit: 0, kredit: 50000 },
      posisiKeuangan: { debit: 0, kredit: 0 },
    },
    {
      namaAkun: "Akun Pos.Keu 1",
      neracaSaldo: { debit: 100000, kredit: 0 },
      penyesuaian: { debit: 0, kredit: 10000 },
      neracaSetelahnya: { debit: 90000, kredit: 0 },
      labaRugi: { debit: 0, kredit: 0 },
      posisiKeuangan: { debit: 90000, kredit: 0 },
    },
    {
      namaAkun: "Akun Pos.Keu 2",
      neracaSaldo: { debit: 0, kredit: 100000 },
      penyesuaian: { debit: 10000, kredit: 0 },
      neracaSetelahnya: { debit: 0, kredit: 90000 },
      labaRugi: { debit: 0, kredit: 0 },
      posisiKeuangan: { debit: 0, kredit: 90000 },
    },
    {
      namaAkun: "Akun Pos.Keu 3",
      neracaSaldo: { debit: 50000, kredit: 0 },
      penyesuaian: { debit: 0, kredit: 0 },
      neracaSetelahnya: { debit: 50000, kredit: 0 },
      labaRugi: { debit: 0, kredit: 0 },
      posisiKeuangan: { debit: 50000, kredit: 0 },
    },
    {
      namaAkun: "Akun Laba Rugi 1",
      neracaSaldo: { debit: 100000, kredit: 0 },
      penyesuaian: { debit: 80000, kredit: 0 },
      neracaSetelahnya: { debit: 180000, kredit: 0 },
      labaRugi: { debit: 180000, kredit: 0 },
      posisiKeuangan: { debit: 0, kredit: 0 },
    },
    {
      namaAkun: "Akun Laba Rugi 2",
      neracaSaldo: { debit: 0, kredit: 100000 },
      penyesuaian: { debit: 0, kredit: 80000 },
      neracaSetelahnya: { debit: 0, kredit: 180000 },
      labaRugi: { debit: 0, kredit: 180000 },
      posisiKeuangan: { debit: 0, kredit: 0 },
    },
    {
      namaAkun: "Akun Laba Rugi 3",
      neracaSaldo: { debit: 0, kredit: 50000 },
      penyesuaian: { debit: 0, kredit: 0 },
      neracaSetelahnya: { debit: 0, kredit: 50000 },
      labaRugi: { debit: 0, kredit: 50000 },
      posisiKeuangan: { debit: 0, kredit: 0 },
    },
    {
      namaAkun: "Akun Pos.Keu 1",
      neracaSaldo: { debit: 100000, kredit: 0 },
      penyesuaian: { debit: 0, kredit: 10000 },
      neracaSetelahnya: { debit: 90000, kredit: 0 },
      labaRugi: { debit: 0, kredit: 0 },
      posisiKeuangan: { debit: 90000, kredit: 0 },
    },
    {
      namaAkun: "Akun Pos.Keu 2",
      neracaSaldo: { debit: 0, kredit: 100000 },
      penyesuaian: { debit: 10000, kredit: 0 },
      neracaSetelahnya: { debit: 0, kredit: 90000 },
      labaRugi: { debit: 0, kredit: 0 },
      posisiKeuangan: { debit: 0, kredit: 90000 },
    },
    {
      namaAkun: "Akun Pos.Keu 3",
      neracaSaldo: { debit: 50000, kredit: 0 },
      penyesuaian: { debit: 0, kredit: 0 },
      neracaSetelahnya: { debit: 50000, kredit: 0 },
      labaRugi: { debit: 0, kredit: 0 },
      posisiKeuangan: { debit: 50000, kredit: 0 },
    },
    {
      namaAkun: "Akun Laba Rugi 1",
      neracaSaldo: { debit: 100000, kredit: 0 },
      penyesuaian: { debit: 80000, kredit: 0 },
      neracaSetelahnya: { debit: 180000, kredit: 0 },
      labaRugi: { debit: 180000, kredit: 0 },
      posisiKeuangan: { debit: 0, kredit: 0 },
    },
    {
      namaAkun: "Akun Laba Rugi 2",
      neracaSaldo: { debit: 0, kredit: 100000 },
      penyesuaian: { debit: 0, kredit: 80000 },
      neracaSetelahnya: { debit: 0, kredit: 180000 },
      labaRugi: { debit: 0, kredit: 180000 },
      posisiKeuangan: { debit: 0, kredit: 0 },
    },
    {
      namaAkun: "Akun Laba Rugi 3",
      neracaSaldo: { debit: 0, kredit: 50000 },
      penyesuaian: { debit: 0, kredit: 0 },
      neracaSetelahnya: { debit: 0, kredit: 50000 },
      labaRugi: { debit: 0, kredit: 50000 },
      posisiKeuangan: { debit: 0, kredit: 0 },
    },
  ];

  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold mb-4 text-center">Neraca Lajur</h1>
        <Link href="/working-trial-balance/adjustment-journal">
          <Button className="mb-4">Jurnal Penyesuaian</Button>
        </Link>
        <TableWTB data={data} />
        {/* <PatanTable data={data} /> */}
      </div>
    </Layout>
  );
};

export default WorkingTrialBalance;
