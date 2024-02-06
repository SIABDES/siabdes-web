'use client';

import Layout from '@/components/layout/layout';
import EmployeeData12Months from '@/components/pages/pph21/general/employee-data-12-months';
import Results from '@/components/pages/pph21/general/results';
import PPh21OtherNonEmployeeSupervisorPPh21Calculation from '@/components/pages/pph21/pph21/non-employee-supervisor/pph21-calculation';
import PPh21OtherNonEmployeeSupervisorResults from '@/components/pages/pph21/pph21/non-employee-supervisor/result';
import PPh21OtherNonEmployeeSupervisorSalary from '@/components/pages/pph21/pph21/non-employee-supervisor/salary';
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
import { toast } from '@/components/ui/use-toast';
import useGetEmployees from '@/hooks/employee/useGetEmployees';
import useAddPph21OtherNonEmployeeSupervisor from '@/hooks/pph21/useAddPph21OtherNonEmployeeSupervisor';
import { Employee } from '@/types/employees/employees';
import { Pph21TaxPeriodMonth } from '@/types/pph21/general';
import {
  PPh21OtherNonEmployeeSupervisorFormData,
  PPh21OtherNonEmployeeSupervisorSchema,
} from '@/types/pph21/pph21/other-pph21';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { Console } from 'console';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
export default function NonEmployeeSupervisor() {
  const [periodMonth, setPeriodMonth] = useState<Pph21TaxPeriodMonth>();

  const { data: getEmployees, isLoading: isGetEmployeesLoading } =
    useGetEmployees();

  const [selectedEmployee, setSelectedEmployee] = useState<
    Employee | undefined
  >(undefined);

  const router = useRouter();

  const form = useForm<PPh21OtherNonEmployeeSupervisorFormData>({
    resolver: zodResolver(PPh21OtherNonEmployeeSupervisorSchema),
    defaultValues: {
      employee_id: '',
      period: {
        month: Pph21TaxPeriodMonth.JANUARY,
        years: new Date().getFullYear(),
      },
      constants: {
        tariff_chapter_17_5_percent: 0,
        tariff_chapter_17_15_percent: 0,
        tariff_chapter_17_25_percent: 0,
        tariff_chapter_17_30_percent: 0,
        tariff_chapter_17_35_percent: 0,
        tariff_tax_non_npwp: 0,
      },
      calculations: {
        pph21_chapter_17_5_percent: 0,
        pph21_chapter_17_15_percent: 0,
        pph21_chapter_17_25_percent: 0,
        pph21_chapter_17_30_percent: 0,
        pph21_chapter_17_35_percent: 0,
        total_pph21_chapter_17_5_percent: 0,
        total_pph21_chapter_17_15_percent: 0,
        total_pph21_chapter_17_25_percent: 0,
        total_pph21_chapter_17_30_percent: 0,
        total_pph21_chapter_17_35_percent: 0,
        pph21_non_npwp: 0,
        total_pph21_non_npwp: 0,
      },
      result: {
        net_receipts: 0,
        total_pph21: 0,
        total_salary: 0,
      },
      gross_salary: {
        salary: 0,
      },
    },
  });

  const grossSalaryWatcher = form.watch('gross_salary.salary');
  const pkpWatcher = form.watch('gross_salary.salary');
  console.log('grossSalaryWatcher', grossSalaryWatcher);
  const tariff5 = 0.05;
  const tariff15 = 0.15;
  const tariff25 = 0.25;
  const tariff30 = 0.3;
  const tariff35 = 0.35;

  const limit5 = 60000000;
  const limit15 = 190000000;
  const limit25 = 250000000;
  const limit30 = 5000000000;

  useEffect(() => {
    const salary = grossSalaryWatcher;
    const pkp = pkpWatcher;

    // perhitungan tarif pasal 17
    // tarif 5%
    const handleTariff5Percent = (pkp: number, salary: number) => {
      // tarifnya 5%
      form.setValue('constants.tariff_chapter_17_5_percent', 5);

      // range
      const rangeValue = pkp;
      form.setValue('calculations.pph21_chapter_17_5_percent', rangeValue);

      // total pph21
      form.setValue(
        'calculations.total_pph21_chapter_17_5_percent',
        tariff5 * rangeValue
      );
      const totalPPh21 = form.getValues(
        'calculations.total_pph21_chapter_17_5_percent'
      );

      form.setValue('result.total_salary', salary);
      form.setValue('result.total_pph21', totalPPh21);
      form.setValue('result.net_receipts', salary - totalPPh21);

      if (!selectedEmployee?.npwp) {
        // tarif
        const tarif = 1.2;
        form.setValue('constants.tariff_tax_non_npwp', 120);

        // pph21 nya
        form.setValue('calculations.pph21_non_npwp', totalPPh21);

        // total pph21
        form.setValue('calculations.total_pph21_non_npwp', tarif * totalPPh21);
        const totalPPh21NonNPWP = form.getValues(
          'calculations.total_pph21_non_npwp'
        );

        // total pph21
        form.setValue('result.total_salary', salary);
        form.setValue('result.total_pph21', totalPPh21NonNPWP);
        form.setValue('result.net_receipts', salary - totalPPh21);
      }
    };

    // tarif 15%
    const handleTariff15Percent = (pkp: number, salary: number) => {
      // untuk tarif 5%
      form.setValue('constants.tariff_chapter_17_5_percent', 5);

      // range
      form.setValue('calculations.pph21_chapter_17_5_percent', limit5);

      // total pph21
      form.setValue(
        'calculations.total_pph21_chapter_17_5_percent',
        tariff5 * limit5
      );

      // untuk tarif 15%
      form.setValue('constants.tariff_chapter_17_15_percent', 15);

      // range
      const rangeValue = pkp - limit5;
      form.setValue('calculations.pph21_chapter_17_15_percent', rangeValue);

      // total pph21
      form.setValue(
        'calculations.total_pph21_chapter_17_15_percent',
        tariff15 * rangeValue
      );

      const totalPPh5Percent = form.getValues(
        'calculations.total_pph21_chapter_17_5_percent'
      );

      const totalPPh15Percent = form.getValues(
        'calculations.total_pph21_chapter_17_15_percent'
      );

      const totalPPh21 = totalPPh5Percent + totalPPh15Percent;

      // footer
      form.setValue('result.total_salary', salary);
      form.setValue('result.total_pph21', totalPPh21);
      form.setValue('result.net_receipts', salary - totalPPh21);

      if (!selectedEmployee?.npwp) {
        // tarif
        const tarif = 1.2;
        form.setValue('constants.tariff_tax_non_npwp', 120);

        // pph21 nya
        form.setValue('calculations.pph21_non_npwp', totalPPh21);

        // total pph21
        form.setValue('calculations.total_pph21_non_npwp', tarif * totalPPh21);
        const totalPPh21NonNPWP = form.getValues(
          'calculations.total_pph21_non_npwp'
        );

        // total pph21
        form.setValue('result.total_salary', salary);
        form.setValue('result.total_pph21', totalPPh21NonNPWP);
        form.setValue('result.net_receipts', salary - totalPPh21NonNPWP);
      }
    };

    // tarif 25%
    const handleTariff25Percent = (pkp: number, salary: number) => {
      // untuk tarif 5%
      form.setValue('constants.tariff_chapter_17_5_percent', 5);

      // range
      form.setValue('calculations.pph21_chapter_17_5_percent', limit5);

      // total pph21
      form.setValue(
        'calculations.total_pph21_chapter_17_5_percent',
        tariff5 * limit5
      );

      // untuk tarif 15%
      form.setValue('constants.tariff_chapter_17_15_percent', 15);

      // range
      form.setValue('calculations.pph21_chapter_17_15_percent', limit15);

      // total pph21
      form.setValue(
        'calculations.total_pph21_chapter_17_15_percent',
        tariff15 * limit15
      );

      // untuk tarif 25%
      form.setValue('constants.tariff_chapter_17_25_percent', 25);

      // range
      const rangeValue = pkp - limit15 - limit5;
      form.setValue('calculations.pph21_chapter_17_25_percent', rangeValue);

      // total pph21
      form.setValue(
        'calculations.total_pph21_chapter_17_25_percent',
        tariff25 * rangeValue
      );

      const totalPPh5Percent = form.getValues(
        'calculations.total_pph21_chapter_17_5_percent'
      );
      const totalPPh15Percent = form.getValues(
        'calculations.total_pph21_chapter_17_15_percent'
      );
      const totalPPh25Percent = form.getValues(
        'calculations.total_pph21_chapter_17_25_percent'
      );
      const totalPPh21 =
        totalPPh5Percent + totalPPh15Percent + totalPPh25Percent;

      // footer
      form.setValue('result.total_salary', salary);
      form.setValue('result.total_pph21', totalPPh21);
      form.setValue('result.net_receipts', salary - totalPPh21);

      if (!selectedEmployee?.npwp) {
        // tarif
        const tarif = 1.2;
        form.setValue('constants.tariff_tax_non_npwp', 120);

        // pph21 nya
        form.setValue('calculations.pph21_non_npwp', totalPPh21);

        // total pph21
        form.setValue('calculations.total_pph21_non_npwp', tarif * totalPPh21);
        const totalPPh21NonNPWP = form.getValues(
          'calculations.total_pph21_non_npwp'
        );

        // total pph21
        form.setValue('result.total_salary', salary);
        form.setValue('result.total_pph21', totalPPh21NonNPWP);
        form.setValue('result.net_receipts', salary - totalPPh21NonNPWP);
      }
    };

    // tarif 30%
    const handleTariff30Percent = (pkp: number, salary: number) => {
      // untuk tarif 5%
      form.setValue('constants.tariff_chapter_17_5_percent', 5);

      // range
      form.setValue('calculations.pph21_chapter_17_5_percent', limit5);

      // total pph21
      form.setValue(
        'calculations.total_pph21_chapter_17_5_percent',
        tariff5 * limit5
      );

      // untuk tarif 15%
      form.setValue('constants.tariff_chapter_17_15_percent', 15);

      // range
      form.setValue('calculations.pph21_chapter_17_15_percent', limit15);

      // total pph21
      form.setValue(
        'calculations.total_pph21_chapter_17_15_percent',
        tariff15 * limit15
      );

      // untuk tarif 25%
      form.setValue('constants.tariff_chapter_17_25_percent', 25);

      // range
      form.setValue('calculations.pph21_chapter_17_25_percent', limit25);

      // total pph21
      form.setValue(
        'calculations.total_pph21_chapter_17_25_percent',
        tariff25 * limit25
      );

      // untuk tarif 30%
      form.setValue('constants.tariff_chapter_17_30_percent', 30);

      // range
      const rangeValue = pkp - limit25 - limit15 - limit5;
      form.setValue('calculations.pph21_chapter_17_30_percent', rangeValue);

      // total pph21
      form.setValue(
        'calculations.total_pph21_chapter_17_30_percent',
        tariff30 * rangeValue
      );

      const totalPPh5Percent = form.getValues(
        'calculations.total_pph21_chapter_17_5_percent'
      );
      const totalPPh15Percent = form.getValues(
        'calculations.total_pph21_chapter_17_15_percent'
      );
      const totalPPh25Percent = form.getValues(
        'calculations.total_pph21_chapter_17_25_percent'
      );
      const totalPPh30Percent = form.getValues(
        'calculations.total_pph21_chapter_17_30_percent'
      );
      const totalPPh21 =
        totalPPh5Percent +
        totalPPh15Percent +
        totalPPh25Percent +
        totalPPh30Percent;

      // footer
      form.setValue('result.total_salary', salary);
      form.setValue('result.total_pph21', totalPPh21);
      form.setValue('result.net_receipts', salary - totalPPh21);

      if (!selectedEmployee?.npwp) {
        // tarif
        const tarif = 1.2;
        form.setValue('constants.tariff_tax_non_npwp', 120);

        // pph21 nya
        form.setValue('calculations.pph21_non_npwp', totalPPh21);

        // total pph21
        form.setValue('calculations.total_pph21_non_npwp', tarif * totalPPh21);
        const totalPPh21NonNPWP = form.getValues(
          'calculations.total_pph21_non_npwp'
        );

        // total pph21
        form.setValue('result.total_salary', salary);
        form.setValue('result.total_pph21', totalPPh21NonNPWP);
        form.setValue('result.net_receipts', salary - totalPPh21NonNPWP);
      }
    };

    // tarif 35%
    const handleTariff35Percent = (pkp: number, salary: number) => {
      // untuk tarif 5%
      form.setValue('constants.tariff_chapter_17_5_percent', 5);

      // range
      form.setValue('calculations.pph21_chapter_17_5_percent', limit5);

      // total pph21
      form.setValue(
        'calculations.total_pph21_chapter_17_5_percent',
        tariff5 * limit5
      );

      // untuk tarif 15%
      form.setValue('constants.tariff_chapter_17_15_percent', 15);

      // range
      form.setValue('calculations.pph21_chapter_17_15_percent', limit15);

      // total pph21
      form.setValue(
        'calculations.total_pph21_chapter_17_15_percent',
        tariff15 * limit15
      );

      // untuk tarif 25%
      form.setValue('constants.tariff_chapter_17_25_percent', 25);

      // range
      form.setValue('calculations.pph21_chapter_17_25_percent', limit25);

      // total pph21
      form.setValue(
        'calculations.total_pph21_chapter_17_25_percent',
        tariff25 * limit25
      );

      // untuk tarif 30%
      form.setValue('constants.tariff_chapter_17_30_percent', 30);

      // range
      form.setValue('calculations.pph21_chapter_17_30_percent', limit30);

      // total pph21
      form.setValue(
        'calculations.total_pph21_chapter_17_30_percent',
        tariff30 * limit30
      );

      // untuk tarif 35%
      form.setValue('constants.tariff_chapter_17_35_percent', 35);

      // range
      const rangeValue = pkp - limit30 - limit25 - limit15 - limit5;
      form.setValue('calculations.pph21_chapter_17_35_percent', rangeValue);

      // total pph21
      form.setValue(
        'calculations.total_pph21_chapter_17_35_percent',
        tariff35 * rangeValue
      );

      const totalPPh5Percent = form.getValues(
        'calculations.total_pph21_chapter_17_5_percent'
      );
      const totalPPh15Percent = form.getValues(
        'calculations.total_pph21_chapter_17_15_percent'
      );
      const totalPPh25Percent = form.getValues(
        'calculations.total_pph21_chapter_17_25_percent'
      );
      const totalPPh30Percent = form.getValues(
        'calculations.total_pph21_chapter_17_30_percent'
      );
      const totalPPh35Percent = form.getValues(
        'calculations.total_pph21_chapter_17_35_percent'
      );
      const totalPPh21 =
        totalPPh5Percent +
        totalPPh15Percent +
        totalPPh25Percent +
        totalPPh30Percent +
        totalPPh35Percent;

      // footer
      form.setValue('result.total_salary', salary);
      form.setValue('result.total_pph21', totalPPh21);
      form.setValue('result.net_receipts', salary - totalPPh21);

      if (!selectedEmployee?.npwp) {
        // tarif
        const tarif = 1.2;
        form.setValue('constants.tariff_tax_non_npwp', 120);

        // pph21 nya
        form.setValue('calculations.pph21_non_npwp', totalPPh21);

        // total pph21
        form.setValue('calculations.total_pph21_non_npwp', tarif * totalPPh21);
        const totalPPh21NonNPWP = form.getValues(
          'calculations.total_pph21_non_npwp'
        );

        // total pph21
        form.setValue('result.total_salary', salary);
        form.setValue('result.total_pph21', totalPPh21NonNPWP);
        form.setValue('result.net_receipts', salary - totalPPh21NonNPWP);
      }
    };

    // perhitungan tarif pasal 17
    if (pkp <= 60000000) {
      handleTariff5Percent(pkp, salary);
      form.setValue('calculations.pph21_chapter_17_15_percent', 0);
      form.setValue('calculations.pph21_chapter_17_25_percent', 0);
      form.setValue('calculations.pph21_chapter_17_30_percent', 0);
      form.setValue('calculations.pph21_chapter_17_35_percent', 0);
      form.setValue('calculations.total_pph21_chapter_17_15_percent', 0);
      form.setValue('calculations.total_pph21_chapter_17_25_percent', 0);
      form.setValue('calculations.total_pph21_chapter_17_30_percent', 0);
      form.setValue('calculations.total_pph21_chapter_17_35_percent', 0);
    } else if (pkp > 60000000 && pkp <= 250000000) {
      handleTariff15Percent(pkp, salary);
      form.setValue('calculations.pph21_chapter_17_25_percent', 0);
      form.setValue('calculations.pph21_chapter_17_30_percent', 0);
      form.setValue('calculations.pph21_chapter_17_35_percent', 0);
      form.setValue('calculations.total_pph21_chapter_17_25_percent', 0);
      form.setValue('calculations.total_pph21_chapter_17_30_percent', 0);
      form.setValue('calculations.total_pph21_chapter_17_35_percent', 0);
    } else if (pkp > 250000000 && pkp <= 500000000) {
      handleTariff25Percent(pkp, salary);
      form.setValue('calculations.pph21_chapter_17_30_percent', 0);
      form.setValue('calculations.pph21_chapter_17_35_percent', 0);
      form.setValue('calculations.total_pph21_chapter_17_30_percent', 0);
      form.setValue('calculations.total_pph21_chapter_17_35_percent', 0);
    } else if (pkp > 500000000 && pkp <= 5000000000) {
      handleTariff30Percent(pkp, salary);
      form.setValue('calculations.pph21_chapter_17_35_percent', 0);
      form.setValue('calculations.total_pph21_chapter_17_35_percent', 0);
    } else {
      handleTariff35Percent(pkp, salary);
    }
  }, [pkpWatcher, grossSalaryWatcher, form, selectedEmployee]);

  useEffect(() => {
    if (periodMonth) {
      if (periodMonth === Pph21TaxPeriodMonth.DECEMBER) return;

      form.setValue('period.month', periodMonth);
    }
  }, [form, periodMonth]);

  useEffect(() => {
    if (selectedEmployee) {
      form.setValue('employee_id', selectedEmployee.id);
      // form.setValue('constants.tariff_ter', selectedEmployee.ter?.percentage);
    }
  }, [form, selectedEmployee]);

  const { mutateAsync: mutatePph21, isPending: isMutatePph21Pending } =
    useAddPph21OtherNonEmployeeSupervisor();

  const onSubmit = async (data: PPh21OtherNonEmployeeSupervisorFormData) => {
    console.log(data);
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
            <Link href={'/unit/tax/pph21'}>
              <Button>Kembali</Button>
            </Link>
          </div>
        </div>
        <Card className="bg-white border border-gray-300 p-3 rounded-xl mt-5 pb-5">
          <h1 className="mt-3 mb-4 text-center font-bold text-lg">
            PPh 21 Lainnya - Pengawas Non Pegawai
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {/* <LaborData form={form} /> */}
              <EmployeeData12Months
                selectedEmployee={selectedEmployee}
                setSelectedEmployee={setSelectedEmployee}
                getEmployees={getEmployees}
                isGetEmployeesLoading={isGetEmployeesLoading}
                setPeriod={setPeriodMonth}
              />
              <PPh21OtherNonEmployeeSupervisorSalary form={form} />
              <PPh21OtherNonEmployeeSupervisorPPh21Calculation form={form} />
              <PPh21OtherNonEmployeeSupervisorResults
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
