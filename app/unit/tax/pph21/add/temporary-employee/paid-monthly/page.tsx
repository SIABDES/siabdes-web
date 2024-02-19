'use client';

import Layout from '@/components/layout/layout';
import Pph21EmployeeData from '@/components/pages/pph21/general/pph21-employee-data';
import Results from '@/components/pages/pph21/general/results';
import TemporaryEmployeeMonthlyGrossIncome from '@/components/pages/pph21/temporary-employee/paid-monthly/gross_income';
import TemporaryEmployeeMonthlyPPh21Calculation from '@/components/pages/pph21/temporary-employee/paid-monthly/pph21-calculation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import useGetEmployeeTer from '@/hooks/employee/useGetEmployeeTer';
import useGetEmployees from '@/hooks/employee/useGetEmployees';
import useAddPph21TemporaryEmployeePaidMonthly from '@/hooks/pph21/useAddPph21TemporaryEmployeePaidMonthly';
import { Employee, EmployeesType } from '@/types/employees/employees';
import { Pph21TaxPeriodMonth } from '@/types/pph21/general';
import {
  PPh21PostPayloadRequest,
  Pph21MutationSchema,
} from '@/types/pph21/request';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDebounce } from 'usehooks-ts';

export default function PaidMonthly() {
  const [periodMonth, setPeriodMonth] = useState<Pph21TaxPeriodMonth | null>(
    null
  );

  const { data: getEmployees, isLoading: isGetEmployeesLoading } =
    useGetEmployees();

  const [selectedEmployee, setSelectedEmployee] = useState<
    Employee | undefined
  >(undefined);

  const router = useRouter();
  const [formDisabled, setFormDisabled] = useState(true);
  const form = useForm<PPh21PostPayloadRequest>({
    resolver: zodResolver(Pph21MutationSchema),
    disabled: formDisabled,
    defaultValues: {
      employee_id: selectedEmployee?.id || '',
      employee_type: EmployeesType.DIBAYAR_BULANAN,
      period_month: undefined,
      period_years: new Date().getFullYear(),
      gross_salary: {
        daily_salary: 0,
        working_days: 0,
        monthly_salary: 0,
      },
      pph21_calculations: [
        {
          tariff_percentage: 0,
          amount: 0,
          result: 0,
        },
        {
          tariff_percentage: 1.2,
          amount: 0,
          result: 0,
        },
      ],
      result: {
        net_receipts: 0,
        total_pph21: 0,
        total_salary: 0,
      },
    },
  });

  const { setValue, formState, reset, watch, getValues } = form;

  useEffect(() => {
    if (periodMonth) {
      setValue('period_month', periodMonth);
    }
  }, [periodMonth, setValue]);

  const dailySalaryWatch = watch('gross_salary.daily_salary');
  const workingDaysWatch = watch('gross_salary.working_days');

  useEffect(() => {
    // gross salary

    if (!dailySalaryWatch) return;
    if (!workingDaysWatch) return;

    const dailySalary = dailySalaryWatch;
    const workingDays = workingDaysWatch;

    form.setValue('gross_salary.monthly_salary', dailySalary * workingDays);
  }, [form, dailySalaryWatch, workingDaysWatch]);

  const monthlySalary = getValues('gross_salary.monthly_salary');

  const debounceTotalSalary = useDebounce(monthlySalary, 1000); // 1 second = 1000ms

  const {
    mutateAsync: fetchTer,
    data: employeeTer,
    isPending: isEmployeeTerLoading,
  } = useGetEmployeeTer();

  useEffect(() => {
    if (!selectedEmployee) return;

    const period_month = getValues('period_month');
    if (!period_month) return;

    fetchTer({
      employee_id: selectedEmployee.id,
      gross_salary: debounceTotalSalary || 0,
      period_years: new Date().getFullYear(),
      period_month,
    });
  }, [debounceTotalSalary, fetchTer, getValues, selectedEmployee]);

  const applyPph21Calculations = useCallback(() => {
    if (!selectedEmployee) return;
    if (!monthlySalary) return;

    const npwpTariffPercentage = getValues(
      'pph21_calculations.0.tariff_percentage'
    );
    const npwpTariffResult = monthlySalary * npwpTariffPercentage;

    const noNpwpTariffPercentage = getValues(
      'pph21_calculations.1.tariff_percentage'
    );
    const noNpwpTariffResult = npwpTariffResult * noNpwpTariffPercentage;

    const hasnpwp = !!selectedEmployee.npwp;

    const totalPph21 = hasnpwp ? npwpTariffResult : noNpwpTariffResult;

    if (hasnpwp) {
      setValue('pph21_calculations.1.tariff_percentage', 0);
      setValue('pph21_calculations.1.amount', 0);
      setValue('pph21_calculations.1.result', 0);
    }

    setValue('pph21_calculations.0.result', npwpTariffResult);
    setValue('pph21_calculations.1.result', noNpwpTariffResult);

    setValue('result.total_salary', monthlySalary);
    setValue('result.total_pph21', totalPph21);
    setValue('result.net_receipts', monthlySalary - totalPph21);
  }, [getValues, selectedEmployee, setValue, monthlySalary]);

  useEffect(() => {
    if (!employeeTer) return;

    setValue('pph21_calculations.0.tariff_percentage', employeeTer?.percentage);
    applyPph21Calculations();
  }, [applyPph21Calculations, employeeTer, setValue]);

  const pph21nonpwpamountWatch = watch('pph21_calculations.0.result');
  useEffect(() => {
    if (!selectedEmployee) return;
    if (!monthlySalary) return;

    const pph21nonpwpamount = pph21nonpwpamountWatch;
    setValue('pph21_calculations.0.amount', monthlySalary);
    setValue('pph21_calculations.1.amount', pph21nonpwpamount);

    applyPph21Calculations();
  }, [
    applyPph21Calculations,
    selectedEmployee,
    setValue,
    monthlySalary,
    pph21nonpwpamountWatch,
  ]);

  useEffect(() => {
    if (selectedEmployee) {
      setValue('employee_id', selectedEmployee.id);
      setFormDisabled(false);
    }
  }, [selectedEmployee, setValue]);

  useEffect(() => {
    if (form.formState.errors.root) {
      toast({
        title: 'Kesalahan Input',
        description: 'Mohon periksa kembali data yang anda masukkan',
        variant: 'destructive',
      });
    }
  }, [form.formState.errors]);

  const { mutateAsync: mutatePph21, isPending: isMutatePph21Pending } =
    useAddPph21TemporaryEmployeePaidMonthly();

  const onSubmit = async (data: PPh21PostPayloadRequest) => {
    if (!selectedEmployee) {
      toast({
        title: 'Kesalahan Input',
        description: 'Mohon pilih pegawai terlebih dahulu',
        variant: 'destructive',
        duration: 5000,
      });

      return;
    }

    const hasNpwp = !!selectedEmployee.npwp;

    if (hasNpwp) {
      // remove index 1
      data.pph21_calculations.pop();
    } else {
      // remove index 0
      data.pph21_calculations.shift();
    }

    await mutatePph21(data);

    router.push('/unit/tax/pph21');
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

  const isLoading = useMemo(() => {
    return isMutatePph21Pending || form.formState.isSubmitting;
  }, [isMutatePph21Pending, form.formState.isSubmitting]);

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
              {/* <TemporaryEmployeeMonthlyResults
                form={form}
                total_salary="result.total_salary"
                total_pph21="result.total_pph21"
                net_receipts="result.net_receipts"
              /> */}
              <Results form={form} />
              <div className="flex justify-center mt-10 mb-10 mr-8 gap-10">
                <Button
                  type="submit"
                  disabled={isLoading || isEmployeeTerLoading}
                >
                  {isLoading
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
