"use client";

import { formatDateToString } from "@/common/helpers/date";
import { formatNumber } from "@/common/helpers/number-format";
import { formatPPNtaxObject } from "@/common/helpers/ppn-format";
import {
  PpnTaxObjectType,
  PpnTransaction,
  PpnTransactionType,
} from "@/types/ppn/ppn";
import { faker } from "@faker-js/faker";
import {
  Chip,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Key } from "react";

interface TableOverviewPpnProps {
  isLoading: boolean;
  taxes: PpnTransaction[];
  type: PpnTransactionType;
}

// export function TableOverviewPpn({ taxes, isLoading }: TableOverviewPpnProps) {
//   const router = useRouter();

//   const handleRowClick = (tax: PpnTransaction) => {
//     router.push(`/unit/tax/ppn/${tax.id}/details`);
//   };

//   return (
//     <div className="h-72 w-full">
//       <ScrollArea className="h-full w-full rounded-md border">
//         <TableView
//           items={taxes}
//           isLoading={isLoading}
//           loadingPlaceholderAmount={7}
//           headers={[
//             "No",
//             "Tanggal",
//             "Nama Pengusaha Kena Pajak",
//             "No. Bukti Transaksi",
//             "Objek Pajak",
//             "PPN",
//             "Nama Barang/Jasa",
//           ]}
//           renderRow={({ item, children, onRowClick }) => {
//             return (
//               <TableRow
//                 key={item.id}
//                 onClick={() => onRowClick?.(item)}
//                 className={cn(
//                   onRowClick ? "cursor-pointer" : "cursor-default",
//                   item.object_names.length === 0
//                     ? "row-span-1"
//                     : item.object_names.length <= 12
//                     ? `row-span-${item.object_names.length}`
//                     : "row-span-12"
//                 )}
//               >
//                 {children}
//               </TableRow>
//             );
//           }}
//           renderRowContent={(item, index) => (
//             <>
//               <TableCell>{index + 1}</TableCell>
//               <TableCell>{formatDateToString(item.transaction_date)}</TableCell>
//               <TableCell>{item.given_to}</TableCell>
//               <TableCell>{item.transaction_number}</TableCell>
//               <TableCell>{formatPPNtaxObject(item.tax_object)}</TableCell>
//               <TableCell>{formatRupiah(item.total_ppn)}</TableCell>

//               {item.object_names.map((name, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{name}</TableCell>
//                 </TableRow>
//               ))}
//             </>
//           )}
//           onRowClick={handleRowClick}
//         />
//       </ScrollArea>
//     </div>
//   );
// }

export function TableOverviewNextPpn({
  taxes,
  isLoading,
  type,
}: TableOverviewPpnProps) {
  const router = useRouter();
  const handleRowClick = (id: string) => {
    router.push(`/unit/tax/ppn/${id}/details`);
  };

  const rows: (PpnTransaction & { key: string })[] = [
    ...taxes.map((tax, index) => ({
      ...tax,
      key: tax.id,
      no: index + 1,
    })),
  ];

  const columns: { key: keyof PpnTransaction | "no"; label: string }[] = [
    {
      key: "no",
      label: "No",
    },
    {
      key: "transaction_date",
      label: "Tanggal",
    },
    {
      key: "given_to",
      label: "Nama Pengusaha Kena Pajak",
    },
    {
      key: "transaction_number",
      label: "No. Bukti Transaksi",
    },
    {
      key: "tax_object",
      label: "Objek Pajak",
    },
    {
      key: "total_ppn",
      label: "PPN",
    },
    {
      key: "object_names",
      label: "Nama Barang/Jasa",
    },
  ];

  return (
    <Table
      aria-label={`Tabel PPN ${
        type === PpnTransactionType.PEMBELIAN ? "Masukan" : "Keluaran"
      }`}
      classNames={{
        base: "max-h-[20rem]",
        table: "min-h-[16rem]",
      }}
      onRowAction={(key) => handleRowClick(key.toString())}
      selectionMode="single"
      isHeaderSticky
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody
        items={rows}
        isLoading={isLoading}
        loadingContent={<Spinner label="Memuat..." />}
        emptyContent={
          !isLoading
            ? `Tidak ditemukan data PPN ${
                type === PpnTransactionType.PEMBELIAN ? "Masukan" : "Keluaran"
              }`
            : undefined
        }
      >
        {(item) => (
          <TableRow key={item.key} className="cursor-pointer">
            {(columnKey) => {
              let value = getKeyValue(item, columnKey);

              const isTransactionDate = columnKey === "transaction_date";
              if (isTransactionDate) {
                value = formatDateToString(value);
              }

              function isTaxObject(
                columnKey: Key,
                value: any
              ): value is PpnTaxObjectType {
                return columnKey === "tax_object" && typeof value === "string";
              }

              function isTotalPpn(columnKey: Key, value: any): value is number {
                return columnKey === "total_ppn" && typeof value === "number";
              }
              if (isTotalPpn(columnKey, value)) {
                value = formatNumber(value);
              }

              if (isTaxObject(columnKey, value)) {
                value = formatPPNtaxObject(value);
              }

              function isObjectNames(
                columnKey: Key,
                value: any
              ): value is string[] {
                return columnKey === "object_names" && Array.isArray(value);
              }

              if (isObjectNames(columnKey, value)) {
                const length = value.length;
                value = (
                  <div className="flex flex-row gap-1.5 flex-wrap max-w-[4rem]">
                    {value.map((name, index) => {
                      if (index === 2) {
                        return (
                          <Chip size="sm" variant="flat" key={index}>
                            {length > 3
                              ? `${length - index} item lainnya...`
                              : name}
                          </Chip>
                        );
                      }
                      if (index > 2) return null;

                      return (
                        <Chip size="sm" variant="flat" key={index}>
                          {name}
                        </Chip>
                      );
                    })}
                  </div>
                );
              }

              return <TableCell>{value}</TableCell>;
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
