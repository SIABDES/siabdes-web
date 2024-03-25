"use client";

import { AxiosClientSide } from "@/common/api";
import { formatNumber } from "@/common/helpers/number-format";
import PatanCombobox from "@/components/patan-ui/form/patan-combobox";
import { Card, CardContent } from "@/components/ui/card";
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

interface Pph21EmployeeDataProps {
  selectedEmployee: Employee | undefined;
  setSelectedEmployee: React.Dispatch<
    React.SetStateAction<Employee | undefined>
  >;
  getEmployees: GetEmployeesResponse | undefined;
  isGetEmployeesLoading: boolean;
  periodMonth: Pph21TaxPeriodMonth | null;
  setPeriodMonth: (periodMonth: Pph21TaxPeriodMonth | null) => void;
  onEmployeeSelected?: (employee: Employee) => void;
  defaultPeriodMonth?: Pph21TaxPeriodMonth;
  periodMonthDisabled?: boolean;
  blacklistPeriodMonths?: Pph21TaxPeriodMonth[];
}

export default function Pph21EmployeeData({
  selectedEmployee,
  setSelectedEmployee,
  getEmployees,
  isGetEmployeesLoading,
  periodMonth,
  setPeriodMonth,
  onEmployeeSelected,
  defaultPeriodMonth,
  periodMonthDisabled,
  blacklistPeriodMonths,
}: Pph21EmployeeDataProps) {
  useEffect(() => {
    if (selectedEmployee) {
      onEmployeeSelected?.(selectedEmployee);

      // toast({
      //   title: "Berhasil mengambil data pegawai",
      //   description: `Pegawai '${selectedEmployee.name}' telah dipilih...`,
      // });
      toast.success(`Pegawai '${selectedEmployee.name}' telah dipilih...`);
    }
  }, [onEmployeeSelected, selectedEmployee]);

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
          toast.error("Gagal mengambil data pegawai", {
            description: "Data pegawai tidak ditemukan...",
          });
        }
        return;
      }

      toast.error("Gagal mengambil data pegawai", {
        description: "Terjadi kesalahan saat mengambil data pegawai...",
      });
    }
  };

  const handleBlacklistPeriodMonths = useCallback(
    (periodMonth: Pph21TaxPeriodMonth) => {
      if (blacklistPeriodMonths) {
        return blacklistPeriodMonths.includes(periodMonth);
      }

      return false;
    },
    [blacklistPeriodMonths]
  );

  return (
    <Card>
      <CardContent className="py-4">
        <h4 className="text-sm font-semibold text-center">Data Tenaga Kerja</h4>

        <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6">
          <div className="w-full flex gap-y-4 flex-col">
            <Label>Nomor Induk Kependudukan (NIK)</Label>
            <PatanCombobox
              data={getEmployees?.data.employees ?? []}
              isLoading={isGetEmployeesLoading}
              itemBuilder={(employee) => ({
                key: employee.id,
                label: `${employee.name} (${employee.nik})`,
                value: employee.id,
              })}
              value={selectedEmployee?.id}
              onSelect={(employee) => {
                handleSelectEmployee(employee.value);
              }}
              disabled={isGetEmployeesLoading}
              closeOnSelect
              placeholder="Pilih pegawai..."
              triggerPlaceholderText="Pilih pegawai..."
              loadingText="Mengambil data pegawai..."
              notFoundText="Data pegawai tidak ditemukan..."
            />
          </div>

          <div className="w-full flex gap-y-4 flex-col">
            <Label>Masa Pajak</Label>
            <Select
              value={
                periodMonth
                  ? periodMonth.toString()
                  : (defaultPeriodMonth ?? "").toString()
              }
              onValueChange={(value) => {
                const month = parseInt(value);

                if (month >= 1 && month <= 12) {
                  setPeriodMonth(month);
                } else {
                  setPeriodMonth(null);
                }
              }}
              disabled={isGetEmployeesLoading || periodMonthDisabled}
            >
              <SelectTrigger>
                <SelectValue placeholder="Pilih bulan masa pajak..." />
              </SelectTrigger>
              <SelectContent>
                <ScrollArea className="h-48">
                  <SelectGroup>
                    <SelectItem
                      value="1"
                      disabled={handleBlacklistPeriodMonths(
                        Pph21TaxPeriodMonth.JANUARY
                      )}
                    >
                      Januari
                    </SelectItem>
                    <SelectItem
                      value="2"
                      disabled={handleBlacklistPeriodMonths(
                        Pph21TaxPeriodMonth.FEBRUARY
                      )}
                    >
                      Februari
                    </SelectItem>
                    <SelectItem
                      value="3"
                      disabled={handleBlacklistPeriodMonths(
                        Pph21TaxPeriodMonth.MARCH
                      )}
                    >
                      Maret
                    </SelectItem>
                    <SelectItem
                      value="4"
                      disabled={handleBlacklistPeriodMonths(
                        Pph21TaxPeriodMonth.APRIL
                      )}
                    >
                      April
                    </SelectItem>
                    <SelectItem
                      value="5"
                      disabled={handleBlacklistPeriodMonths(
                        Pph21TaxPeriodMonth.MAY
                      )}
                    >
                      Mei
                    </SelectItem>
                    <SelectItem
                      value="6"
                      disabled={handleBlacklistPeriodMonths(
                        Pph21TaxPeriodMonth.JUNE
                      )}
                    >
                      Juni
                    </SelectItem>
                    <SelectItem
                      value="7"
                      disabled={handleBlacklistPeriodMonths(
                        Pph21TaxPeriodMonth.JULY
                      )}
                    >
                      Juli
                    </SelectItem>
                    <SelectItem
                      value="8"
                      disabled={handleBlacklistPeriodMonths(
                        Pph21TaxPeriodMonth.AUGUST
                      )}
                    >
                      Agustus
                    </SelectItem>
                    <SelectItem
                      value="9"
                      disabled={handleBlacklistPeriodMonths(
                        Pph21TaxPeriodMonth.SEPTEMBER
                      )}
                    >
                      September
                    </SelectItem>
                    <SelectItem
                      value="10"
                      disabled={handleBlacklistPeriodMonths(
                        Pph21TaxPeriodMonth.OCTOBER
                      )}
                    >
                      Oktober
                    </SelectItem>
                    <SelectItem
                      value="11"
                      disabled={handleBlacklistPeriodMonths(
                        Pph21TaxPeriodMonth.NOVEMBER
                      )}
                    >
                      November
                    </SelectItem>
                    <SelectItem
                      value="12"
                      disabled={handleBlacklistPeriodMonths(
                        Pph21TaxPeriodMonth.DECEMBER
                      )}
                    >
                      Desember
                    </SelectItem>
                  </SelectGroup>
                </ScrollArea>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full flex gap-y-4 flex-col">
            <Label>Nama Lengkap</Label>
            <Input
              value={selectedEmployee?.name ?? ""}
              placeholder="Nama pegawai..."
              readOnly
            />
          </div>

          <div className="w-full flex gap-y-4 flex-col">
            <Label>Status Penghasilan Tidak Kena Pajak (PTKP)</Label>
            <Input
              value={selectedEmployee?.ptkp.status ?? ""}
              placeholder="Nama lengkap pegawai..."
              readOnly
            />
          </div>

          <div className="w-full flex gap-y-4 flex-col">
            <Label>Nomor Pokok Wajib Pajak (NPWP)</Label>
            <Input
              value={selectedEmployee?.npwp ?? ""}
              placeholder="Tidak memiliki NPWP..."
              readOnly
            />
          </div>

          <div className="w-full flex gap-y-4 flex-col">
            <Label>Kategori Tarif Efektif Rata-rata (TER)</Label>
            <Input
              value={selectedEmployee?.ter?.type ?? ""}
              placeholder="Tarif efektif rata-rata..."
              readOnly
            />
          </div>

          <div className="w-full flex gap-y-4 flex-col">
            <Label>Jenis Kelamin</Label>
            <Input
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
