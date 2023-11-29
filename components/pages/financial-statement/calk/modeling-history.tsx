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
  noPerdes: string;
  pemerintahDesaRp: string;
  pemerintahDesaPercent: string;
  pihakLainRp: string;
  pihakLainPercent: string;
}

const ModelingHistory = () => {
  const [rows, setRows] = useState<TableRowData[]>([
    {
      tahun: '',
      noPerdes: '',
      pemerintahDesaRp: '',
      pemerintahDesaPercent: '',
      pihakLainRp: '',
      pihakLainPercent: '',
    },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      {
        tahun: '',
        noPerdes: '',
        pemerintahDesaRp: '',
        pemerintahDesaPercent: '',
        pihakLainRp: '',
        pihakLainPercent: '',
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
            <TableHead rowSpan={3} className="border text-center">
              Tahun
            </TableHead>
            <TableHead rowSpan={3} className="border  text-center">
              Nomor Perdes Penyertaan Modal BUMDes
            </TableHead>
            <TableHead colSpan={4} className="border text-center">
              Nilai Penyertaan Modal BUMDes
            </TableHead>
            <TableHead rowSpan={3} className="border  text-center">
              Tindakan
            </TableHead>
          </TableRow>
          <TableRow>
            <TableHead colSpan={2} className="border text-center">
              Pemerintah Desa
            </TableHead>
            <TableHead colSpan={2} className="border text-center">
              Pihak Lain
            </TableHead>
          </TableRow>
          <TableRow>
            <TableHead className="border text-center">Rp</TableHead>
            <TableHead className="border text-center">%</TableHead>
            <TableHead className="border text-center">Rp</TableHead>
            <TableHead className="border text-center">%</TableHead>
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
                  value={row.noPerdes}
                  onChange={(e) => updateRow(index, 'noPerdes', e.target.value)}
                />
              </TableCell>
              <TableCell className="border text-center">
                <input
                  type="text"
                  className="w-full text-center"
                  placeholder="Silahkan di isi"
                  value={row.pemerintahDesaRp}
                  onChange={(e) =>
                    updateRow(index, 'pemerintahDesaRp', e.target.value)
                  }
                />
              </TableCell>
              <TableCell className="border text-center">
                <input
                  type="text"
                  className="w-full text-center"
                  placeholder="Silahkan di isi"
                  value={row.pemerintahDesaPercent}
                  onChange={(e) =>
                    updateRow(index, 'pemerintahDesaPercent', e.target.value)
                  }
                />
              </TableCell>
              <TableCell className="border text-center">
                <input
                  type="text"
                  className="w-full text-center"
                  placeholder="Silahkan di isi"
                  value={row.pihakLainRp}
                  onChange={(e) =>
                    updateRow(index, 'pihakLainRp', e.target.value)
                  }
                />
              </TableCell>
              <TableCell className="border text-center">
                <input
                  type="text"
                  className="w-full text-center"
                  placeholder="Silahkan di isi"
                  value={row.pihakLainPercent}
                  onChange={(e) =>
                    updateRow(index, 'pihakLainPercent', e.target.value)
                  }
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
              {formatIDR(calculateTotal('pemerintahDesaRp'))}
            </TableCell>
            <TableCell className="border text-center">
              {formatIDR(calculateTotal('pemerintahDesaPercent'))}
            </TableCell>
            <TableCell className="border text-center">
              {formatIDR(calculateTotal('pihakLainRp'))}
            </TableCell>
            <TableCell className="border text-center">
              {formatIDR(calculateTotal('pihakLainPercent'))}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default ModelingHistory;
