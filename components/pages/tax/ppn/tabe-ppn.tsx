import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from '@/components/ui/table';
import React from 'react';

interface TablePPNProps {
  headers: string[];
  data: any[];
  onSumCalculated: (sum: number) => void;
  onRowClick: (rowData: any) => void;
}

export default function TablePPN({
  headers,
  data,
  onSumCalculated,
  onRowClick,
}: TablePPNProps) {
  const sumPPN = data.reduce(
    (sum, row) => sum + parseFloat(row.PPN.replace(/\./g, '')),
    0
  );

  onSumCalculated(sumPPN);
  return (
    <ScrollArea className="h-full w-full rounded-md border">
      <div className="overflow-x-auto">
        <Table className="table-auto min-w-full border-collapse border border-gray-300">
          <TableHeader>
            <TableRow>
              <TableHead className="p-4 text-left bg-gray-200 font-bold border border-gray-300">
                No
              </TableHead>
              {headers.map((header, index) => (
                <TableHead
                  key={index}
                  className="p-4 text-left bg-gray-200 font-bold border border-gray-300"
                >
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="transition-all hover:bg-gray-100 cursor-pointer"
              >
                <TableCell className="p-4 border border-gray-300">
                  {rowIndex + 1}
                </TableCell>
                {headers.map((header, colIndex) => (
                  <TableCell
                    key={colIndex}
                    onClick={() => onRowClick(row)}
                    className="p-4 border border-gray-300"
                  >
                    {row[header]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell
                colSpan={headers.length}
                className="text-center p-4 border border-gray-300"
              >
                TOTAL
              </TableCell>
              <TableCell className="text-center border border-gray-300">
                {`Rp. ${sumPPN.toLocaleString('id-ID')}`}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </ScrollArea>
  );
}
