'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Lengkong from '../../../../../../public/lengkong.png';
import Asset from '@/components/pages/financial-statement/statement-of-financial-position/asset';
import LiabilityEquity from '@/components/pages/financial-statement/statement-of-financial-position/liability-equity';
import Sign from '@/components/pages/financial-statement/statement-of-financial-position/sign';
import { useGetWtb } from '@/hooks/wtb/useGetWtb';
import { useReactToPrint } from 'react-to-print';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function StatementOfFinancialPosition() {
  const constenRef = useRef(null);
  const { data, isLoading } = useGetWtb({
    start_occurred_at: new Date(2023, 2, 1),
    end_occurred_at: new Date(2023, 2, 28),
  });
  // const { data: Awal, isLoading: asd } = useGetWtb({
  //   start_occurred_at: new Date(2023, 2, 1),
  //   end_occurred_at: new Date(2023, 2, 28),
  // });

  const handlePrint = useReactToPrint({
    content: () => constenRef.current,
    documentTitle: 'Laporan Posisi Keuangan',
  });

  return (
    <>
      <div id="print-controller" className="my-6">
        <div className="mx-auto max-w-6xl flex justify-between">
          <Button variant={'secondary'} asChild>
            <Link href={'/unit/financial-statement/income-statement'}>
              Kembali ke Laporan Laba Rugi
            </Link>
          </Button>

          <Button onClick={handlePrint}>Cetak Laporan (PDF)</Button>
        </div>

        <Separator />
      </div>

      <section ref={constenRef} className="max-w-5xl mx-auto">
        <header>
          <div className="flex justify-center mt-10 space-x-6">
            <div>
              <Image src={Lengkong} alt="bg" width={130} />
            </div>
            <div className="text-center">
              <div className="font-bold text-xl mb-2 max-w-md">
                <h1>BADAN USAHA MILIK DESA LENGKONG</h1>
                <h1>LAPORAN POSISI KEUANGAN</h1>
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
        <section className="px-36">
          {!isLoading && data && (
            <>
              <Asset accounts={data.list} />
              <LiabilityEquity data={data} />
              <Sign />
            </>
          )}
        </section>
      </section>
    </>
  );
}
