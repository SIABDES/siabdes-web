import { formatDateToString } from "@/common/helpers/date";
import { formatNumber } from "@/common/helpers/number-format";
import {
  LedgerAccountDetailType,
  LedgerTransactionItemDataType,
} from "@/types/ledger";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";

interface LedgerReportTableProps {
  account: LedgerAccountDetailType;
  isLoading: boolean;
}

export function LedgerReportTable({
  account,
  isLoading,
}: LedgerReportTableProps) {
  const columns: { key: keyof LedgerTransactionItemDataType; label: string }[] =
    [
      {
        key: "no",
        label: "No",
      },
      {
        key: "occurred_at",
        label: "Tanggal",
      },
      {
        key: "description",
        label: "Deskripsi",
      },
      {
        key: "is_credit",
        label: "Kredit",
      },
      {
        key: "is_debit",
        label: "Debit",
      },
      {
        key: "result_balance",
        label: "Saldo",
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

              if (columnKey === "occurred_at") {
                value = formatDateToString(transaction.occurred_at);
              }

              if (columnKey === "is_credit") {
                value = transaction.is_credit
                  ? formatNumber(transaction.amount)
                  : 0;
              }

              if (columnKey === "is_debit") {
                value = transaction.is_credit
                  ? formatNumber(transaction.amount)
                  : 0;
              }

              if (columnKey === "result_balance") {
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
