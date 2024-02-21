'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Lengkong from '../../../../../../public/lengkong.png';
import { formatRupiah, numberToWordsID } from '@/common/helpers/number-format';
import { useReactToPrint } from 'react-to-print';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { GetDetailsPph21Response } from '@/types/pph21/response';
import useGetEmployees from '@/hooks/employee/useGetEmployees';
import { data } from '@/components/chart/chart-financial-position';
import {
  formatEmployeeGender,
  formatEmployeeType,
  formatMonth,
} from '@/common/helpers/employee-format';
import PPh21PreviewGrossSalary from '@/components/pages/pph21/preview/pph21-preview-gross-salary';
import PPh21PreviewNetCalculations from '@/components/pages/pph21/preview/pph21-preview-net-calculations';
import Sign from '@/components/pages/pph21/preview/sign';
import { EmployeesType } from '@/types/employees/employees';
import Pph21PreviewPkpCalculations from '@/components/pages/pph21/preview/pph21-preview-pkp-calculations';
import { set } from 'date-fns';

export default function PreviewSalarySlip() {
  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: 'Laporan PPh 21',
  });

  const [pph21Details, setPph21Details] = useState<GetDetailsPph21Response>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem('pph21Details');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setPph21Details(parsedData);
      setIsLoading(false);
    }
  }, [setPph21Details, setIsLoading]);

  return (
    <>
      <div id="print-controller" className="my-6">
        <div className="mx-auto max-w-6xl flex justify-between">
          <Button variant={'secondary'} asChild>
            <Link href={'/unit/tax/pph21'}>Kembali ke Halaman Pajak PPh21</Link>
          </Button>

          <Button onClick={handlePrint}>Cetak Laporan (PDF)</Button>
        </div>

        <Separator />
      </div>

      <section ref={contentRef} className="max-w-5xl mx-auto">
        {isLoading && (
          <div className="space-y-6 my-6">
            <Skeleton className="w-full h-36" />
            <Skeleton className="w-full h-36" />
            <Skeleton className="w-full h-36" />
          </div>
        )}
        {pph21Details && (
          <>
            <header className="border-b-4 border-black mb-8 pb-4 max-w-3xl mx-auto">
              <div className="flex justify-center mt-10 space-x-6">
                <div>
                  <Image src={Lengkong} alt="bg" width={130} />
                </div>
                <div className="text-center">
                  <div className="font-bold text-xl mb-2 max-w-md">
                    <h1>BADAN USAHA MILIK DESA LENGKONG</h1>
                    <h1>LAPORAN LABA RUGI</h1>
                    <h1>UNIT USAHA JASA WISATA</h1>
                  </div>
                  <h3>Desa Lengkong, Kec. Bojongsoang,</h3>
                  <h3>Kab. Bandung, Provinsi Jawa Barat</h3>
                </div>
              </div>
            </header>
            <div>
              <div className="max-w-2xl mx-auto px-8 pt-3 pb-8 mb-4">
                <div className="mb-6 text-center">
                  <h2 className="text-xl font-bold">Slip Gaji</h2>
                  <h2>Periode 1 Januari - 31 januari 2023</h2>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="grid grid-cols-9 items-center">
                    <span className="col-span-3">Nama Lengkap</span>
                    <span className="col-span-1">:</span>
                    <span className="text-left col-span-5">
                      {pph21Details?.data.name}
                    </span>
                  </div>
                  <div className="grid grid-cols-9 items-center">
                    <span className="col-span-3">Masa Pajak</span>
                    <span className="col-span-1">:</span>
                    <span className="text-left col-span-5">
                      {formatMonth(pph21Details?.data.period_month)}{' '}
                      {pph21Details?.data.period_years}
                    </span>
                  </div>
                  <div className="grid grid-cols-9 items-center">
                    <span className="col-span-3">NPWP</span>
                    <span className="col-span-1">:</span>
                    <span className="text-left col-span-5">
                      {pph21Details?.data.npwp || '-'}
                    </span>
                  </div>
                  <div className="grid grid-cols-9 items-center">
                    <span className="col-span-3">NIK</span>
                    <span className="col-span-1">:</span>
                    <span className="text-left col-span-5">
                      {pph21Details?.data.nik}
                    </span>
                  </div>
                  <div className="grid grid-cols-9 items-center">
                    <span className="col-span-3">Jenis Tenaga Kerja</span>
                    <span className="col-span-1">:</span>
                    <span className="text-left col-span-5">
                      {formatEmployeeType(pph21Details?.data.employee_type)}
                    </span>
                  </div>
                  <div className="grid grid-cols-9 items-center">
                    <span className="col-span-3">Jenis Kelamin</span>
                    <span className="col-span-1">:</span>
                    <span className="text-left col-span-5">
                      {formatEmployeeGender(pph21Details?.data.gender)}
                    </span>
                  </div>

                  <PPh21PreviewGrossSalary
                    salary={pph21Details?.data.gross_salary.salary}
                    thr={pph21Details?.data.gross_salary.thr}
                    bonus={pph21Details?.data.gross_salary.bonus}
                    allowance={pph21Details?.data.gross_salary.allowance}
                    overtime_salary={
                      pph21Details?.data.gross_salary.overtime_salary
                    }
                    assurance={pph21Details?.data.gross_salary.assurance}
                    workingDays={pph21Details?.data.gross_salary.working_days}
                    dailySalary={pph21Details?.data.gross_salary.daily_salary}
                    monthlySalary={
                      pph21Details?.data.gross_salary.monthly_salary
                    }
                  />

                  {pph21Details.data.net_calculations && (
                    <PPh21PreviewNetCalculations
                      calculation={pph21Details.data.net_calculations}
                    />
                  )}

                  {pph21Details.data.pkp_calculations && (
                    <Pph21PreviewPkpCalculations
                      pkp={pph21Details.data.pkp_calculations}
                    />
                  )}

                  <div className="grid grid-cols-9 items-center">
                    <span className="col-span-3">Potongan</span>
                  </div>
                  <div className="grid grid-cols-9 items-center">
                    <span className="col-span-5 ml-9">PPh 21</span>
                    <span className="col-span-1">:</span>
                    <span className="text-left col-span-3">
                      {formatRupiah(pph21Details.data.result.total_pph21)}
                    </span>
                  </div>
                  <div className="grid grid-cols-9 items-center">
                    <span className="col-span-5 ml-9">Jumlah Potongan</span>
                    <span className="col-span-1">:</span>
                    <span className="text-left col-span-3">
                      {formatRupiah(pph21Details.data.result.total_pph21)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="max-w-3xl mx-auto border p-4 flex flex-col justify-center items-center border-black rounded-lg w-full">
                <div className="font-bold">
                  {`Penerimaan bersih: ${formatRupiah(
                    pph21Details?.data.result.net_receipts
                  )}`}
                </div>
                <p className="h-0.5 my-2 w-full bg-black border-0 rounded" />
                <div className="text-center">
                  {`Terbilang : ${numberToWordsID(
                    pph21Details?.data.result.net_receipts
                  )}`}
                </div>
              </div>

              <div className="max-w-4xl">
                <Sign />
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}
