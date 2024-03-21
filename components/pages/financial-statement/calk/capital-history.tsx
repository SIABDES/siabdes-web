import React from 'react';
import TableWithSum from './table/table-sum';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from '@/components/ui/table';
import { WtbResponse } from '@/types/wtb/response';

interface CapitalHistoryProps {
  data: WtbResponse;
}

export default function CapitalHistory({ data }: CapitalHistoryProps) {
  const headers = ['Sumber Modal', 'Jumlah Modal', '%'];
  const accounts = data?.list;
  const summary = data?.summary;

  const filteredEquity = accounts?.filter(
    (account) =>
      account.account.ref.group_ref === '3' &&
      account.account.ref.account_ref.startsWith('1')
    // account.result.posisi_keuangan.credit !== 0
  );

  const totalEquity = filteredEquity?.reduce(
    (total, account) => total + account.result.posisi_keuangan.credit,
    0
  );

  return (
    <section>
      {/* <TableWithSum headers={headers} showRowNumber={true} showTotal={true} /> */}
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell
                key={index}
                className="border border-black text-center font-bold"
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredEquity?.map((account, rowIndex) => (
            <TableRow key={account.account.id}>
              <TableCell className="border border-black">
                {account.account.name}
              </TableCell>
              <TableCell className="border border-black text-center">{`Rp. ${account.result.posisi_keuangan.credit.toLocaleString()}`}</TableCell>
              <TableCell className="border border-black text-center">
                0
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell className="border border-black text-center font-bold">
              TOTAL
            </TableCell>
            <TableCell className="border border-black text-center font-bold">{`Rp. ${totalEquity?.toLocaleString()}`}</TableCell>
            <TableCell className="border border-black text-center font-bold">
              {totalEquity
                ? `${((totalEquity / totalEquity) * 100).toFixed(2)}%`
                : '0%'}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </section>
  );
}
