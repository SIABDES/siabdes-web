'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { WtbType } from '@/types/wtb/account';
import React, { useState } from 'react';

interface TableReviewProps {
  header: string;
  footer: string;
  accounts: WtbType[];
}

export default function TableReview({
  header,
  footer,
  accounts,
}: TableReviewProps) {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell className="border border-black text-center font-bold">
              {header}
            </TableCell>
            <TableCell className="border border-black text-center font-bold">
              Akhir (Rp)
            </TableCell>
            <TableCell className="border border-black text-center font-bold">
              Awal (Rp)
            </TableCell>
            <TableCell className="border border-black text-center font-bold">
              Naik/Turun (Rp)
            </TableCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {accounts?.map((account) => (
            <TableRow key={account.account.id}>
              <TableCell className="border border-black">
                {account.account.name}
              </TableCell>
              <TableCell className="border border-black text-center">
                {/* {account.result.posisi_keuangan.debit} */}
              </TableCell>
              <TableCell className="border border-black text-center">
                {/* {account.result.posisi_keuangan.credit} */}
              </TableCell>
              <TableCell className="border border-black text-center">
                {/* {account.result.posisi_keuangan.debit -
                  account.result.posisi_keuangan.credit} */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell className="border border-black font-bold">
              {footer}
            </TableCell>
            <TableCell className="border border-black text-center font-bold">
              tes
            </TableCell>
            <TableCell className="border border-black text-center font-bold">
              tes
            </TableCell>
            <TableCell className="border border-black text-center font-bold">
              tes
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
