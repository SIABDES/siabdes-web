import React from 'react';
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

interface TableLaborSourceProps {
  data: Record<string, React.ReactNode>[];
}

export default function TableLaborSource({
  data = [{}],
}: TableLaborSourceProps) {
  const headers = Object.keys(data[0]);
  const dataCell = ['Berasal dari Dalam Desa', 'Berasal dari Luar Desa'];

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header) => (
              <TableCell
                className="border border-black text-center font-bold"
                key={header}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell className="border border-black text-center">
                {row.description}
              </TableCell>
              <TableCell className="border border-black text-center">
                <Input
                  type="number"
                  className="text-center"
                  //   value={row.permanent}
                  placeholder={`Silahkan di isi`}
                  //   onChange={(e) =>
                  //     updateCellValue(rowIndex, 'permanent', e.target.value)
                  //   }
                />
              </TableCell>
              <TableCell className="border border-black text-center">
                <Input
                  type="number"
                  className="text-center"
                  //   value={row.nonPermanent}
                  placeholder="Silahkan di isi"
                  //   onChange={(e) =>
                  //     updateCellValue(rowIndex, 'nonPermanent', e.target.value)
                  //   }
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
              SUM
            </TableCell>
            <TableCell className="border border-black text-center font-bold">
              SUM
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
