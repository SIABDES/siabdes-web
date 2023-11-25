"use client";
import React from "react";
import Layout from "@/components/layout/layout";
import TableFinancialStatement from "@/components/table/table-financial-statement";
import { Button } from "@/components/ui/button";
import { TableComponent } from "@/components/table/table";

export default function statementOfFinancialPosition() {
  const tableTitle = [
    {
      unit: "Jasa",
      title: "Posisi Keuangan",
      range1: "1 Januari 2022",
      range2: "31 Desember 2023",
    },
  ];
  const tableData = [
    {
      KodeRekening: "1101",
      NamaAkun: "Kas",
      T2023: "0",
      T2022: "0",
    },
    {
      KodeRekening: "1102",
      NamaAkun: "Kas di Bank A",
      T2023: "0",
      T2022: "0",
    },
    {
      KodeRekening: "1103",
      NamaAkun: "Kas di Bank B",
      T2023: "0",
      T2022: "0",
    },
    {
      KodeRekening: "1104",
      NamaAkun: "Kas di Bank C",
      T2023: "0",
      T2022: "0",
    },
    {
      KodeRekening: "1105",
      NamaAkun: "Kas Kecil",
      T2023: "0",
      T2022: "0",
    },
    {
      KodeRekening: "1106",
      NamaAkun: "Giro",
      T2023: "0",
      T2022: "0",
    },
    {
      KodeRekening: "1107",
      NamaAkun: "Deposito",
      T2023: "0",
      T2022: "0",
    },
    {
      KodeRekening: "1108",
      NamaAkun: "Piutang Usaha",
      T2023: "0",
      T2022: "0",
    },
    {
      KodeRekening: "1109",
      NamaAkun: "Persediaan Barang Dagangan",
      T2023: "0",
      T2022: "0",
    },
    {
      KodeRekening: "1110",
      NamaAkun: "Persediaan Makan dan Minuman",
      T2023: "0",
      T2022: "0",
    },
    {
      KodeRekening: "1111",
      NamaAkun: "Perlengkapan",
      T2023: "0",
      T2022: "0",
    },
  ];
  const tableFoot = [
    {
      NamaAkun: "JUMLAH ASET",
      T2023: "0",
      T2022: "0",
    },
    {
      NamaAkun: "JUMLAH KEWJIBAN DAN EKUITAS",
      T2023: "0",
      T2022: "0",
    },
  ];
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 text-center">
        Laporan Keuangan Posisi Keuangan
      </h1>
      <Button className="mb-4">Rangeeeeee</Button>
      <h1 className="text-1xl font-bold mb-4 text-left">
        Entitas Jasa <br />
        Laporan Keuangan Posisi Keuangan <br />1 Januari 2022 - 31 Desember 2023
      </h1>

      <TableComponent
        data={tableData}
        onRowClick={() => {
          console.log("row clicked");
        }}
      />
    </Layout>
  );
}
