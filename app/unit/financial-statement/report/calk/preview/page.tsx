'use client';

import React, { useRef } from 'react';
import BAB2 from '@/components/pages/financial-statement/calk/preview/bab-2/bab-2';
import BAB3 from '@/components/pages/financial-statement/calk/preview/bab-3/bab-3';
import BAB4 from '@/components/pages/financial-statement/calk/preview/bab-4/bab-4';
import BAB1 from '@/components/pages/financial-statement/calk/preview/bab-1/bab-1';
import { useGetWtb } from '@/hooks/wtb/useGetWtb';
import { useReactToPrint } from 'react-to-print';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function Priview() {
  const constenRef = useRef(null);
  const { data, isLoading } = useGetWtb({
    start_occurred_at: new Date(2022, 1, 1),
    end_occurred_at: new Date(2023, 12, 31),
  });
  const handlePrint = useReactToPrint({
    content: () => constenRef.current,
    documentTitle: 'Laporan Catatan Atas Laporan Keuangan',
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
        <BAB1 />
        <BAB2 />
        <BAB3 />
        <BAB4 />
      </section>
    </>
  );
}
