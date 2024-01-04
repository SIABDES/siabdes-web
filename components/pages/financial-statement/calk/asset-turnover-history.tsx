import React, { useMemo } from 'react';
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
import { formatNumber } from '@/common/helpers/number-format';

interface AssetAndTurnoverHistoryProps {
  data: WtbResponse;
}

export default function AssetAndTurnoverHistory({
  data,
}: AssetAndTurnoverHistoryProps) {
  const headers = ['Tahun', 'Asset', 'Omzet'];
  const accounts = data?.list;

  const filteredCurrentAsset = accounts?.filter(
    (account) =>
      account.account.ref.group_ref === '1' &&
      account.account.ref.account_ref.startsWith('1') &&
      account.result.posisi_keuangan.debit !== 0
  );

  const totalCurrentAsset = filteredCurrentAsset?.reduce(
    (total, account) =>
      total +
      account.result.posisi_keuangan.debit -
      account.result.posisi_keuangan.credit,
    0
  );

  const filteredNonCurrentAsset = accounts?.filter(
    (account) =>
      account.account.ref.group_ref === '1' &&
      account.account.ref.account_ref.startsWith('2') &&
      account.result.posisi_keuangan.debit !== 0
  );

  const totalNonCurrentAsset = filteredNonCurrentAsset?.reduce(
    (total, account) =>
      total +
      account.result.posisi_keuangan.debit -
      account.result.posisi_keuangan.credit,
    0
  );

  const totalAsset = useMemo(() => {
    return totalCurrentAsset + totalNonCurrentAsset;
  }, [totalCurrentAsset, totalNonCurrentAsset]);
  return (
    <section>
      {/* <TableWithSum headers={headers} showRowNumber={false} showTotal={false} /> */}
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
          <TableRow>
            <TableCell className="border border-black text-center">
              2023
            </TableCell>
            <TableCell className="border border-black text-center">
              {formatNumber(totalAsset)}
            </TableCell>
            <TableCell className="border border-black text-center">
              ini gimana ya maksudnya?
            </TableCell>
          </TableRow>
        </TableBody>

        {/* <TableFooter>
          <TableRow>
            <TableCell className="text-center">TOTAL</TableCell>
            <TableCell className="text-center">Rp. 1.000.000</TableCell>
            <TableCell className="text-center">Rp. 1.000.000</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </section>
  );
}
