import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface TableProps {
  data: Record<string, React.ReactNode>[];
  updateRow: (index: number, column: string, value: string) => void;
  addRow: () => void;
  removeRow: (index: number) => void;
}

export const TableStandart: React.FC<TableProps> = ({
  data,
  updateRow,
  addRow,
  removeRow,
}) => {
  const headers = Object.keys(data[0]);

  return (
    <Table>
      <TableHeader className="border">
        <TableRow className="border">
          {headers.map((header) => (
            <TableHead className="border font-black text-center" key={header}>
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="border">
        {data.map((row, index) => (
          <TableRow className="border" key={index.toString()}>
            {headers.map((header, colIndex) => (
              <TableCell className="border" key={colIndex}>
                <input
                  type="text"
                  className="w-full text-center"
                  placeholder="Silahkan di isi"
                  value={row[header]}
                  onChange={(e) => updateRow(index, header, e.target.value)}
                />
              </TableCell>
            ))}
            <TableCell className="border text-center space-y-3">
              <button
                onClick={() => removeRow(index)}
                className="py-1 px-2 border rounded text-sm hover:bg-red-100 mr-2 bg-red-200"
              >
                −
              </button>
              {index === data.length - 1 && (
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
    </Table>
  );
};
