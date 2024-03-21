import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function ModelingHistory() {
  return (
    <div>
      <h2 className="text-lg font-semibold mt-6">C. Riwayat Pemodelan</h2>
      <div className="p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell
                className="border border-black text-center font-bold"
                rowSpan={3}
              >
                Tahun
              </TableCell>
              <TableCell
                className="border border-black text-center font-bold"
                rowSpan={3}
              >
                Nomor Perdes Penyertaan Modal BUMDes
              </TableCell>
              <TableCell
                className="border border-black text-center font-bold"
                colSpan={4}
              >
                Nilai Penyertaan Modal BUMDes
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                className="border border-black text-center font-bold"
                colSpan={2}
              >
                Pemerintah Desa
              </TableCell>
              <TableCell
                className="border border-black text-center font-bold"
                colSpan={2}
              >
                Pihak Lain
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border border-black text-center font-bold">
                Rp
              </TableCell>
              <TableCell className="border border-black text-center font-bold">
                %
              </TableCell>
              <TableCell className="border border-black text-center font-bold">
                Rp
              </TableCell>
              <TableCell className="border border-black text-center font-bold">
                %
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="border border-black text-center">
                2020
              </TableCell>
              <TableCell className="border border-black text-center">
                31000
              </TableCell>
              <TableCell className="border border-black text-center">
                21000
              </TableCell>
              <TableCell className="border border-black text-center">
                14000
              </TableCell>
              <TableCell className="border border-black text-center">
                45000
              </TableCell>
              <TableCell className="border border-black text-center">
                13000
              </TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell className="border border-black text-center font-bold">
                Jumlah
              </TableCell>
              <TableCell className="border border-black text-center font-bold">
                31000
              </TableCell>
              <TableCell className="border border-black text-center font-bold">
                21000
              </TableCell>
              <TableCell className="border border-black text-center font-bold">
                14000
              </TableCell>
              <TableCell className="border border-black text-center font-bold">
                45000
              </TableCell>
              <TableCell className="border border-black text-center font-bold">
                13000
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
