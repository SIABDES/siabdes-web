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
import { useSearchParams } from 'next/navigation';

export default function RecapOfProfitSharing() {
  const searchParams = useSearchParams();
  const data = JSON.parse(searchParams.get('data') || '{}');
  const recapOfProfitSharing = data.recapOfProfitSharing || {};
  return (
    <div>
      <h2 className="text-lg font-semibold mt-6 mb-2">F. Rekap Bagi Hasil</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="border border-black text-center font-bold text-black">
              Tahun
            </TableHead>
            <TableHead className="border border-black text-center font-bold text-black">
              SHU BUMDes
            </TableHead>
            <TableHead className="border border-black text-center font-bold text-black">
              Dana SHU PADes
            </TableHead>
            <TableHead className="border border-black text-center font-bold text-black">
              Dana SHU Direksi
            </TableHead>
            <TableHead className="border border-black text-center font-bold text-black">
              Dana SHU Komisaris
            </TableHead>
            <TableHead className="border border-black text-center font-bold text-black">
              SHU Dewan Pengawas
            </TableHead>
            <TableHead className="border border-black text-center font-bold text-black">
              SHU Dana Sosial, dll
            </TableHead>
            <TableHead className="border border-black text-center font-bold text-black">
              Total
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Object.keys(recapOfProfitSharing).map((year) => (
            <TableRow key={year}>
              <TableCell className="border border-black font-bold text-center">
                {year}
              </TableCell>
              {Object.keys(recapOfProfitSharing[year]).map((key) => (
                <TableCell
                  className="border border-black text-center"
                  key={key}
                >
                  {recapOfProfitSharing[year][key]}
                </TableCell>
              ))}
              <TableCell className="border border-black text-center">
                {/* Calculate total for the current year */}
                {Object.keys(recapOfProfitSharing[year]).reduce(
                  (acc, key) =>
                    acc + parseFloat(recapOfProfitSharing[year][key]),
                  0
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell className="border border-black font-bold text-center">
              Total
            </TableCell>
            {Object.keys(
              recapOfProfitSharing[Object.keys(recapOfProfitSharing)[0]] || {}
            ).map((key) => (
              <TableCell className="border border-black text-center" key={key}>
                {/* Calculate total for each column */}
                {Object.keys(recapOfProfitSharing).reduce(
                  (acc, year) =>
                    acc + parseFloat(recapOfProfitSharing[year][key]) || 0,
                  0
                )}
              </TableCell>
            ))}
            <TableCell className="border border-black font-bold text-center"></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
