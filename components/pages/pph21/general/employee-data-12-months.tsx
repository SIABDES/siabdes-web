"use client";

import { AxiosClientSide } from "@/common/api";
import { formatNumber } from "@/common/helpers/number-format";
import { Card, CardContent } from "@/components/ui/card";
import { ComboBox } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Employee, EmployeesGender } from "@/types/employees/employees";
import {
  GetEmployeeDetailsResponse,
  GetEmployeesResponse,
} from "@/types/employees/response";
import { Pph21TaxPeriodMonth } from "@/types/pph21/general";
import { AxiosError } from "axios";
import React, { useCallback, useEffect } from "react";
import { toast } from "sonner";

interface EmployeeDataMonths12Props {
  selectedEmployee: Employee | undefined;
  setSelectedEmployee: React.Dispatch<
    React.SetStateAction<Employee | undefined>
  >;
  getEmployees: GetEmployeesResponse | undefined;
  isGetEmployeesLoading: boolean;
  setPeriod: (periodMonth: Pph21TaxPeriodMonth) => void;
  onEmployeeSelected?: (employee: Employee) => void;
}

export default function EmployeeData12Months({
  selectedEmployee,
  setSelectedEmployee,
  getEmployees,
  isGetEmployeesLoading,
  setPeriod,
  onEmployeeSelected,
}: EmployeeDataMonths12Props) {
  const [periodMonth, setPeriodMonth] = React.useState<string | undefined>();

  useEffect(() => {
    if (selectedEmployee) {
      onEmployeeSelected?.(selectedEmployee);

      // toast({
      //   title: "Berhasil mengambil data pegawai",
      //   description: `Pegawai '${selectedEmployee.name}' telah dipilih...`,
      //   duration: 5000,
      // });
      toast.success(`Pegawai '${selectedEmployee.name}' telah dipilih...`, {
        description: "Berhasil mengambil data pegawai",
      });
    }
  }, [onEmployeeSelected, selectedEmployee]);

  useEffect(() => {
    if (periodMonth) {
      const month = parseInt(periodMonth);

      if (month >= 1 && month <= 12) {
        setPeriod(month);
      }
    }
  }, [periodMonth, setPeriod]);

  const handleSelectEmployee = async (employeeId: string) => {
    try {
      const res = await AxiosClientSide.get<GetEmployeeDetailsResponse>(
        `/employees/${employeeId}`
      );

      if (res.status === 200) {
        const employee: Employee = res.data.data;
        setSelectedEmployee(employee);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 404) {
          toast.error("Data pegawai tidak ditemukan...", {
            description: "Data pegawai tidak ditemukan...",
          });
        }
        return;
      }
      toast.error("Gagal mengambil data pegawai...", {
        description: "Terjadi kesalahan saat mengambil data pegawai...",
      });
    }
  };

  return (
    <Card className="border border-gray-300 shadow-md">
      <CardContent className="py-4">
        <h4 className="text-sm font-semibold text-center">Data Tenaga Kerja</h4>

        <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6">
          <div className="w-full flex gap-y-4 flex-col">
            <Label>Nomor Induk Kependudukan (NIK)</Label>
            <ComboBox
              isLoading={isGetEmployeesLoading}
              items={
                getEmployees?.data.employees.map((employee) => ({
                  label: `${employee.name} (${employee.nik})`,
                  value: employee.id,
                })) ?? []
              }
              setValue={handleSelectEmployee}
              value={selectedEmployee?.id}
              notFoundText="Data pegawai tidak ditemukan..."
              className="w-full border border-gray-400"
              height="medium"
            />
          </div>

          <div className="w-full flex gap-y-4 flex-col">
            <Label>Masa Pajak</Label>
            <Select
              value={periodMonth?.toString() ?? undefined}
              onValueChange={setPeriodMonth}
              // defaultValue={Pph21TaxPeriodMonth.JANUARY.toString()}
            >
              <SelectTrigger className="border border-gray-400">
                <SelectValue placeholder="Pilih bulan masa pajak..." />
              </SelectTrigger>
              <SelectContent>
                <ScrollArea className="h-48 ">
                  <SelectGroup>
                    <SelectItem value="1">Januari</SelectItem>
                    <SelectItem value="2">Februari</SelectItem>
                    <SelectItem value="3">Maret</SelectItem>
                    <SelectItem value="4">April</SelectItem>
                    <SelectItem value="5">Mei</SelectItem>
                    <SelectItem value="6">Juni</SelectItem>
                    <SelectItem value="7">Juli</SelectItem>
                    <SelectItem value="8">Agustus</SelectItem>
                    <SelectItem value="9">September</SelectItem>
                    <SelectItem value="10">Oktober</SelectItem>
                    <SelectItem value="11">November</SelectItem>
                    <SelectItem value="12">Desember</SelectItem>
                  </SelectGroup>
                </ScrollArea>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full flex gap-y-4 flex-col">
            <Label>Nama Lengkap</Label>
            <Input
              className="border border-gray-400"
              value={selectedEmployee?.name ?? ""}
              placeholder="Nama pegawai..."
              readOnly
            />
          </div>

          <div className="w-full flex gap-y-4 flex-col">
            <Label>Status Penghasilan Tidak Kena Pajak (PTKP)</Label>
            <Input
              className="border border-gray-400"
              value={selectedEmployee?.ptkp.status ?? ""}
              placeholder="Nama lengkap pegawai..."
              readOnly
            />
          </div>

          <div className="w-full flex gap-y-4 flex-col">
            <Label>Nomor Pokok Wajib Pajak (NPWP)</Label>
            <Input
              className="border border-gray-400"
              value={selectedEmployee?.npwp ?? ""}
              placeholder="Tidak memiliki NPWP..."
              readOnly
            />
          </div>

          <div className="w-full flex gap-y-4 flex-col">
            <Label>Kategori Tarif Efektif Rata-rata (TER)</Label>
            <Input
              className="border border-gray-400"
              value={selectedEmployee?.ter?.type ?? ""}
              placeholder="Tarif efektif rata-rata..."
              readOnly
            />
          </div>

          <div className="w-full flex gap-y-4 flex-col">
            <Label>Jenis Kelamin</Label>
            <Input
              className="border border-gray-400"
              value={
                (selectedEmployee?.gender &&
                  (selectedEmployee?.gender === EmployeesGender.PRIA
                    ? "Laki-laki"
                    : "Perempuan")) ??
                ""
              }
              placeholder="Jenis kelamin..."
              readOnly
            />
          </div>

          <div className="w-full flex gap-y-4 flex-col">
            <Label>Penghasilan Tidak Kena Pajak (PTKP)</Label>
            <Input
              className="border border-gray-400"
              value={formatNumber(selectedEmployee?.ptkp.boundary_salary ?? 0)}
              placeholder="Penghasilan tidak kena pajak..."
              readOnly
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
