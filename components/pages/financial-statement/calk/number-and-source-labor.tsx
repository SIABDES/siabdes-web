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
            <TableHead className="text-center font-semibold">Uraian</TableHead>
            <TableHead className="text-center font-semibold">
              Tenaga Kerja Tetap
            </TableHead>
            <TableHead className="text-center font-semibold">
              Tenaga Kerja Tidak Tetap
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell className="text-center">{row.description}</TableCell>
              <TableCell className="text-center">
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
              <TableCell className="text-center">
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
            <TableCell className="text-center">Total Tenaga Kerja</TableCell>
            <TableCell className="text-center">
              {calculateColumnSum('permanent')}
            </TableCell>
            <TableCell className="text-center">
              {calculateColumnSum('nonPermanent')}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </section>
  );
}
