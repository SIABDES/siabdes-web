'use client';

import { formatEmployeeStatus } from '@/common/helpers/employee-format';
import { formatNumber, formatRupiah } from '@/common/helpers/number-format';
import Layout from '@/components/layout/layout';
import DropdownMenuButtonPPh21 from '@/components/pages/pph21/button-pph21/dropdown-menu-button-pph21';
import Pph21OverviewCard from '@/components/pages/pph21/overview-card';
import TableView from '@/components/patan-ui/table/table-view';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TableCell } from '@/components/ui/table';
import useGetPph21 from '@/hooks/pph21/useGetPph21';
import { EmployeesType } from '@/types/employees/employees';
import { Pph21EmployeeTaxOverview } from '@/types/pph21/pph21';
import { CaretSortIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { use, useEffect } from 'react';

export default function PPH21() {
  const router = useRouter();

  const { data: getPph21, isLoading: isGetPph21Loading } = useGetPph21();

  useEffect(() => {
    console.log(getPph21);
  }, [getPph21]);
  const mapPeriodMonthToName = (month: number) => {
    switch (month) {
      case 1:
        return 'Januari';
      case 2:
        return 'Februari';
      case 3:
        return 'Maret';
      case 4:
        return 'April';
      case 5:
        return 'Mei';
      case 6:
        return 'Juni';
      case 7:
        return 'Juli';
      case 8:
        return 'Agustus';
      case 9:
        return 'September';
      case 10:
        return 'Oktober';
      case 11:
        return 'November';
      default:
        return 'Tidak Diketahui';
    }
  };

  const mapEmployeeTypeToName = (employeeType: EmployeesType) => {
    switch (employeeType) {
      case EmployeesType.PEGAWAI_TETAP:
        return 'Pegawai Tetap';
      case EmployeesType.BUKAN_PEGAWAI:
        return 'Bukan Pegawai';
      case EmployeesType.DIBAYAR_BERKALA:
        return 'Dibayar Berkala';
      case EmployeesType.DIBAYAR_BULANAN:
        return 'Dibayar Bulanan';
      case EmployeesType.DIBAYAR_HARIAN:
        return 'Dibayar Harian';
      case EmployeesType.DIBAYAR_SEKALIGUS:
        return 'Dibayar Sekaligus';
      case EmployeesType.PENGAWAS_NON_PEGAWAI:
        return 'Pengawas Non Pegawai';
      case EmployeesType.PESERTA_KEGIATAN:
        return 'Peserta Kegiatan';
      default:
        return 'Tidak Diketahui';
    }
  };

  const handleRowClick = (tax: Pph21EmployeeTaxOverview) => {
    router.push(`/unit/tax/pph21/${tax.id}/details`);
  };

  const isDataEmpty =
    !getPph21?.data?.taxes || getPph21.data.taxes.length === 0;

  // let totalGrossSalary = 0;
  // let jumlahPegawai = 0;

  // if (getPph21 && getPph21.data && getPph21.data.taxes) {
  //   for (const tax of getPph21.data.taxes) {
  //     totalGrossSalary += tax.gross_salary;
  //     jumlahPegawai++;
  //   }
  // }

  let totalPPh21 = 0;
  let jumlahPegawai = 0;

  if (getPph21 && getPph21.data && getPph21.data.taxes) {
    for (const tax of getPph21.data.taxes) {
      totalPPh21 += tax.pph21;
      jumlahPegawai++;
    }
  }

  const averagePPh21 = totalPPh21 / jumlahPegawai;

  return (
    <Layout>
      <section>
        <h1 className="align-baseline my-auto font-semibold">
          Pajak Penghasilan 21
        </h1>

        <ScrollArea className="mt-4">
          <div className="grid grid-cols-4 gap-x-6">
            <Pph21OverviewCard
              title="Total PPh 21"
              mainText={formatRupiah(getPph21?.data._total.pph1 ?? 0)}
              subText={`rata-rata ${formatRupiah(averagePPh21)}`}
            />

            <Pph21OverviewCard
              title="Pegawai Kena Pajak"
              mainText="4 Orang"
              subText={`${jumlahPegawai} Orang`}
              className="invisible"
            />

            <Pph21OverviewCard
              title="PPh21 Belum Dibuat Bulan Ini "
              mainText="90 Orang"
              subText={`${jumlahPegawai} Orang`}
              className="invisible"
            />

            <Pph21OverviewCard
              title="Belum Cetak Bulan Ini"
              mainText="2 Orang"
              subText={`${jumlahPegawai} Orang`}
              className="invisible"
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
                <DialogTrigger asChild>
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

            <Button variant={'outline'} asChild>
              <Link href={'/unit/tax/report/pph'}>Cetak Keseluruhan</Link>
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
          {isDataEmpty ? (
            <div className="flex justify-center items-center h-full mt-9">
              <p className="text-lg text-gray-500">Tidak ada data PPh 21</p>
            </div>
          ) : (
            <TableView
              items={getPph21?.data.taxes ?? []}
              isLoading={isGetPph21Loading}
              loadingPlaceholderAmount={8}
              headers={[
                'Nama Lengkap',
                'NPWP',
                'NIK',
                'Jenis Pegawai',
                'Masa Pajak',
                'Gaji Bruto',
                'PPh 21',
                'Status',
              ]}
              renderRow={(item) => (
                <>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.npwp ?? 'Tidak ada NPWP'}</TableCell>
                  <TableCell>{item.nik}</TableCell>
                  <TableCell>
                    {mapEmployeeTypeToName(item.employee_type)}
                  </TableCell>
                  <TableCell>
                    {mapPeriodMonthToName(item.period_month) +
                      ' ' +
                      item.period_years}
                  </TableCell>
                  <TableCell>Rp. {formatNumber(item.gross_salary)}</TableCell>
                  <TableCell>Rp. {formatNumber(item.pph21)}</TableCell>
                  <TableCell>{formatEmployeeStatus(item.status)}</TableCell>
                </>
              )}
              onRowClick={handleRowClick}
            />
          )}
        </ScrollArea>
      </section>
    </Layout>
  );
}
