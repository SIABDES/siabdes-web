'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useGetWtb } from '@/hooks/wtb/useGetWtb';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Image from 'next/image';
import Lengkong from '../../../../public/lengkong.png';
import { useSession } from 'next-auth/react';
import { useGetGeneralJournals } from '@/hooks/journals/useGetGeneralJournals';
import { formatDateToString } from '@/common/helpers/date';

export default function GeneralJournalPreview({
  searchParams,
}: {
  searchParams: { start_occurred_at: Date; end_occurred_at: Date };
}) {
  const session = useSession();
  const contentRef = useRef(null);
  const { data, isLoading, error } = useGetGeneralJournals(searchParams);

  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: 'Laporan Jurnal Umum',
  });

  return (
    <>
      <div id="print-controller" className="my-6">
        <div className="mx-auto max-w-6xl flex justify-between">
          <Button variant={'secondary'} asChild>
            <Link href={'/unit/general-journal'}>Kembali ke Jurnal Umum</Link>
          </Button>

          <Button onClick={handlePrint}>Cetak Laporan (PDF)</Button>
        </div>

        <Separator />
      </div>

      <section ref={contentRef} className="max-w-5xl mx-auto">
        <header className="border-b-4 border-black mb-8 pb-4 max-w-3xl mx-auto">
          <div className="flex justify-center mt-10 space-x-6">
            <div>
              <Image src={Lengkong} alt="bg" width={130} />
            </div>
            <div className="text-center">
              <div className="font-bold text-xl mb-2 max-w-md">
                <h1>BADAN USAHA MILIK DESA {session.data?.user.bumdesName}</h1>
                <h1>UNIT USAHA {session.data?.user.unitName}</h1>
                <h1>LAPORAN JURNAL UMUM</h1>
              </div>
              <h3>
                {formatDateToString(searchParams.start_occurred_at)} -{' '}
                {formatDateToString(searchParams.end_occurred_at)}
              </h3>
            </div>
          </div>
          {/* <p className="h-1 w-2/5 mx-auto my-8 bg-black border-0 rounded" /> */}
        </header>

        <div>Laporan Jurnal Umum</div>
      </section>
    </>
  );
}
