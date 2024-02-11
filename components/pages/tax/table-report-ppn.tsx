import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatDateToString } from '@/common/helpers/date';
import { formatRupiah } from '@/common/helpers/number-format';
import { formatPPNtaxObject } from '@/common/helpers/ppn-format';
import { PpnTransaction } from '@/types/ppn/ppn';
import { Skeleton } from '@/components/ui/skeleton';

interface TableReportPPNProps {
  data: PpnTransaction[] | undefined;
  isLoading: boolean;
}

export default function TableReportPPN({
  data,
  isLoading,
}: TableReportPPNProps) {
  const totalDPP = data?.reduce((sum, item) => sum + item.total_dpp, 0) ?? 0;
  const totalPPN = data?.reduce((sum, item) => sum + item.total_ppn, 0) ?? 0;
  return (
    <div className="overflow-x-auto">
      <Table className="relative w-full">
        <TableHeader>
          <TableRow>
            <TableCell className="border border-black font-black bg-white">
              No
            </TableCell>
            <TableCell className="border border-black font-black bg-white">
              Tanggal
            </TableCell>
            <TableCell className="border border-black font-black bg-white">
              Nama Pengusaha Kena Pajak
            </TableCell>
            <TableCell className="border border-black font-black bg-white">
              No. Bukti Transaksi
            </TableCell>
            <TableCell className="border border-black font-black bg-white">
              Nama Barang/Jasa
            </TableCell>
            <TableCell className="border border-black font-black bg-white">
              Objek Pajak
            </TableCell>
            <TableCell className="border border-black font-black bg-white">
              Dasar Pengenaan Pajak
            </TableCell>
            <TableCell className="border border-black font-black bg-white">
              PPN
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <>
              {Array.from(Array(3).keys()).map((_, index) => (
                <TableRow key={index}>
                  <TableCell className="px-6 py-4">
                    <Skeleton className="w-full h-[2rem]" />
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <Skeleton className="w-full h-[2rem]" />
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <Skeleton className="w-full h-[2rem]" />
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <Skeleton className="w-full h-[2rem]" />
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <Skeleton className="w-full h-[2rem]" />
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <Skeleton className="w-full h-[2rem]" />
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <Skeleton className="w-full h-[2rem]" />
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <Skeleton className="w-full h-[2rem]" />
                  </TableCell>
                </TableRow>
              ))}
            </>
          ) : (
            data?.map((item, index) => {
              const itemLength = item.object_names.length;
              return (
                <>
                  <TableRow key={item.id}>
                    <TableCell
                      rowSpan={itemLength}
                      className="border border-black bg-white"
                    >
                      {index + 1}
                    </TableCell>
                    <TableCell
                      rowSpan={itemLength}
                      className="border border-black bg-white"
                    >
                      {formatDateToString(item.transaction_date)}
                    </TableCell>
                    <TableCell
                      rowSpan={itemLength}
                      className="border border-black bg-white"
                    >
                      {item.given_to}
                    </TableCell>
                    <TableCell
                      rowSpan={itemLength}
                      className="border border-black bg-white"
                    >
                      {item.transaction_number}
                    </TableCell>
                    <TableCell className="border border-black bg-white">
                      {item.object_names[0]}
                    </TableCell>
                    <TableCell
                      rowSpan={itemLength}
                      className="border border-black bg-white"
                    >
                      {formatPPNtaxObject(item.tax_object)}
                    </TableCell>
                    <TableCell
                      rowSpan={itemLength}
                      className="border border-black bg-white"
                    >
                      {formatRupiah(item.total_dpp)}
                    </TableCell>
                    <TableCell
                      rowSpan={itemLength}
                      className="border border-black bg-white"
                    >
                      {formatRupiah(item.total_ppn)}
                    </TableCell>
                  </TableRow>
                  {item.object_names.slice(1).map((name, index) => (
                    <TableRow key={index}>
                      <TableCell className="border border-black bg-white">
                        {name}
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              );
            })
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell
              colSpan={6}
              className="border border-black font-black bg-white text-end"
            >
              Total
            </TableCell>
            <TableCell className="border border-black font-black bg-white">
              {formatRupiah(totalDPP)}
            </TableCell>
            <TableCell className="border border-black font-black bg-white">
              {formatRupiah(totalPPN)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
