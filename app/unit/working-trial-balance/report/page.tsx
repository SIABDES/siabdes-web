'use client';

import { formatDateToString } from '@/common/helpers/date';
import { formatNumber } from '@/common/helpers/number-format';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useGetWtb } from '@/hooks/wtb/useGetWtb';
import { RetrievalCategory } from '@/types/journals';
import { Separator } from '@radix-ui/react-separator';
import { ChevronLeft, PrinterIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export default function WTBPreview({
  searchParams,
}: {
  searchParams: { start_occurred_at: string; end_occurred_at: string };
}) {
  const router = useRouter();
  const reportRef = useRef(null);
  const session = useSession();

  const { data, isLoading } = useGetWtb({
    retrieval_category: RetrievalCategory.ALL,
  });

  const accounts = data?.list;
  const summary = data?.summary;

  const filteredAccountsAllZero = accounts?.filter((account) => {
    return (
      account.result.neraca_saldo.debit !== 0 ||
      account.result.neraca_saldo.credit !== 0 ||
      account.result.penyesuaian.debit !== 0 ||
      account.result.penyesuaian.credit !== 0 ||
      account.result.neraca_setelahnya.debit !== 0 ||
      account.result.neraca_setelahnya.credit !== 0 ||
      account.result.laba_rugi.debit !== 0 ||
      account.result.laba_rugi.credit !== 0 ||
      account.result.posisi_keuangan.debit !== 0 ||
      account.result.posisi_keuangan.credit !== 0
    );
  });

  const handlePrint = useReactToPrint({
    content: () => reportRef.current,
    documentTitle: `Laporan Neraca Lajur`,
  });

  return (
    <>
      <div className="max-w-6xl mx-auto my-12">
        <section className="flex justify-between items-center">
          <Button variant={'outline'} asChild>
            <Link
              href={'/unit/working-trial-balance'}
              className="inline-flex gap-x-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Kembali
            </Link>
          </Button>

          <Button
            className="inline-flex gap-x-2"
            // disabled={!isLedgersLoading && filteredAccounts.length === 0}
            onClick={handlePrint}
          >
            <PrinterIcon className="h-4 w-4" />
            Cetak WTB
          </Button>
        </section>

        <Separator className="my-8" />

        <section ref={reportRef} className="px-6">
          <div className="text-center">
            <h1 className="text-lg font-semibold">
              BUMDes {session.data?.user.bumdesName}
            </h1>
            <h2 className="text-lg font-semibold">
              Unit {session.data?.user.unitName}
            </h2>
            <h4 className="text-lg font-semibold">Laporan Neraca Lajur</h4>

            <h3 className="text-base mt-4">
              {formatDateToString(searchParams.start_occurred_at)} -{' '}
              {formatDateToString(searchParams.end_occurred_at)}
            </h3>
          </div>

          <section className="pt-8">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead rowSpan={2} className="text-center font-bold">
                    Nama Akun
                  </TableHead>
                  <TableHead colSpan={2} className="text-center font-bold">
                    Neraca Saldo
                  </TableHead>
                  <TableHead colSpan={2} className="text-center font-bold">
                    Penyesuaian
                  </TableHead>
                  <TableHead colSpan={2} className="text-center font-bold">
                    Neraca Setelahnya
                  </TableHead>
                  <TableHead colSpan={2} className="text-center font-bold">
                    Laba Rugi
                  </TableHead>
                  <TableHead colSpan={2} className="text-center font-bold">
                    Posisi Keuangan
                  </TableHead>
                </TableRow>
                <TableRow>
                  <TableHead className="text-center font-bold">Debit</TableHead>
                  <TableHead className="text-center font-bold">
                    Credit
                  </TableHead>
                  <TableHead className="text-center font-bold">Debit</TableHead>
                  <TableHead className="text-center font-bold">
                    Credit
                  </TableHead>
                  <TableHead className="text-center font-bold">Debit</TableHead>
                  <TableHead className="text-center font-bold">
                    Credit
                  </TableHead>
                  <TableHead className="text-center font-bold">Debit</TableHead>
                  <TableHead className="text-center font-bold">
                    Credit
                  </TableHead>
                  <TableHead className="text-center font-bold">Debit</TableHead>
                  <TableHead className="text-center font-bold">
                    Credit
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {isLoading && (
                  <>
                    {Array.from(Array(8).keys()).map((_, index) => (
                      <TableRow key={index}>
                        <TableCell colSpan={11}>
                          <Skeleton className="w-full h-[2rem]" />
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                )}

                {/* {accounts &&
                  accounts.map((account) =>  */}

                {filteredAccountsAllZero &&
                  filteredAccountsAllZero.length > 0 &&
                  filteredAccountsAllZero.map((account) => (
                    <TableRow
                      key={account.account.id}
                      className="cursor-pointer hover:bg-gray-200 w-full"
                    >
                      <TableCell className="w-28">
                        {account.account.name}
                      </TableCell>
                      <TableCell className="w-28 text-center">
                        {formatNumber(account.result.neraca_saldo.debit)}
                      </TableCell>
                      <TableCell className="w-28 text-center">
                        {formatNumber(account.result.neraca_saldo.credit)}
                      </TableCell>
                      <TableCell className="w-28 text-center">
                        {formatNumber(account.result.penyesuaian.debit)}
                      </TableCell>
                      <TableCell className="w-28 text-center">
                        {formatNumber(account.result.penyesuaian.credit)}
                      </TableCell>
                      <TableCell className="w-28 text-center">
                        {formatNumber(account.result.neraca_setelahnya.debit)}
                      </TableCell>
                      <TableCell className="w-28 text-center">
                        {formatNumber(account.result.neraca_setelahnya.credit)}
                      </TableCell>
                      <TableCell className="w-28 text-center">
                        {formatNumber(account.result.laba_rugi.debit)}
                      </TableCell>
                      <TableCell className="w-28 text-center">
                        {formatNumber(account.result.laba_rugi.credit)}
                      </TableCell>
                      <TableCell className="w-28 text-center">
                        {formatNumber(account.result.posisi_keuangan.debit)}
                      </TableCell>
                      <TableCell className="w-28 text-center">
                        {formatNumber(account.result.posisi_keuangan.credit)}
                      </TableCell>
                    </TableRow>
                  ))}

                <TableRow>
                  <TableCell className="w-28 font-bold">Jumlah</TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(summary?.sum.neraca_saldo.debit ?? 0)}
                  </TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(summary?.sum.neraca_saldo.credit ?? 0)}
                  </TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(summary?.sum.penyesuaian.debit ?? 0)}
                  </TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(summary?.sum.penyesuaian.credit ?? 0)}
                  </TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(summary?.sum.neraca_setelahnya.debit ?? 0)}
                  </TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(summary?.sum.neraca_setelahnya.credit ?? 0)}
                  </TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(summary?.sum.laba_rugi.debit ?? 0)}
                  </TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(summary?.sum.laba_rugi.credit ?? 0)}
                  </TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(summary?.sum.posisi_keuangan.debit ?? 0)}
                  </TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(summary?.sum.posisi_keuangan.credit ?? 0)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-28 font-bold">
                    Laba Rugi Bersih
                  </TableCell>
                  <TableCell className="w-28 font-bold  text-center"></TableCell>
                  <TableCell className="w-28 font-bold  text-center"></TableCell>
                  <TableCell className="w-28 font-bold  text-center"></TableCell>
                  <TableCell className="w-28 font-bold  text-center"></TableCell>
                  <TableCell className="w-28 font-bold  text-center"></TableCell>
                  <TableCell className="w-28 font-bold  text-center"></TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(
                      summary?.laba_rugi_bersih.laba_rugi.debit ?? 0
                    )}
                  </TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(
                      summary?.laba_rugi_bersih.laba_rugi.credit ?? 0
                    )}
                  </TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(
                      summary?.laba_rugi_bersih.posisi_keuangan.debit ?? 0
                    )}
                  </TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(
                      summary?.laba_rugi_bersih.posisi_keuangan.credit ?? 0
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-28 font-bold">Total</TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(summary?.total.neraca_saldo.debit ?? 0)}
                  </TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(summary?.total.neraca_saldo.credit ?? 0)}
                  </TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(summary?.total.penyesuaian.debit ?? 0)}
                  </TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(summary?.total.penyesuaian.credit ?? 0)}
                  </TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(summary?.total.neraca_setelahnya.debit ?? 0)}
                  </TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(summary?.total.neraca_setelahnya.credit ?? 0)}
                  </TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(summary?.total.laba_rugi.debit ?? 0)}
                  </TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(summary?.total.laba_rugi.credit ?? 0)}
                  </TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(summary?.total.posisi_keuangan.debit ?? 0)}
                  </TableCell>
                  <TableCell className="w-28 font-bold  text-center">
                    {formatNumber(summary?.total.posisi_keuangan.credit ?? 0)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>
          {/* <div className="mt-6">
            {!isLedgersLoading &&
              filteredAccounts.map((account) => (
                <div key={account.account_id} className="my-8">
                  <p className="mb-2 text-base font-semibold">
                    ({account.account_ref}) - {account.account_name}
                  </p>
                  <LedgerReportTable
                    account={account}
                    isLoading={isLedgersLoading}
                  />
                </div>
              ))}

            {!isLedgersLoading && filteredAccounts.length === 0 && (
              <div className="text-center">
                <p>Tidak ditemukan data transaksi pada periode ini.</p>
              </div>
            )}
          </div> */}
        </section>
      </div>
    </>
  );
}
