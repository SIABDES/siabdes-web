"use client";

import { LedgerReportTable } from "@/components/pages/ledger/ledger-report-table";
import { useGetAllLedgersQuery } from "@/hooks/ledger/useGetAllLedgers";
import { LedgerDataType } from "@/types/ledger";
import { Spinner } from "@nextui-org/react";

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
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Laporan Buku Besar</h1>

        <div className="mt-4">
          {filteredAccounts.map((account) => (
            <LedgerReportTable
              key={account.account_id}
              account={account}
              isLoading={isLedgersLoading}
            />
          ))}
        </div>
      </div>
    </>
  );
}
