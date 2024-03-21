"use client";

import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Lengkong from "../../../../../../public/lengkong.png";
import Operational from "@/components/pages/financial-statement/income-statement/operational";
import NonOperational from "@/components/pages/financial-statement/income-statement/non-operational";
import TAX from "@/components/pages/financial-statement/income-statement/tax";
import Sign from "@/components/pages/financial-statement/income-statement/sign";
import { useGetWtb } from "@/hooks/wtb/useGetWtb";
import { useReactToPrint } from "react-to-print";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PreviewIncomeStatement() {
  const contentRef = useRef(null);
  const { data, isLoading } = useGetWtb({
    start_occurred_at: new Date(2022, 1, 1),
    end_occurred_at: new Date(2023, 12, 31),
  });

  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: "Laporan Laba Rugi",
  });

  const [totalOperationalLossProfit, setTotalOperationalLossProfit] =
    useState(0);
  const [totalNonOperationalLossProfit, setTotalNonOperationalLossProfit] =
    useState(0);

  const totalProfitLossBeforeTax = useMemo(() => {
    return totalOperationalLossProfit + totalNonOperationalLossProfit;
  }, [totalNonOperationalLossProfit, totalOperationalLossProfit]);

  return (
    <>
      <div id="print-controller" className="my-6">
        <div className="mx-auto max-w-6xl flex justify-between">
          <Button variant={"secondary"} asChild>
            <Link href={"/unit/financial-statement/income-statement"}>
              Kembali ke Laporan Laba Rugi
            </Link>
          </Button>

          <Button onClick={handlePrint}>Cetak Laporan (PDF)</Button>
        </div>

        <Separator />
      </div>

      {/* Ref dipake disini. */}
      {/* Ref buat tandain bagian mana yang pengen di print */}
      <section ref={contentRef} className="max-w-5xl mx-auto">
        <header className="border-b-4 border-black mb-8 pb-4 max-w-3xl mx-auto">
          <div className="flex justify-center mt-10 space-x-6">
            <div>
              <Image src={Lengkong} alt="bg" width={130} />
            </div>
            <div className="text-center">
              <div className="font-bold text-xl mb-2 max-w-md">
                <h1>BADAN USAHA MILIK DESA LENGKONG</h1>
                <h1>LAPORAN LABA RUGI</h1>
                <h1>UNIT USAHA JASA WISATA</h1>
              </div>
              <h3>
                01/01/2023-31/12/2023 <br />
                (Dalam rupiah)
              </h3>
            </div>
          </div>
          {/* <p className="h-1 w-2/5 mx-auto my-8 bg-black border-0 rounded" /> */}
        </header>

        <section className="px-36">
          {!isLoading && data && (
            <>
              <Operational
                accounts={data.list}
                setTotalOperationalLossProfit={setTotalOperationalLossProfit}
              />
              <NonOperational
                accounts={data.list}
                setTotalNonOperationalLossProfit={
                  setTotalNonOperationalLossProfit
                }
              />
              <TAX
                accounts={data.list}
                totalProfitLossBeforeTax={totalProfitLossBeforeTax}
              />
              <Sign />
            </>
          )}
        </section>
      </section>
    </>
  );
}
