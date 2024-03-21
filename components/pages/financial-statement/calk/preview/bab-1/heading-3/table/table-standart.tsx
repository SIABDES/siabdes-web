import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface TableWithSumProps {
  data: Record<string, React.ReactNode>[];
}

export default function TableStandart({ data = [{}] }: TableWithSumProps) {
  const headers = Object.keys(data[0]);
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

        {/* <TableBody>
          {data.map((row, index) => (
            <TableRow key={index.toString()}>
              {headers.map((header, colIndex) => (
                <TableCell
                  className="border border-black text-center"
                  key={colIndex}
                >
                  <input
                    type="text"
                    className="w-full text-center"
                    // placeholder="Silahkan di isi"
                    // value={row[header]}
                    // onChange={(e) => updateRow(index, header, e.target.value)}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody> */}
        {/* BUAT DATA DUMMY AJA*/}
        <TableBody>
          <TableRow>
            <TableCell className="border border-black text-center ">
              2021
            </TableCell>
            <TableCell className="border border-black text-center ">
              Rp. 70.000.000
            </TableCell>
            <TableCell className="border border-black text-center ">
              Rp. 90.000.000
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-black text-center ">
              2021
            </TableCell>

            <TableCell className="border border-black text-center ">
              Rp. 50.000.000
            </TableCell>
            <TableCell className="border border-black text-center ">
              Rp. 80.000.000
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
