"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import Lengkong from "../../../../../public/lengkong.png";
import TablePPN from "@/components/pages/tax/ppn/tabe-ppn";

export default function PPN() {
  const tableHeadersIncome = [
    "Tanggal",
    "Nama Pengusaha Kena Pajak",
    "No. Bukti Transaksi",
    "Objek Pajak",
    "PPN",
  ];
  const tableHeadersOutcome = [
    "Tanggal",
    "Nama Pengusaha Kena Pajak",
    "No. Bukti Transaksi",
    "Objek Pajak",
    "PPN",
  ];
  const tableDataIncome = [
    {
      Tanggal: "12 Oktober 2021",
      "Nama Pengusaha Kena Pajak": "PT Cipta Karya",
      "No. Bukti Transaksi": "1920192019021.0001",
      "Objek Pajak": "Objek Kena Pajak - Dalam Negeri",
      PPN: "10.000.000",
    },
    {
      Tanggal: "12 Oktober 2021",
      "Nama Pengusaha Kena Pajak": "PT Cipta Karya",
      "No. Bukti Transaksi": "1920192019021.0001",
      "Objek Pajak": "Objek Kena Pajak - Dalam Negeri",
      PPN: "20.000.000",
    },
    {
      Tanggal: "12 Oktober 2021",
      "Nama Pengusaha Kena Pajak": "PT Cipta Karya",
      "No. Bukti Transaksi": "1920192019021.0001",
      "Objek Pajak": "Objek Kena Pajak - Dalam Negeri",
      PPN: "40.000.000",
    },
  ];
  const tableDataOutcome = [
    {
      Tanggal: "12 Oktober 2021",
      "Nama Pengusaha Kena Pajak": "PT Cipta Karya",
      "No. Bukti Transaksi": "1920192019021.0001",
      "Objek Pajak": "Objek Kena Pajak - Dalam Negeri",
      PPN: "20.000.000",
    },
    {
      Tanggal: "12 Oktober 2021",
      "Nama Pengusaha Kena Pajak": "PT Cipta Karya",
      "No. Bukti Transaksi": "1920192019021.0001",
      "Objek Pajak": "Objek Kena Pajak - Dalam Negeri",
      PPN: "20.000.000",
    },
    {
      Tanggal: "12 Oktober 2021",
      "Nama Pengusaha Kena Pajak": "PT Cipta Karya",
      "No. Bukti Transaksi": "1920192019021.0001",
      "Objek Pajak": "Objek Kena Pajak - Dalam Negeri",
      PPN: "40.000.000",
    },
  ];
  const handleRowClick = (employees_id: any) => {
    // router.push(`/data-master/employees/details`);
  };
  const [sumIncome, setSumIncome] = useState(0);
  const [sumOutcome, setSumOutcome] = useState(0);
  const totalPPN = useMemo(
    () => sumOutcome - sumIncome,
    [sumOutcome, sumIncome]
  );
  return (
    <section>
      <header>
        <div className="flex justify-center mt-10 space-x-6">
          <div>
            <Image src={Lengkong} alt="bg" width={130} />
          </div>
          <div className="text-center">
            <div className="font-bold text-xl mb-2 max-w-md">
              <h1>BADAN USAHA MILIK DESA LENGKONG</h1>
              <h1>LAPORAN PAJAK PERTAMBAHAN NILAI</h1>
              <h1>UNIT USAHA JASA WISATA</h1>
            </div>
            <h3>
              01/01/2023-31/12/2023 <br />
              (Dalam rupiah)
            </h3>
          </div>
        </div>
        <p className="h-1 w-2/5 mx-auto my-8 bg-black border-0 rounded" />
      </header>
      <div className="px-36 space-y-9 mb-9">
        <div className="text-center">
          <h1 className="font-semibold text-xl">
            LAPORAN PAJAK PERTAMBAHAN NILAI
          </h1>
          <h2>Periode 1 Januari - 31 januari 2023</h2>
        </div>
        <div>
          <h2 className="font-semibold mt-2 mb-2">PPn Masukan</h2>
          <TablePPN
            headers={tableHeadersIncome}
            data={tableDataIncome}
            onSumCalculated={setSumIncome}
            onRowClick={handleRowClick}
          />
        </div>

        <div>
          <h2 className="font-semibold mt-2 mb-2">PPn Keluaran</h2>
          <TablePPN
            headers={tableHeadersOutcome}
            data={tableDataOutcome}
            onSumCalculated={setSumOutcome}
            onRowClick={handleRowClick}
          />
        </div>

        <div className="flex space-x-4 justify-center">
          <h2 className="font-semibold text-xl">
            PPN ({totalPPN < 0 ? "Lebih Bayar" : "Kurang Bayar"}) :
          </h2>
          <p className="font-semibold text-xl">{totalPPN.toLocaleString()}</p>
        </div>
      </div>
    </section>
  );
}
