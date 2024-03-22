"use client";
import React from "react";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ComboBox } from "@/components/ui/combobox";
import ClikableTable from "@/components/table/clickable-table";
import Link from "next/link";
import useGetEmployees from "@/hooks/employee/useGetEmployees";
import { is } from "date-fns/locale";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatEmployeeType } from "@/common/helpers/employee-format";

export default function Employees() {
  const router = useRouter();
  const { data, isLoading } = useGetEmployees();
  const employees = data?.data?.employees || [];

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
        <Link href="/unit/data-master/employees/add">
          <Button>Tambah Data Karyawan</Button>
        </Link>
      </div>

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
                    {formatEmployeeType(employee.employee_type)}
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
