import { formatDateToString } from '@/common/helpers/date';
import { formatNumber } from '@/common/helpers/number-format';
import { JournalsPrint } from '@/types/journals';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from '@nextui-org/react';
import React from 'react';

interface JournalsTransactionsTableProps {
  journal: JournalsPrint;
  isLoading: boolean;
}

export function JournalsTransactionsTable({
  journal,
  isLoading,
}: JournalsTransactionsTableProps) {
  const columns: { key: keyof JournalsPrint; label: string }[] = [
    {
      key: 'id',
      label: 'No',
    },
    {
      key: 'date',
      label: 'Tanggal Transaksi',
    },
    {
      key: 'account_name',
      label: 'Nama Akun',
    },
    {
      key: 'account_ref',
      label: 'Ref',
    },
    {
      key: 'debit',
      label: 'Debit',
    },
    {
      key: 'credit',
      label: 'Kredit',
    },
  ];

  return (
    <Table aria-label="Tabel Buku Besar Daftar Transaksi">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody items={account.transactions} isLoading={isLoading}>
        {(transaction) => (
          <TableRow key={transaction.id}>
            {(columnKey) => {
              let value = getKeyValue(transaction, columnKey);

              if (columnKey === 'occurred_at') {
                value = formatDateToString(transaction.occurred_at);
              }

              if (columnKey === 'is_credit') {
                value = transaction.is_credit
                  ? formatNumber(transaction.amount)
                  : 0;
              }

              if (columnKey === 'is_debit') {
                value = transaction.is_credit
                  ? formatNumber(transaction.amount)
                  : 0;
              }

              if (columnKey === 'result_balance') {
                value = formatNumber(transaction.result_balance);
              }

              return <TableCell>{value}</TableCell>;
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
