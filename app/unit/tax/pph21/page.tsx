"use client";

import React from "react";
import Layout from "@/components/layout/layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ClikableTable from "@/components/table/clickable-table";
import DropdownMenuButtonPPh21 from "@/components/pages/pph21/button-pph21/dropdown-menu-button-pph21";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { DateRange } from "react-day-picker";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TableView from "@/components/patan-ui/table/table-view";
import { TableCell } from "@/components/ui/table";
import useGetPph21 from "@/hooks/pph21/useGetPph21";
import { formatNumber } from "@/common/helpers/number-format";
import { EmployeesType } from "@/types/employees/employees";
import { Pph21EmployeeTaxOverview } from "@/types/pph21/pph21";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { CaretSortIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MultiSelect from "@/components/patan-ui/form/multi-seelct";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import Pph21OverviewCard from "@/components/pages/pph21/overview-card";

export default function PPH21() {
  const router = useRouter();

  const { data: getPph21, isLoading: isGetPph21Loading } = useGetPph21();

  const tableData = [
    {
      No: "1",
      "Nama Lengkap": "Rizky Wijaya",
      NPWP: "1234567890",
      NIK: "1234567890",
      "Jenis Pegawai": "PNS",
      "Masa Pajak": "Januari",
      "Gaji Bruto": "Rp. 10.000.000",
      "PPh 21": "Rp. 1.000.000",
      Status: "Lunas",
    },
    {
      No: "2",
      "Nama Lengkap": "Antony Wijaya",
      NPWP: "1234567890",
      NIK: "1234567890",
      "Jenis Pegawai": "Penerima Pesangon",
      "Masa Pajak": "Januari",
      "Gaji Bruto": "Rp. 10.000.000",
      "PPh 21": "Rp. 1.000.000",
      Status: "Lunas",
    },
    {
      No: "3",
      "Nama Lengkap": "Antony Wijaya",
      NPWP: "1234567890",
      NIK: "1234567890",
      "Jenis Pegawai": "Penerima Pesangon",
      "Masa Pajak": "Januari",
      "Gaji Bruto": "Rp. 10.000.000",
      "PPh 21": "Rp. 1.000.000",
      Status: "Lunas",
    },
    {
      No: "4",
      "Nama Lengkap": "Rizky Wijaya",
      NPWP: "1234567890",
      NIK: "1234567890",
      "Jenis Pegawai": "PNS",
      "Masa Pajak": "Januari",
      "Gaji Bruto": "Rp. 10.000.000",
      "PPh 21": "Rp. 1.000.000",
      Status: "Lunas",
    },
  ];

  // const handleRowClick = (tax_id: any) => {
  //   router.push(`/unit/tax/pph21/{tax_id}/details`);
  // };

  const rows = [
    {
      titleLeft: "Pegawai Upah Mingguan",
      peopleCount: 2,
      total: "Jumlah PPh",
      currency: "Rp",
      amount: "132.500",
      status: "Pegawai Tetap",
      statusPeopleCount: 1,
      taxAmount: "7.866",
    },
    {
      titleLeft: "Pegawai Upah Satuan",
      peopleCount: 1,
      total: "Jumlah PPh",
      currency: "Rp",
      amount: "0",
      status: "Penerima Pesangon",
      statusPeopleCount: 2,
      taxAmount: "23.522.500",
    },
    {
      titleLeft: "Pegawai Upah Borongan",
      peopleCount: 1,
      total: "Jumlah PPh",
      currency: "Rp",
      amount: "145.250",
      status: "PPH 21 Lainnya",
      statusPeopleCount: 2,
      taxAmount: "0",
    },
    // Add more rows as needed
  ];
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);

  const mapPeriodMonthToName = (month: number) => {
    switch (month) {
      case 1:
        return "Januari";
      case 2:
        return "Februari";
      case 3:
        return "Maret";
      case 4:
        return "April";
      case 5:
        return "Mei";
      case 6:
        return "Juni";
      case 7:
        return "Juli";
      case 8:
        return "Agustus";
      case 9:
        return "September";
      case 10:
        return "Oktober";
      case 11:
        return "November";
      default:
        return "Tidak Diketahui";
    }
  };

  const mapEmployeeTypeToName = (employeeType: EmployeesType) => {
    switch (employeeType) {
      case EmployeesType.PEGAWAI_TETAP:
        return "Pegawai Tetap";
      case EmployeesType.BUKAN_PEGAWAI:
        return "Bukan Pegawai";
      case EmployeesType.DIBAYAR_BERKALA:
        return "Dibayar Berkala";
      case EmployeesType.DIBAYAR_BULANAN:
        return "Dibayar Bulanan";
      case EmployeesType.DIBAYAR_HARIAN:
        return "Dibayar Harian";
      case EmployeesType.DIBAYAR_SEKALIGUS:
        return "Dibayar Sekaligus";
      case EmployeesType.PENGAWAS_NON_PEGAWAI:
        return "Pengawas Non Pegawai";
      case EmployeesType.PESERTA_KEGIATAN:
        return "Peserta Kegiatan";
      default:
        return "Tidak Diketahui";
    }
  };

  const handleRowClick = (tax: Pph21EmployeeTaxOverview) => {
    router.push(`/unit/tax/pph21/${tax.id}/details`);
  };

  return (
    <Layout>
      <section>
        <h1 className="align-baseline my-auto font-semibold">
          Pajak Penghasilan 21
        </h1>

        <ScrollArea className="mt-4">
          <div className="grid grid-cols-4 gap-x-6">
            <Pph21OverviewCard
              title="Pegawai Kena Pajak"
              mainText="4 Orang"
              subText="dari 100 pegawai"
            />

            <Pph21OverviewCard
              title="Total PPh 21"
              mainText={`Rp. ${formatNumber(54_000_000)}`}
              subText={`rata-rata Rp. ${formatNumber(7_500_000)}`}
            />

            <Pph21OverviewCard
              title="PPh21 Belum Dibuat Bulan Ini"
              mainText="90 Orang"
              subText="dari 100 pegawai"
            />

            <Pph21OverviewCard
              title="Belum Cetak Bulan Ini"
              mainText="2 Orang"
              subText="dari 100 pegawai"
            />
          </div>
        </ScrollArea>

        <div className="flex flex-row justify-between items-center mt-8">
          <div className="flex flex-row items-center gap-x-6">
            <div>
              <Input
                placeholder="Cari data pegawai..."
                className="max-w-[12rem]"
              />
            </div>

            <div>
              <Dialog>
                <DialogTrigger>
                  <Button variant="outline">
                    Filter data pegawai...
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </DialogTrigger>

                <DialogContent>
                  {/* TODO: Filter components here */}
                </DialogContent>
              </Dialog>
            </div>

            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih periode pajak..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {/* TODO: Generate based on backend period */}
                    <SelectItem value="1-2024">Januari 2024</SelectItem>
                    <SelectItem value="2-2024">Februari 2024</SelectItem>
                    <SelectItem value="3-2024">Maret 2024</SelectItem>
                    <SelectItem value="4-2024">April 2024</SelectItem>
                    <SelectItem value="5-2024">Mei 2024</SelectItem>
                    <SelectItem value="6-2024">Juni 2024</SelectItem>
                    <SelectItem value="7-2024">Juli 2024</SelectItem>
                    <SelectItem value="8-2024">Agustus 2024</SelectItem>
                    <SelectItem value="9-2024">September 2024</SelectItem>
                    <SelectItem value="10-2024">Oktober 2024</SelectItem>
                    <SelectItem value="11-2024">November 2024</SelectItem>
                    <SelectItem value="12-2024">Desember 2024</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-row gap-x-6">
            <DropdownMenuButtonPPh21 />

            <Button variant={"outline"} asChild>
              <Link href={"/unit/tax/report/pph"}>Cetak Keseluruhan</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* <div className="flex space-x-6">
        <DropdownMenuButtonPPh21 />
        <Link href="/unit/tax/report/pph">
          <Button>Unduh Keseluruhan</Button>
        </Link>
      </div> */}

      <section className="pt-8">
        <ScrollArea classNameViewport="max-h-72">
          <TableView
            items={getPph21?.data.taxes ?? []}
            headers={[
              "Nama Lengkap",
              "NPWP",
              "NIK",
              "Jenis Pegawai",
              "Masa Pajak",
              "Gaji Bruto",
              "PPh 21",
              "Status",
            ]}
            renderRow={(item) => (
              <>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.npwp ?? "Tidak ada NPWP"}</TableCell>
                <TableCell>{item.nik}</TableCell>
                <TableCell>
                  {mapEmployeeTypeToName(item.employee_type)}
                </TableCell>
                <TableCell>
                  {mapPeriodMonthToName(item.period.month) +
                    " " +
                    item.period.years}
                </TableCell>
                <TableCell>Rp. {formatNumber(item.gross_salary)}</TableCell>
                <TableCell>Rp. {formatNumber(item.pph21)}</TableCell>
                <TableCell>{item.status}</TableCell>
              </>
            )}
            onRowClick={handleRowClick}
          />
        </ScrollArea>
      </section>
    </Layout>
  );
}
