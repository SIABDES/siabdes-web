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

interface TableRowData {
  tahun: string;
  totalOmzet: string;
  totalKeuntungan: string;
  shu: string;
}

const TotalOmzetProfitDividents = () => {
  const [rows, setRows] = useState<TableRowData[]>([
    {
      tahun: '',
      totalOmzet: '',
      totalKeuntungan: '',
      shu: '',
    },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      {
        tahun: '',
        totalOmzet: '',
        totalKeuntungan: '',
        shu: '',
      },
    ]);
  };

  const updateRow = (
    index: number,
    column: keyof TableRowData,
    value: string
  ) => {
    const updatedRows = [...rows];
    updatedRows[index][column] = value;
    setRows(updatedRows);
  };

  const removeRow = (index: number) => {
    if (rows.length > 1) {
      const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
      setRows(updatedRows);
    }
  };

  const formatIDR = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(value);
  };

  const calculateTotal = (column: keyof TableRowData) => {
    return rows.reduce(
      (total, row) => total + parseFloat(row[column] || '0'),
      0
    );
  };
  return (
    <div>
      <h1 className="p-2 font-bold text-lg mt-4">Riwayat Pemodelan</h1>
      <Table className="border ">
        <TableHeader className="bg-slate-300">
          <TableRow>
            <TableHead className="border text-center">Tahun</TableHead>
            <TableHead className="border  text-center">Total Omzet</TableHead>
            <TableHead className="border text-center">
              Total Keuntungan Bersih
            </TableHead>
            <TableHead className="border  text-center">SHU PADes</TableHead>
            <TableHead className="border  text-center">Tindakan</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="border text-center">
                <input
                  type="text"
                  className="w-full text-center"
                  placeholder="Silahkan di isi"
                  value={row.tahun}
                  onChange={(e) => updateRow(index, 'tahun', e.target.value)}
                />
              </TableCell>
              <TableCell className="border text-center">
                <input
                  type="text"
                  className="w-full text-center"
                  placeholder="Silahkan di isi"
                  value={row.totalOmzet}
                  onChange={(e) =>
                    updateRow(index, 'totalOmzet', e.target.value)
                  }
                />
              </TableCell>
              <TableCell className="border text-center">
                <input
                  type="text"
                  className="w-full text-center"
                  placeholder="Silahkan di isi"
                  value={row.totalKeuntungan}
                  onChange={(e) =>
                    updateRow(index, 'totalKeuntungan', e.target.value)
                  }
                />
              </TableCell>
              <TableCell className="border text-center">
                <input
                  type="text"
                  className="w-full text-center"
                  placeholder="Silahkan di isi"
                  value={row.shu}
                  onChange={(e) => updateRow(index, 'shu', e.target.value)}
                />
              </TableCell>
              <TableCell className="border text-center space-y-3">
                <button
                  onClick={() => removeRow(index)}
                  className="py-1 px-2 border rounded text-sm hover:bg-red-100 mr-2 bg-red-200"
                >
                  −
                </button>
                {index === rows.length - 1 && (
                  <button
                    onClick={addRow}
                    className="py-1 px-2 border rounded text-sm hover:bg-green-100 mr-2 bg-green-200"
                  >
                    +
                  </button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={2} className="border text-center">
              TOTAL
            </TableCell>
            <TableCell className="border text-center">
              {formatIDR(calculateTotal('totalKeuntungan'))}
            </TableCell>
            <TableCell className="border text-center">
              {formatIDR(calculateTotal('shu'))}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default TotalOmzetProfitDividents;
