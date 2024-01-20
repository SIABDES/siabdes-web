'use client';

import React from 'react';
import { formatDateToString } from '@/common/helpers/date';
import Layout from '@/components/layout/layout';
import useGetEmployeeDetails from '@/hooks/employee/useGetEmployeeDetails';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { Label } from '@/components/ui/label';

export default function DetailEmployees({
  params,
}: {
  params: { employee_id: string };
}) {
  const { data: details, isFetched } = useGetEmployeeDetails({ params });

  console.log(details);
  const router = useRouter();
  const { toast } = useToast();
  return (
    <Layout>
      {/* <h1 className="text-2xl font-bold mb-4 text-left underline underline-offset-8 ">
        Detail Tenaga Kerja
      </h1> */}
      <h5 className="text-lg font-semibold">Detail Tenaga Kerja</h5>
      <div>
        {isFetched && details && (
          <div className="inline-flex justify-between items-center w-full pb-8 pt-4">
            <table>
              <tbody>
                <tr>
                  <td className="text-sm font-medium min-w-[12rem]">
                    Nama Karyawan:
                  </td>
                  <td className="text-sm">{details.name}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <div className="flex flex-col h-screen">
          <div className="flex-grow overflow-auto">
            <Table className="relative w-full">
              <TableHeader className="border border-black">
                <TableRow className="border border-black">
                  <TableCell className="sticky top-0 px-6 py-3 font-bold text-center border border-black">
                    Informasi
                  </TableCell>
                  <TableCell className="sticky top-0 px-6 py-3 font-bold text-center border border-black">
                    Data
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y border border-black">
                <TableRow className="border border-black">
                  <TableCell className="px-6 py-4 border border-black">
                    Nama Lengkap
                  </TableCell>
                  <TableCell className="px-6 py-4 border border-black">
                    {details?.name}
                  </TableCell>
                </TableRow>
                <TableRow className="border border-black">
                  <TableCell className="px-6 py-4 border border-black">
                    Jenis Kelamin
                  </TableCell>
                  <TableCell className="px-6 py-4 border border-black">
                    {details?.gender}
                  </TableCell>
                </TableRow>
                <TableRow className="border border-black">
                  <TableCell className="px-6 py-4 border border-black">
                    Nomor Induk Kependudukan (NIK)
                  </TableCell>
                  <TableCell className="px-6 py-4 border border-black">
                    {details?.nik}
                  </TableCell>
                </TableRow>
                <TableRow className="border border-black">
                  <TableCell className="px-6 py-4 border border-black">
                    Nomor Pokok Wajib Pajak (NPWP)
                  </TableCell>
                  <TableCell className="px-6 py-4 border border-black">
                    {details?.npwp}
                  </TableCell>
                </TableRow>
                <TableRow className="border border-black">
                  <TableCell className="px-6 py-4 border border-black">
                    Status Nomor Pokok Wajib Pajak (NPWP)
                  </TableCell>
                  <TableCell className="px-6 py-4 border border-black">
                    {details?.npwp_status}
                  </TableCell>
                </TableRow>
                <TableRow className="border border-black">
                  <TableCell className="px-6 py-4 border border-black">
                    Status Perkawinan
                  </TableCell>
                  <TableCell className="px-6 py-4 border border-black">
                    {details?.marriage_status}
                  </TableCell>
                </TableRow>
                <TableRow className="border border-black">
                  <TableCell className="px-6 py-4 border border-black">
                    Jumlah Tanggungan
                  </TableCell>
                  <TableCell className="px-6 py-4 border border-black">
                    {details?.children_amount}
                  </TableCell>
                </TableRow>
                <TableRow className="border border-black">
                  <TableCell className="px-6 py-4 border border-black">
                    Status Tenaga Kerja
                  </TableCell>
                  <TableCell className="px-6 py-4 border border-black">
                    {details?.employee_status}
                  </TableCell>
                </TableRow>
                <TableRow className="border border-black">
                  <TableCell className="px-6 py-4 border border-black">
                    Jenis Tenaga Kerja
                  </TableCell>
                  <TableCell className="px-6 py-4 border border-black">
                    {details?.employee_type}
                  </TableCell>
                </TableRow>
                <TableRow className="border border-black">
                  <TableCell className="px-6 py-4 border border-black">
                    Bulan Mulai Bekerja
                  </TableCell>
                  <TableCell className="px-6 py-4 border border-black">
                    {/* {formatDateToString(details?.start_working_at)} */}
                    {details?.start_working_at}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
