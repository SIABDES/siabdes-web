'use client';

import Layout from '@/components/layout/layout';
import EmployeeData12Months from '@/components/pages/pph21/general/employee-data-12-months';
import SeverencePayOneTimePPh21Calculation from '@/components/pages/pph21/severance-pay/one-time/pph21-calculation';
import SeverencePayOneTimeResults from '@/components/pages/pph21/severance-pay/one-time/result';
import SeverencePayOneTimeSalary from '@/components/pages/pph21/severance-pay/one-time/salary';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import useGetEmployees from '@/hooks/employee/useGetEmployees';
import useAddPph21SeverancePayOneTime from '@/hooks/pph21/useAddPph21SeverancePayOneTime';
import { Employee } from '@/types/employees/employees';
import { Pph21TaxPeriodMonth } from '@/types/pph21/general';
import {
  SeverencePayOneTimeFormData,
  SeverencePayOneTimeScema,
} from '@/types/pph21/severance-pay/severence-pay';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { reverseFormat } from '@/common/helpers/number-format';
export default function OneTime() {
  const [periodMonth, setPeriodMonth] = useState<Pph21TaxPeriodMonth>();

  const { data: getEmployees, isLoading: isGetEmployeesLoading } =
    useGetEmployees();

  const [selectedEmployee, setSelectedEmployee] = useState<
    Employee | undefined
  >(undefined);

  const router = useRouter();
  const form = useForm<SeverencePayOneTimeFormData>({
    resolver: zodResolver(SeverencePayOneTimeScema),
    defaultValues: {
      employee_id: '',
      period: {
        month: Pph21TaxPeriodMonth.JANUARY,
        years: new Date().getFullYear(),
      },
      constants: {
        tariff_0_percent: 0,
        tariff_5_percent: 0,
        tariff_15_percent: 0,
        tariff_25_percent: 0,
      },
      calculations: {
        pph21_0_percent: 0,
        pph21_5_percent: 0,
        pph21_15_percent: 0,
        pph21_25_percent: 0,
        total_pph21_0_percent: 0,
        total_pph21_5_percent: 0,
        total_pph21_15_percent: 0,
        total_pph21_25_percent: 0,
      },
      result: {
        net_receipts: 0,
        total_pph21: 0,
        total_salary: 0,
      },
      gross_salary: {
        gross_salary: 0,
      },
    },
  });

  const dailySalaryWatcher = form.watch('gross_salary.gross_salary');
  const pkpWatcher = form.watch('gross_salary.gross_salary');
  console.log('dailySalaryWatcher', dailySalaryWatcher);
  const tariff0 = 0;
  const tariff5 = 0.05;
  const tariff15 = 0.15;
  const tariff25 = 0.25;

  const limit0 = 50000000;
  const limit5 = 50000000;
  const limit15 = 400000000;

  useEffect(() => {
    const salary = dailySalaryWatcher;
    const pkp = pkpWatcher;

    // perhitungan pasal 68
    // tarif 0%
    const handleTariff0Percent = () => {
      // tarif 0%
      form.setValue('constants.tariff_0_percent', 0);

      // range
      const rangeValue = pkp;
      console.log('rangeValue', rangeValue);
      form.setValue('calculations.pph21_0_percent', rangeValue);

      // total
      const totalPph21 = tariff0 * rangeValue;
      form.setValue('calculations.total_pph21_0_percent', totalPph21);

      // result
      form.setValue('result.total_salary', salary);
      form.setValue('result.total_pph21', totalPph21);
      form.setValue('result.net_receipts', salary - totalPph21);
    };

    const handleTariff5Percent = () => {
      /// tarif 0%
      form.setValue('constants.tariff_0_percent', 0);

      // range
      form.setValue('calculations.pph21_0_percent', limit0);
      console.log('limit0', limit0);

      // total
      form.setValue('calculations.total_pph21_0_percent', tariff0 * limit0);

      /// tarif 5 %
      form.setValue('constants.tariff_5_percent', 5);

      // range
      const rangeValue = pkp - limit0;
      form.setValue('calculations.pph21_5_percent', rangeValue);

      // total
      form.setValue('calculations.total_pph21_5_percent', tariff5 * rangeValue);

      // result
      const totalPph21 = tariff0 * limit0 + tariff5 * rangeValue;

      form.setValue('result.total_salary', salary);
      form.setValue('result.total_pph21', totalPph21);
      form.setValue('result.net_receipts', salary - totalPph21);
    };

    const handleTariff15Percent = () => {
      /// tarif 0%
      form.setValue('constants.tariff_0_percent', 0);

      // range
      form.setValue('calculations.pph21_0_percent', limit0);

      // total
      form.setValue('calculations.total_pph21_0_percent', tariff0 * limit0);

      /// tarif 5 %
      form.setValue('constants.tariff_5_percent', 5);

      // range
      form.setValue('calculations.pph21_5_percent', limit5);

      // total
      form.setValue('calculations.total_pph21_5_percent', tariff5 * limit5);

      /// tarif 15%
      form.setValue('constants.tariff_15_percent', 15);

      // range
      const rangeValue = pkp - limit0 - limit5;
      form.setValue('calculations.pph21_15_percent', rangeValue);

      // total
      form.setValue(
        'calculations.total_pph21_15_percent',
        tariff15 * rangeValue
      );

      // result
      const totalPph21 =
        tariff0 * limit0 + tariff5 * limit5 + tariff15 * rangeValue;

      form.setValue('result.total_salary', salary);
      form.setValue('result.total_pph21', totalPph21);
      form.setValue('result.net_receipts', salary - totalPph21);
    };

    const handleTariff25Percent = () => {
      /// tarif 0%
      form.setValue('constants.tariff_0_percent', 0);

      // range
      form.setValue('calculations.pph21_0_percent', limit0);

      // total
      form.setValue('calculations.total_pph21_0_percent', tariff0 * limit0);

      /// tarif 5 %
      form.setValue('constants.tariff_5_percent', 5);

      // range
      form.setValue('calculations.pph21_5_percent', limit5);

      // total
      form.setValue('calculations.total_pph21_5_percent', tariff5 * limit5);

      /// tarif 15%
      form.setValue('constants.tariff_15_percent', 15);

      // range
      form.setValue('calculations.pph21_15_percent', limit15);

      // total
      form.setValue('calculations.total_pph21_15_percent', tariff15 * limit15);

      /// tarif 25%
      form.setValue('constants.tariff_25_percent', 25);

      // range
      const rangeValue = pkp - limit0 - limit5 - limit15;
      form.setValue('calculations.pph21_25_percent', rangeValue);

      // total
      form.setValue(
        'calculations.total_pph21_25_percent',
        tariff25 * rangeValue
      );

      // result
      const totalPph21 =
        tariff0 * limit0 +
        tariff5 * limit5 +
        tariff15 * limit15 +
        tariff25 * rangeValue;

      form.setValue('result.total_salary', salary);
      form.setValue('result.total_pph21', totalPph21);
      form.setValue('result.net_receipts', salary - totalPph21);
    };
    // perhitungan pasal 68
    if (salary <= 50000000) {
      handleTariff0Percent();
    } else if (salary > 50000000 && salary <= 100000000) {
      handleTariff5Percent();
    } else if (salary > 100000000 && salary <= 500000000) {
      handleTariff15Percent();
    } else {
      handleTariff25Percent();
    }
  }, [dailySalaryWatcher, pkpWatcher, form]);

  useEffect(() => {
    if (periodMonth) {
      if (periodMonth === Pph21TaxPeriodMonth.DECEMBER) return;

      form.setValue('period.month', periodMonth);
    }
  }, [form, periodMonth]);

  useEffect(() => {
    if (selectedEmployee) {
      form.setValue('employee_id', selectedEmployee.id);
    }
  }, [form, selectedEmployee]);

  const { mutateAsync: mutatePph21, isPending: isMutatePph21Pending } =
    useAddPph21SeverancePayOneTime();

  const onSubmit = async (data: SeverencePayOneTimeFormData) => {
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
            Pesangon - Dibayar Sekaligus
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
              <SeverencePayOneTimeSalary form={form} />
              <SeverencePayOneTimePPh21Calculation form={form} />
              {/* <Results form={form} /> */}
              <SeverencePayOneTimeResults
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
