'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import useGetPPN from '@/hooks/ppn/useGetPPN';
import Link from 'next/link';
import React, { useMemo, useRef } from 'react';
import Image from 'next/image';
import Lengkong from '@/public/lengkong.png';
import { useReactToPrint } from 'react-to-print';
import { formatRupiah, numberToWordsID } from '@/common/helpers/number-format';
import TableReportPPN from '@/components/pages/tax/table-report-ppn';
import Sign from '@/components/pages/tax/sign';

export default function PPNPurchasePreview() {
  const { data, isLoading } = useGetPPN();
  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: 'Laporan Pajak Pertambahan Nilai Masukan',
  });
  const ppn = data?.data.taxes;

  const totalDPPPurchase = useMemo(() => {
    return (
      ppn
        ?.filter((ppn) => ppn.transaction_type === 'PURCHASE')
        .reduce((sum, item) => sum + item.total_dpp, 0) ?? 0
    );
  }, [ppn]);

  const totalPPNPurchase = useMemo(() => {
    return (
      ppn
        ?.filter((ppn) => ppn.transaction_type === 'PURCHASE')
        .reduce((sum, item) => sum + item.total_ppn, 0) ?? 0
    );
  }, [ppn]);
  return (
    <>
      <div id="print-controller" className="my-6">
        <div className="mx-auto max-w-6xl flex justify-between">
          <Button variant={'secondary'} asChild>
            <Link href={'/unit/tax/ppn'}>Kembali ke halaman PPN</Link>
          </Button>

          <Button onClick={handlePrint}>Cetak Laporan (PDF)</Button>
        </div>

        <Separator />
      </div>

      <section ref={contentRef} className="max-w-full mx-auto">
        <header>
          <div className="flex justify-center mt-10 space-x-6">
            <div>
              {/* <Image src={Lengkong} alt="bg" width={130} /> */}
              <Image src={Lengkong} alt="bg" width={130} />
            </div>
            <div className="text-center">
              <div className="font-bold text-xl mb-2 max-w-md">
                <h1>BADAN USAHA MILIK DESA LENGKONG</h1>
                <h1>UNIT USAHA JASA WISATA</h1>
              </div>
              <h3>Desa Lengkong, Kec. Bojongsoang,</h3>
              <h3>Kab. Bandung, Provinsi Jawa Barat</h3>
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
          {/* if (activeTransactionType == 'PEMBELIAN') {
            
          } */}
          <div>
            <h2 className="font-semibold mt-2 mb-2">PPN Masukan</h2>

            <TableReportPPN
              data={ppn?.filter((ppn) => ppn.transaction_type === 'PURCHASE')}
              isLoading={isLoading}
            />
          </div>
          <div className="border p-4 flex flex-col items-center border-black rounded-lg">
            <div className="font-bold">
              Dasar Pengenaan Pajak Masukan:{' '}
              {`${formatRupiah(totalDPPPurchase)}`}
            </div>
            <p className="h-0.5 my-2 w-full bg-black border-0 rounded" />
            <div>{`Terbilang: ${numberToWordsID(totalDPPPurchase)}`} </div>
          </div>
          <div className="border p-4 flex flex-col justify-center items-center border-black rounded-lg">
            <div className="font-bold">
              Pajak Pertambahan Nilai Masukan:{' '}
              {`${formatRupiah(totalPPNPurchase)}`}
            </div>
            <p className="h-0.5 my-2 w-full bg-black border-0 rounded" />
            <div>{`Terbilang: ${numberToWordsID(totalPPNPurchase)}`}</div>
          </div>
        </div>
        <div className="px-36">
          <Sign />
        </div>
      </section>
    </>
  );
}
