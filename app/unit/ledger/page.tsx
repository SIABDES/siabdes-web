"use client";

import { formatDateToString } from "@/common/helpers/date";
import { formatNumber } from "@/common/helpers/number-format";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { useGetAccounts } from "@/hooks/account/useGetAccounts";
import { useGetLedger } from "@/hooks/ledger/useGetLedger";
import { AccountType } from "@/types/accounts";
import { LedgerTransactionItemType, LedgerType } from "@/types/ledger";
import {
  Autocomplete,
  AutocompleteItem,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { DateRange } from "react-day-picker";

export default function Ledger() {
  const router = useRouter();

  const [selectedAccountId, setSelectedAccountId] = useState<string>("");
  const [date, setDate] = useState<DateRange | undefined>(undefined);

  const { data: getAccounts, isLoading: isAccountsLoading } = useGetAccounts();

  const accounts = useMemo(() => getAccounts ?? [], [getAccounts]);

  const { data: ledgers, isLoading: isLedgersLoading } = useGetLedger({
    account_id: selectedAccountId,
  });

  const transactions: (LedgerTransactionItemType & { no: number })[] =
    ledgers?.transactions.map((transaction, index) => ({
      ...transaction,
      no: index + 1,
    })) ?? [];

  useEffect(() => {
    if (accounts && accounts.length > 0) {
      setSelectedAccountId(accounts[0].id?.toString());
    }
  }, [accounts]);

  const handleGetReportPreview = () => {
    router.push(
      `/unit/ledger/report?start_occurred_at=${date?.from?.toISOString()}&end_occurred_at=${date?.to?.toISOString()}`
    );
  };

  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold mb-4 text-center">Buku Besar</h1>

        <div className="mt-6 mb-8 flex flex-row justify-between items-center">
          <Autocomplete
            key={"account"}
            defaultItems={accounts}
            variant="bordered"
            aria-label="Pilih Akun"
            placeholder="Pilih Akun"
            className="max-w-sm"
            isLoading={isAccountsLoading}
            selectedKey={selectedAccountId}
            isClearable={false}
            onSelectionChange={(item) => setSelectedAccountId(item.toString())}
          >
            {(item) => (
              <AutocompleteItem key={item.id} textValue={item.name}>
                {item.name}
              </AutocompleteItem>
            )}
          </Autocomplete>

          <div className="inline-flex flex-row gap-x-4">
            <CalendarDateRangePicker date={date} setDate={setDate} />

            <Button
              onClick={handleGetReportPreview}
              disabled={!date?.from || !date.to}
            >
              Cetak Buku Besar
            </Button>
          </div>
        </div>

        <Table
          aria-label={`Tabel Buku Besar`}
          isHeaderSticky
          fullWidth
          classNames={{
            base: "max-h-[28rem]",
            table: "min-h-[16rem]",
          }}
        >
          <TableHeader>
            <TableColumn>No</TableColumn>
            <TableColumn>Tanggal Transaksi</TableColumn>
            <TableColumn>Deskripsi</TableColumn>
            <TableColumn>Debit</TableColumn>
            <TableColumn>Kredit</TableColumn>
            <TableColumn>Saldo</TableColumn>
          </TableHeader>

          <TableBody
            items={transactions}
            isLoading={isLedgersLoading}
            loadingContent={<Spinner label="Memuat..." />}
            emptyContent={!isLedgersLoading && "Tidak ada data transaksi"}
          >
            {(item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.no}</TableCell>
                  <TableCell>{formatDateToString(item.occurred_at)}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>
                    {item.is_credit ? 0 : formatNumber(item.amount)}
                  </TableCell>
                  <TableCell>
                    {item.is_credit ? formatNumber(item.amount) : 0}
                  </TableCell>
                  <TableCell>{formatNumber(item.result_balance)}</TableCell>
                </TableRow>
              );
            }}
          </TableBody>
        </Table>
      </div>
    </Layout>
  );
}
