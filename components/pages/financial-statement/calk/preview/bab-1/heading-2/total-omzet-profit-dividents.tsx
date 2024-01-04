'use client';

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from '@/components/ui/table';

export default function TotalOmzetProfitDividents() {
  return (
    <div>
      <h2 className="text-lg font-semibold mt-6">
        D. Total Omzet, Keuntungan Bersih dan Dividen/Setoran PADes
      </h2>
      <div className="p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell className="border border-black text-center font-bold">
                Tahun
              </TableCell>
              <TableCell className="border border-black text-center font-bold">
                Total Omzet
              </TableCell>
              <TableCell className="border border-black text-center font-bold">
                Total Keuntungan Bersih
              </TableCell>
              <TableCell className="border border-black text-center font-bold">
                SHU PADes
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="border border-black text-center font-bold"></TableCell>
              <TableCell className="border border-black text-center font-bold"></TableCell>
              <TableCell className="border border-black text-center font-bold"></TableCell>
              <TableCell className="border border-black text-center font-bold"></TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell
                colSpan={2}
                className="border border-black text-center font-bold"
              >
                TOTAL
              </TableCell>
              <TableCell className="border border-black text-center font-bold">
                0
              </TableCell>
              <TableCell className="border border-black text-center font-bold">
                0
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
