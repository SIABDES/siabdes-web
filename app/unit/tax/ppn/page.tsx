"use client";
import Layout from "@/components/layout/layout";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ClikableTable from "@/components/table/clickable-table";

export default function PPN() {
  const tableHeaders = [
    "No",
    "Nama Pengusaha Kena Pajak",
    "Nomor Bukti Pajak",
    "Objek Pajak",
    "PPN",
  ];
  const tableData = [
    {
      No: "1",
      "Nama Pengusaha Kena Pajak": "PT Cipta Karya",
      "Nomor Bukti Pajak": "1920192019021.0001",
      "Objek Pajak": "Objek Kena Pajak - Dalam Negeri",
      PPN: "10.000.000",
    },
    {
      No: "2",
      "Nama Pengusaha Kena Pajak": "PT Cakrawala",
      "Nomor Bukti Pajak": "1920192019021.0001",
      "Objek Pajak": "Objek Kena Pajak - Luar Negeri",
      PPN: "20.000.000",
    },
    {
      No: "3",
      "Nama Pengusaha Kena Pajak": "PT Abdi Jaya",
      "Nomor Bukti Pajak": "1920192019021.0001",
      "Objek Pajak": "Objek Kena Pajak - Dalam Negeri",
      PPN: "30.000.000",
    },
    {
      No: "4",
      "Nama Pengusaha Kena Pajak": "PT Alam Jaya",
      "Nomor Bukti Pajak": "1920192019021.0001",
      "Objek Pajak": "Objek Kena Pajak - Dalam Negeri",
      PPN: "40.000.000",
    },
  ];
  const handleRowClick = (employees_id: any) => {
    // router.push(`/data-master/employees/details`);
  };
  return (
    <Layout>
      <header className="flex justify-between items-center">
        <h1 className="align-baseline my-auto font-semibold">
          Pajak Pertambahan Nilai
        </h1>
        <Link href="/unit/tax/ppn/add">
          <Button>Tambah PPN</Button>
        </Link>
      </header>
      <section className="pt-8">
        <ClikableTable
          headers={tableHeaders}
          data={tableData}
          onRowClick={handleRowClick}
        />
      </section>
    </Layout>
  );
}
