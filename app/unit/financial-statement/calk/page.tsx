"use client";

import { useState } from "react";
import { TableComponent } from "@/components/table/table";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import Link from "next/link";
import { DateRange } from "react-day-picker";

export default function CALK() {
  const Tabledata = [
    { No: "1", Tanggal: "17 Agustus 2023", Bulan: "Agustus", Tahun: "2023" },
    { No: "2", Tanggal: "17 Agustus 2023", Bulan: "Agustus", Tahun: "2023" },
    { No: "3", Tanggal: "17 Agustus 2023", Bulan: "Agustus", Tahun: "2023" },
    { No: "4", Tanggal: "17 Agustus 2023", Bulan: "Agustus", Tahun: "2023" },
  ];

  const [dateRange, setDateRange] = useState<DateRange>();

  return (
    <Layout>
      <section>
        <header>
          <h1 className="text-2xl font-bold mb-4 text-center ">
            Catatan Atas Laporan Keuangan
          </h1>
          <h1 className="text-center font-bold text-lg mb-1">Entitas Jasa</h1>
          <h1 className="text-center font-bold text-lg mb-5">
            Catatan Atas Laporan Keuangan
          </h1>
          <div className="flex justify-between mb-5">
            <div className="flex space-x-2">
              <CalendarDateRangePicker
                date={dateRange}
                setDate={setDateRange}
              />
              <Button className="">Terapkan</Button>
            </div>
            <Link href={"calk/add-calk"}>
              <Button className="ml-96">Tambah Data CALK</Button>
            </Link>
          </div>
        </header>
        <section>
          <TableComponent data={Tabledata} />
        </section>
      </section>
    </Layout>
  );
}
