import React, { useState } from 'react';
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
import { Input } from '@/components/ui/input';

interface HistoryNetProvitsAndDividendsProps {
  data: WtbResponse;
}

export default function HistoryNetProvitsAndDividends({
  data,
}: HistoryNetProvitsAndDividendsProps) {
  const headers = ['Tahun', 'Keuntungan Bersih', 'Dividen untuk BUMDes'];
  const accounts = data?.list;
  const summary = data?.summary;

  const totalIncomeStatement =
    summary.laba_rugi_bersih.laba_rugi.credit +
    summary.laba_rugi_bersih.laba_rugi.debit;

  const [dividenValue, setDividenValue] = useState('');

  const handleDividenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDividenValue(e.target.value);
  };

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
              {formatNumber(totalIncomeStatement)}
            </TableCell>
            <TableCell className="border border-black text-center">
              <Input
                type="text"
                className="text-center"
                placeholder="Silahkan di isi"
                value={dividenValue}
                onChange={handleDividenChange}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
