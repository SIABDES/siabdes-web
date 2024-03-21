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
import { Input } from '@/components/ui/input';

interface RowData {
  description: string;
  permanent: string;
  nonPermanent: string;
}

export default function CurrentNumberAndSourcesOfLabor() {
  const [data, setData] = useState<RowData[]>([
    { description: 'Berasal dari Dalam Desa', permanent: '', nonPermanent: '' },
    { description: 'Berasal dari Luar Desa', permanent: '', nonPermanent: '' },
  ]);

  const updateCellValue = (
    rowIndex: number,
    columnName: keyof RowData,
    value: string
  ) => {
    const newData = [...data];
    newData[rowIndex][columnName] = value;
    setData(newData);
  };

  const calculateColumnSum = (columnName: keyof RowData) => {
    const columnValues = data.map((row) => parseFloat(row[columnName]) || 0);
    const sum = columnValues.reduce((acc, val) => acc + val, 0);
    return isNaN(sum) ? '...' : `${sum} Orang`;
  };

  return (
    <section>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell className="border border-black text-center font-bold">
              Uraian
            </TableCell>
            <TableCell className="border border-black text-center font-bold">
              Tenaga Kerja Tetap
            </TableCell>
            <TableCell className="border border-black text-center font-bold">
              Tenaga Kerja Tidak Tetap
            </TableCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell className="border border-black">
                {row.description}
              </TableCell>
              <TableCell className="border border-black text-center ">
                <Input
                  type="number"
                  className="text-center"
                  value={row.permanent}
                  placeholder={`Silahkan di isi`}
                  onChange={(e) =>
                    updateCellValue(rowIndex, 'permanent', e.target.value)
                  }
                />
              </TableCell>
              <TableCell className="border border-black text-center">
                <Input
                  type="number"
                  className="text-center"
                  value={row.nonPermanent}
                  placeholder="Silahkan di isi"
                  onChange={(e) =>
                    updateCellValue(rowIndex, 'nonPermanent', e.target.value)
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell className="border border-black text-center font-bold">
              Total Tenaga Kerja
            </TableCell>
            <TableCell className="border border-black text-center font-bold">
              {calculateColumnSum('permanent')}
            </TableCell>
            <TableCell className="border border-black text-center font-bold">
              {calculateColumnSum('nonPermanent')}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </section>
  );
}
