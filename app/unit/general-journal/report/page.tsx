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
import { GetAllJournalsRequest } from '@/types/journals';
import { useRouter } from 'next/navigation';
import { Spinner } from '@nextui-org/react';
import { JournalsDataType } from '@/types/journals/table-keys';

export default function GeneralJournalPreview({
  searchParams,
}: {
  searchParams: { start_occurred_at: Date; end_occurred_at: Date };
}) {
  const validatedSearchParams = GetAllJournalsRequest.safeParse(searchParams);

  const session = useSession();
  const contentRef = useRef(null);
  const router = useRouter();

  const {
    data: getAllJournals,
    isLoading: isJournalsLoading,
    error,
  } = useGetGeneralJournals(searchParams);

  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: 'Laporan Jurnal Umum',
  });

  if (!validatedSearchParams.success) {
    router.replace('/unit/general-journal', { scroll: false });
    return null;
  }

  if (isJournalsLoading || !getAllJournals) {
    return (
      <div className="flex flex-1 min-h-screen justify-center items-center">
        <Spinner label="Memuat..." />
      </div>
    );
  }

  if (error) {
    return <p>Terjadi kesalahan. {error?.message}</p>;
  }

  const { journals } = getAllJournals;
  // const filteredJournals: JournalsDataType[] = journals
  //   .filter((journal) => journal.data_transactions.length > 0)
  //   .map((journal) => ({
  //     ...journal,
  //     data_transactions: journal.data_transactions.map(
  //       (transaction, index) => ({
  //         ...transaction,
  //         no: index + 1,
  //         is_credit: transaction.is_credit,
  //         is_debit: !transaction.is_credit,
  //       })
  //     ),
  //   }));

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

        <div>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-black">No.</th>
                <th className="border border-black">Tanggal</th>
                <th className="border border-black">Deskripsi</th>
                <th className="border border-black">Debit</th>
                <th className="border border-black">Kredit</th>
              </tr>
            </thead>
            <tbody>
              {journals.map((journal, index) => (
                <tr key={journal.id}>
                  <td className="border border-black text-center">
                    {index + 1}
                  </td>
                  <td className="border border-black text-center">
                    {formatDateToString(journal.occurred_at)}
                  </td>
                  <td className="border border-black">{journal.description}</td>
                  <td className="border border-black text-right">
                    {journal.description}
                  </td>
                  <td className="border border-black text-right">
                    {journal.unit_id}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>Laporan Jurnal Umum</div>
      </section>
    </>
  );
}
