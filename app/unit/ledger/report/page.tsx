"use client";

import { formatDateToString } from "@/common/helpers/date";
import { LedgerReportTable } from "@/components/pages/ledger/ledger-report-table";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useGetAllLedgersQuery } from "@/hooks/ledger/useGetAllLedgers";
import { LedgerDataType } from "@/types/ledger";
import { Spinner } from "@nextui-org/react";
import { CaretLeftIcon } from "@radix-ui/react-icons";
import { ChevronLeft, PrinterIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Fragment, useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function LedgerReportPage({
  searchParams,
}: {
  searchParams: { start_occurred_at: string; end_occurred_at: string };
}) {
  const {
    data: getAllLedgers,
    isLoading: isLedgersLoading,
    error,
  } = useGetAllLedgersQuery(searchParams);
  const reportRef = useRef(null);
  const session = useSession();

  const handlePrint = useReactToPrint({
    content: () => reportRef.current,
    documentTitle: `Laporan Buku Besar`,
  });

  if (isLedgersLoading) {
    return (
      <div className="flex flex-1 min-h-screen justify-center items-center">
        <Spinner label="Memuat..." />
      </div>
    );
  }

  if (!getAllLedgers || error) {
    return <p>Terjadi kesalahan. {error?.message}</p>;
  }

  const { accounts } = getAllLedgers.data.data;
  const filteredAccounts: LedgerDataType[] = accounts
    .filter((account) => account.transactions.length > 0)
    .map((account) => ({
      ...account,
      transactions: account.transactions.map((transaction, index) => ({
        ...transaction,
        no: index + 1,
        is_credit: transaction.is_credit,
        is_debit: !transaction.is_credit,
      })),
    }));

  return (
    <>
      <div className="max-w-6xl mx-auto my-12">
        <section className="flex justify-between items-center">
          <Button variant={"outline"} asChild>
            <Link href={"/unit/ledger"} className="inline-flex gap-x-2">
              <ChevronLeft className="h-4 w-4" />
              Kembali
            </Link>
          </Button>

          <Button
            className="inline-flex gap-x-2"
            disabled={!isLedgersLoading && filteredAccounts.length === 0}
            onClick={handlePrint}
          >
            <PrinterIcon className="h-4 w-4" />
            Cetak Buku Besar
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
            <h4 className="text-lg font-semibold">Laporan Buku Besar</h4>

            <h3 className="text-base mt-4">
              {formatDateToString(searchParams.start_occurred_at)} -{" "}
              {formatDateToString(searchParams.end_occurred_at)}
            </h3>
          </div>

          <div className="mt-6">
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
          </div>
        </section>
      </div>
    </>
  );
}
