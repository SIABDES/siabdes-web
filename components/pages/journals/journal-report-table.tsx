import React from 'react';
import { formatDateToString } from '@/common/helpers/date';
import { formatNumber } from '@/common/helpers/number-format';
import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  cn,
  getKeyValue,
} from '@nextui-org/react';
import {
  JournalsDataType,
  JournalsTransactionItemDataType,
} from '@/types/journals/table-keys';

type JournalReportTableProps = {
  journal: JournalsDataType;
  isLoading: boolean;
};

export function JournalReportTable({
  journal,
  isLoading,
}: JournalReportTableProps) {
  const columns: {
    key: keyof JournalsTransactionItemDataType;
    label: string;
  }[] = [
    {
      key: 'no',
      label: 'No',
    },
    {
      key: 'occurred_at',
      label: 'Tanggal',
    },
    {
      key: 'description',
      label: 'Deskripsi',
    },
    {
      key: 'is_debit',
      label: 'Debit',
    },
    {
      key: 'is_credit',
      label: 'Kredit',
    },
  ];

  return (
    <Table
      aria-label="Tabel Buku Besar Daftar Transaksi"
      className="break-after-avoid-page"
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody
        items={journal.transactions}
        isLoading={isLoading}
        loadingContent={<Spinner label="Memuat..." />}
        emptyContent={
          !isLoading && 'Tidak ditemukan data transaksi pada akun ini.'
        }
      >
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
                value = !transaction.is_credit
                  ? formatNumber(transaction.amount)
                  : 0;
              }

              //   if (columnKey === 'result_balance') {
              //     value = formatNumber(transaction.result_balance);
              //   }

              const isLastItem =
                columnKey === 'is_debit' &&
                transaction.no === journal.transactions.length;

              return (
                <TableCell className={cn(isLastItem && 'font-semibold')}>
                  {value}
                </TableCell>
              );
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
