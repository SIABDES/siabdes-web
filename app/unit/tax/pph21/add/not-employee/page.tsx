'use client';

import Layout from '@/components/layout/layout';
import EmployeeData12Months from '@/components/pages/pph21/general/employee-data-12-months';
import LaborData from '@/components/pages/pph21/general/labor-data';
import Results from '@/components/pages/pph21/general/results';
import NotEmployeeGrossIncome from '@/components/pages/pph21/not-employee/gross-income';
import NotEmployeePPh21Calculation from '@/components/pages/pph21/not-employee/pph21-calculation';
import NotEmployeeResults from '@/components/pages/pph21/not-employee/result';
import GrossIncome from '@/components/pages/pph21/permanent-employee/January-November/gross_income';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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
import {
  NotEmployeeFormData,
  NotEmployeeScema,
} from '@/types/pph21/not-employee/not-employee';
import { PermanentEmployeeFormData } from '@/types/pph21/permanent-employee/permanent-employee';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function NotEmployee() {
  const [periodMonth, setPeriodMonth] = useState<Pph21TaxPeriodMonth>();

  const { data: getEmployees, isLoading: isGetEmployeesLoading } =
    useGetEmployees();

  const [selectedEmployee, setSelectedEmployee] = useState<
    Employee | undefined
  >(undefined);

  const form = useForm<NotEmployeeFormData>({
    resolver: zodResolver(NotEmployeeScema),
  });

  // useEffect(() => {
  //   if (selectedEmployee) {
  //     form.setValue('employee_id', selectedEmployee.id);
  //     form.setValue('constants.tariff_ter', selectedEmployee.ter?.percentage);
  //   }
  // }, [form, selectedEmployee]);

  const onSubmit = (data: NotEmployeeFormData) => {
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
            Bukan Pegawai
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
            <Card className=" mt-9 mb-9 pt-6 pb-3 px-3">
              {/* <h1 className="text-center font-bold text-sm mb-3">
                Perhitungan Pajak PPh 21
              </h1> */}
              <div className="grid grid-cols-2 gap-x-9">
                <NotEmployeeGrossIncome form={form} />
                <NotEmployeePPh21Calculation form={form} />
              </div>
            </Card>
            {/* <Results form={form} /> */}
            <NotEmployeeResults
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
