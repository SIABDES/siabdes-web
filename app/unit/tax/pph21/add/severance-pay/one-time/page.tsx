'use client';

import Layout from '@/components/layout/layout';
import EmployeeData12Months from '@/components/pages/pph21/general/employee-data-12-months';
import LaborData from '@/components/pages/pph21/general/labor-data';
import Results from '@/components/pages/pph21/general/results';
import SeverencePayOneTimePPh21Calculation from '@/components/pages/pph21/severance-pay/one-time/pph21-calculation';
import SeverencePayOneTimeResults from '@/components/pages/pph21/severance-pay/one-time/result';
import SeverencePayOneTimeSalary from '@/components/pages/pph21/severance-pay/one-time/salary';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useGetEmployees from '@/hooks/employee/useGetEmployees';
import { Employee } from '@/types/employees/employees';
import { Pph21TaxPeriodMonth } from '@/types/pph21/general';
import { PermanentEmployeeFormData } from '@/types/pph21/permanent-employee/permanent-employee';
import {
  SeverencePayOneTimeFormData,
  SeverencePayOneTimeScema,
} from '@/types/pph21/severance-pay/severence-pay';
import {
  NonPermanentEmployeeMonthlyFormData,
  NonPermanentEmployeeMonthlyScema,
} from '@/types/pph21/temporary-employee/temporary-employee';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function OneTime() {
  const [periodMonth, setPeriodMonth] = useState<Pph21TaxPeriodMonth>();

  const { data: getEmployees, isLoading: isGetEmployeesLoading } =
    useGetEmployees();

  const [selectedEmployee, setSelectedEmployee] = useState<
    Employee | undefined
  >(undefined);

  const form = useForm<SeverencePayOneTimeFormData>({
    resolver: zodResolver(SeverencePayOneTimeScema),
  });

  const onSubmit = (data: SeverencePayOneTimeFormData) => {
    console.log(data);
  };

  return (
    <Layout>
      <section>
        <div className="flex justify-between mb-6">
          <h1 className="underline font-bold text-lg mt-1">
            Kalkulator Pajak Penghasilan Pasal 21
          </h1>
          <div className="flex space-x-6">
            <Button>Lampiran</Button>
            <Link href={'/unit/tax/pph21'}>
              <Button>Kembali</Button>
            </Link>
          </div>
        </div>
        <Card className="bg-white border border-gray-300 p-3 rounded-xl mt-5 pb-5">
          <h1 className="mt-3 mb-4 text-center font-bold text-lg">
            Pesangon - Dibayar Sekaligus
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}></form>
            {/* <LaborData form={form} /> */}
            <EmployeeData12Months
              selectedEmployee={selectedEmployee}
              setSelectedEmployee={setSelectedEmployee}
              getEmployees={getEmployees}
              isGetEmployeesLoading={isGetEmployeesLoading}
              setPeriod={setPeriodMonth}
            />
            <SeverencePayOneTimeSalary form={form} />
            <SeverencePayOneTimePPh21Calculation form={form} />
            {/* <Results form={form} /> */}
            <SeverencePayOneTimeResults
              form={form}
              total_salary="result.total_salary"
              total_pph21="result.total_pph21"
              net_receipts="result.net_receipts"
            />
          </Form>
        </Card>
      </section>
      <div className="flex justify-center mt-10 mb-10 mr-8 gap-10">
        <Button>Hitung</Button>
        <Button>Simpan</Button>
      </div>
    </Layout>
  );
}
