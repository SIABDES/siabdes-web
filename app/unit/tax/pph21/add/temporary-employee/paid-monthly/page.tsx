'use client';

import Layout from '@/components/layout/layout';
import EmployeeData12Months from '@/components/pages/pph21/general/employee-data-12-months';
import Pph21EmployeeData from '@/components/pages/pph21/general/pph21-employee-data';
import TemporaryEmployeeMonthlyGrossIncome from '@/components/pages/pph21/temporary-employee/paid-monthly/gross_income';
import TemporaryEmployeeGrossIncome from '@/components/pages/pph21/temporary-employee/paid-monthly/gross_income';
import TemporaryEmployeeMonthlyPPh21Calculation from '@/components/pages/pph21/temporary-employee/paid-monthly/pph21-calculation';
import TemporaryEmployeePPh21Calculation from '@/components/pages/pph21/temporary-employee/paid-monthly/pph21-calculation';
import TemporaryEmployeeMonthlyResults from '@/components/pages/pph21/temporary-employee/paid-monthly/result';
import Results from '@/components/pages/pph21/temporary-employee/paid-monthly/result';
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
import { toast } from '@/components/ui/use-toast';
import useGetEmployees from '@/hooks/employee/useGetEmployees';
import useAddPph21TemporaryEmployeePaidMonthly from '@/hooks/pph21/useAddPph21TemporaryEmployeePaidMonthly';
import { Employee } from '@/types/employees/employees';
import { Pph21TaxPeriodMonth } from '@/types/pph21/general';
import { PermanentEmployeeFormData } from '@/types/pph21/permanent-employee/permanent-employee';
import {
  NonPermanentEmployeeMonthlyFormData,
  NonPermanentEmployeeMonthlyScema,
} from '@/types/pph21/temporary-employee/temporary-employee';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function PaidMonthly() {
  const [periodMonth, setPeriodMonth] = useState<Pph21TaxPeriodMonth>(
    Pph21TaxPeriodMonth.JANUARY
  );

  const { data: getEmployees, isLoading: isGetEmployeesLoading } =
    useGetEmployees();

  const [selectedEmployee, setSelectedEmployee] = useState<
    Employee | undefined
  >(undefined);

  const router = useRouter();

  const form = useForm<NonPermanentEmployeeMonthlyFormData>({
    resolver: zodResolver(NonPermanentEmployeeMonthlyScema),
    defaultValues: {
      employee_id: '',
      period: {
        month: Pph21TaxPeriodMonth.JANUARY,
        years: new Date().getFullYear(),
      },
      constants: {
        tariff_tax_non_npwp: 0, // 0,2 = 20%
        tariff_ter: 0, // 0,05 5%
      },
      calculations: {
        pph21_has_npwp: 0,
        pph21_non_npwp: 0,
        total_pph21_non_npwp: 0,
      },
      result: {
        net_receipts: 0,
        total_pph21: 0,
        total_salary: 0,
      },
      gross_salary: {
        daily_salary: 0,
        working_days: 0,
        monthly_salary: 0,
      },
    },
  });

  const dailySalaryWatcher = form.watch('gross_salary.daily_salary');
  const workingDaysWatcher = form.watch('gross_salary.working_days');

  useEffect(() => {
    // gross salary
    const dailySalary = dailySalaryWatcher;
    const workingDays = workingDaysWatcher;

    form.setValue('gross_salary.daily_salary', dailySalary);
    form.setValue('gross_salary.working_days', workingDays);

    form.setValue('gross_salary.monthly_salary', dailySalary * workingDays);

    // calculations has npwp
    const tariff = form.getValues('constants.tariff_ter');
    const grossSalary = form.getValues('gross_salary.monthly_salary');

    // belum dapet ter dari backend
    // const pph21HasNpwp = (tariff / 100) * grossSalary;
    form.setValue('constants.tariff_ter', 20);
    const pph21HasNpwp = (20 / 100) * grossSalary;

    form.setValue('calculations.pph21_has_npwp', pph21HasNpwp);

    // result
    form.setValue('result.total_salary', grossSalary);
    form.setValue('result.total_pph21', pph21HasNpwp);
    form.setValue('result.net_receipts', grossSalary - pph21HasNpwp);

    // calculations non npwp
    if (!selectedEmployee?.npwp) {
      const tariffTaxNonNpwp = form.getValues('constants.tariff_tax_non_npwp');
      const pph21NonNpwp = form.getValues('calculations.pph21_has_npwp');
      form.setValue('calculations.pph21_non_npwp', pph21NonNpwp);

      // belum dapet tarif dari backend
      // const totalPph21NonNpwp = (tariffTaxNonNpwp / 100) * pph21NonNpwp;

      form.setValue('constants.tariff_tax_non_npwp', 20);
      const totalPph21NonNpwp = (120 / 100) * pph21NonNpwp;
      form.setValue('calculations.total_pph21_non_npwp', totalPph21NonNpwp);

      // result
      form.setValue('result.total_salary', grossSalary);
      form.setValue('result.total_pph21', totalPph21NonNpwp);
      form.setValue('result.net_receipts', grossSalary - totalPph21NonNpwp);
    }
  }, [dailySalaryWatcher, workingDaysWatcher, form, selectedEmployee]);

  useEffect(() => {
    if (periodMonth) {
      if (periodMonth === Pph21TaxPeriodMonth.DECEMBER) return;

      form.setValue('period.month', periodMonth);
    }
  }, [form, periodMonth]);

  useEffect(() => {
    if (selectedEmployee) {
      form.setValue('employee_id', selectedEmployee.id);
      form.setValue('constants.tariff_ter', selectedEmployee.ter?.percentage);

      console.log(selectedEmployee);
    }
  }, [form, selectedEmployee]);

  const { mutateAsync: mutatePph21, isPending: isMutatePph21Pending } =
    useAddPph21TemporaryEmployeePaidMonthly();

  console.log(form.getValues());
  const onSubmit = async (data: NonPermanentEmployeeMonthlyFormData) => {
    try {
      if (!selectedEmployee) {
        toast({
          title: 'Kesalahan Input',
          description: 'Mohon pilih pegawai terlebih dahulu',
          variant: 'destructive',
          duration: 5000,
        });

        return;
      }

      await mutatePph21(data);

      toast({
        title: 'Berhasil',
        description: 'Data PPh21 berhasil disimpan',
        duration: 5000,
      });

      router.push('/unit/tax/pph21');
    } catch (error) {
      if (error instanceof AxiosError) {
        toast({
          title: 'Gagal',
          description: error.response?.data.message,
          variant: 'destructive',
        });
      }
    }
  };

  useEffect(() => {
    if (form.formState.errors.root) {
      toast({
        title: 'Kesalahan Input',
        description: 'Mohon periksa kembali data yang anda masukkan',
        variant: 'destructive',
      });
    }
  }, [form.formState.errors]);

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
            Pegawai Tidak Tetap - Dibayar Bulanan
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {/* <LaborData form={form} /> */}
              <Pph21EmployeeData
                selectedEmployee={selectedEmployee}
                setSelectedEmployee={setSelectedEmployee}
                getEmployees={getEmployees}
                isGetEmployeesLoading={isGetEmployeesLoading}
                setPeriodMonth={setPeriodMonth}
                periodMonth={periodMonth}
                defaultPeriodMonth={Pph21TaxPeriodMonth.JANUARY}
              />
              {/* <EmployeeData12Months
                selectedEmployee={selectedEmployee}
                setSelectedEmployee={setSelectedEmployee}
                getEmployees={getEmployees}
                isGetEmployeesLoading={isGetEmployeesLoading}
                setPeriod={setPeriodMonth}
              /> */}
              <div className="grid grid-cols-9 gap-x-12 gap-y-8 mt-9">
                <TemporaryEmployeeMonthlyGrossIncome form={form} />
                <TemporaryEmployeeMonthlyPPh21Calculation form={form} />
              </div>
              <TemporaryEmployeeMonthlyResults
                form={form}
                total_salary="result.total_salary"
                total_pph21="result.total_pph21"
                net_receipts="result.net_receipts"
              />
              <div className="flex justify-center mt-10 mb-10 mr-8 gap-10">
                <Button type="submit" disabled={isMutatePph21Pending}>
                  {isMutatePph21Pending
                    ? 'Menyimpan...'
                    : 'Simpan Data Perpajakan Pegawai'}
                </Button>
              </div>
            </form>
          </Form>
        </Card>
      </section>
    </Layout>
  );
}
