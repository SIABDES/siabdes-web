import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface TableWithSumProps {
  data: Record<string, React.ReactNode>[];
}

export default function TableWithSum({ data = [{}] }: TableWithSumProps) {
  const headers = Object.keys(data[0]);
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell className="border border-black text-center font-bold">
              No
            </TableCell>
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
              <TableCell className="border border-black text-center">
                {index + 1}
              </TableCell>
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
              1
            </TableCell>
            <TableCell className="border border-black text-center ">
              Pendapatan Pengelolaan Wisata Waduk Cacaban
            </TableCell>
            <TableCell className="border border-black text-center ">
              Rp. 10.000.000
            </TableCell>
            <TableCell className="border border-black text-center ">
              Rp. 60.000.000
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-black text-center ">
              2
            </TableCell>
            <TableCell className="border border-black text-center ">
              Pendapatan Penjualan Baju Adat
            </TableCell>
            <TableCell className="border border-black text-center ">
              Rp. 7.000.000
            </TableCell>
            <TableCell className="border border-black text-center ">
              Rp. 34.000.000
            </TableCell>
          </TableRow>
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell
              colSpan={2}
              className="border border-black text-center font-bold"
            >
              Jumlah
            </TableCell>
            <TableCell className="border border-black text-center font-bold">
              Rp. 17.000.000
            </TableCell>
            <TableCell className="border border-black text-center font-bold">
              Rp. 94.000.000
            </TableCell>
            {/* {headers.map((header, colIndex) => (
              <TableCell
                className="border border-black text-center font-bold"
                key={colIndex}
              >
                {calculateColumnSum(header)}
              </TableCell>
            ))} */}
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
