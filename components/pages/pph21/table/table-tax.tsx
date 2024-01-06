import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import React from 'react';

const TaxRateTable = () => {
  // Define the rows of the table
  const taxs = [
    { rate: '5%', amount: '14.400.000', result: '720.000' },
    { rate: '15%', amount: '0', result: '0' },
    { rate: '25%', amount: '0', result: '0' },
    { rate: '30%', amount: '0', result: '0' },
    { rate: '35%', amount: '0', result: '0' },
  ];

  const additionalTaxs = [
    {
      rate: '20%',
      amount: '0',
      result: '0',
      note: 'Tarif Tambahan apabila Wajib Pajak tidak memiliki NPWP',
    },
  ];

  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full text-sm divide-y divide-gray-200">
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableCell className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
              Tarif Pajak
            </TableCell>
            <TableCell className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
              Rp
            </TableCell>
            <TableCell className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
              =
            </TableCell>
            <TableCell className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
              Jumlah (Rp)
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white divide-y divide-gray-200">
          {taxs.map((tax, index) => (
            <TableRow key={index}>
              <TableCell className="px-6 py-4 whitespace-nowrap">
                {tax.rate}
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap">
                {tax.amount}
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap">=</TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap">
                {tax.result}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <div className="text-xs mt-8">
          Peraturan DJP Nomor: PER-16/PJ/2016
          {additionalTaxs.find((tax) => tax.note) && (
            <p className="text-red-500">
              {additionalTaxs.find((tax) => tax.note)?.note}
            </p>
          )}
        </div>
        <TableBody className="bg-white divide-y divide-gray-200">
          {additionalTaxs.find((tax) => tax.note) && (
            <TableRow>
              <TableCell className="px-6 py-4 whitespace-nowrap">
                {additionalTaxs.find((tax) => tax.note)?.rate}
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap">
                {additionalTaxs.find((tax) => tax.note)?.amount}
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap">=</TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap">
                {additionalTaxs.find((tax) => tax.note)?.result}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TaxRateTable;
