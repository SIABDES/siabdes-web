'use client';
import React from 'react';
import Layout from '@/components/layout/layout';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ComboBox } from '@/components/ui/combobox';
import ClikableTable from '@/components/table/clickable-table';
import Link from 'next/link';
import useGetEmployees from '@/hooks/employee/useGetEmployees';
import { is } from 'date-fns/locale';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function Employees() {
  const router = useRouter();
  const { data, isLoading } = useGetEmployees();
  const employees = data?.data?.employees || [];

  // const handleRowClick = (employees_id: any) => {
  //   router.push(`/unit/data-master/employees/details`);
  // };
  const tableHeaders = ['No', 'Nama Tenaga Kerja', 'NIK', 'Jenis Tenaga Kerja'];
  const tableData = [
    {
      No: '1',
      'Nama Tenaga Kerja': 'Asep Sutarjo',
      NIK: '1234567891011121',
      'Jenis Tenaga Kerja': 'Pegawai Tetap',
    },
    {
      No: '2',
      'Nama Tenaga Kerja': 'Bambang Sugeni',
      NIK: '1234567891011122',
      'Jenis Tenaga Kerja': 'Pegawai Tidak Tetap',
    },
    {
      No: '3',
      'Nama Tenaga Kerja': 'Ucok Diskriminasi',
      NIK: '8934567891011122',
      'Jenis Tenaga Kerja': 'Pegawai Tidak Tetap',
    },
  ];

  const items = [
    { label: 'Pegawai Tetap', value: 'Pegawai Tetap' },
    { label: 'Pegawai Tidak Tetap', value: 'Pegawai Tidak Tetap' },
  ];

  const [value, setValue] = React.useState<string | undefined>(undefined);

  const handleRowClick = (
    e: React.MouseEvent<HTMLTableRowElement>,
    employeeId: string
  ) => {
    e.preventDefault();

    router.push(`/unit/data-master/employees/${employeeId}/details`);
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 text-left underline underline-offset-8 ">
        Data Tenaga Kerja Unit
      </h1>
      <div className="flex justify-end container px-16 mb-5">
        {/* <Button classNameName="w-32 h-14">Tambah</Button> */}
        <Link href="/unit/data-master/employees/add">
          <Button>Tambah Data Karyawan</Button>
        </Link>
      </div>
      {/* <div classNameName="flex justify-end container">
        <ComboBox items={items} setValue={} />
      </div> */}
      {/* <ClikableTable
        headers={tableHeaders}
        data={tableData}
        onRowClick={handleRowClick}
      /> */}

      <div className="flex flex-col h-screen">
        <div className="flex-grow overflow-auto">
          <Table className="relative w-full">
            <TableHeader className="">
              <TableRow>
                <TableHead className="sticky top-0 px-6 py-3 font-bold">
                  No
                </TableHead>
                <TableHead className="sticky top-0 px-6 py-3 font-bold">
                  Nama Tenaga Kerja
                </TableHead>
                <TableHead className="sticky top-0 px-6 py-3 font-bold">
                  NIK
                </TableHead>
                <TableHead className="sticky top-0 px-6 py-3 font-bold">
                  Jenis Tenaga Kerja
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y ">
              {isLoading && (
                <>
                  {Array.from(Array(8).keys()).map((_, index) => (
                    <TableRow key={index}>
                      <TableCell className="px-6 py-4">
                        <Skeleton className="w-full h-[2rem]" />
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        <Skeleton className="w-full h-[2rem]" />
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        <Skeleton className="w-full h-[2rem]" />
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        <Skeleton className="w-full h-[2rem]" />
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              )}

              {employees?.map((employee, index) => (
                <TableRow
                  key={employee.id}
                  onClick={(e) => handleRowClick(e, employee.id)}
                  className="cursor-pointer hover:bg-gray-200 w-full"
                >
                  <TableCell className="px-6 py-4">{index + 1}</TableCell>
                  <TableCell className="px-6 py-4">{employee.name}</TableCell>
                  <TableCell className="px-6 py-4">{employee.nik}</TableCell>
                  <TableCell className="px-6 py-4">
                    {employee.employee_type}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Layout>
  );
}
