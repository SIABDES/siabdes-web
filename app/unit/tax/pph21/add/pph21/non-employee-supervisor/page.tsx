'use client';

import Layout from '@/components/layout/layout';
import Pph21EmployeeData from '@/components/pages/pph21/general/pph21-employee-data';
import Results from '@/components/pages/pph21/general/results';
import PPh21OtherNonEmployeeSupervisorPPh21Calculation from '@/components/pages/pph21/pph21/non-employee-supervisor/pph21-calculation';
import PPh21OtherNonEmployeeSupervisorSalary from '@/components/pages/pph21/pph21/non-employee-supervisor/salary';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import useGetEmployees from '@/hooks/employee/useGetEmployees';
import useAddPph21OtherNonEmployeeSupervisor from '@/hooks/pph21/useAddPph21OtherNonEmployeeSupervisor';
import { Employee, EmployeesType } from '@/types/employees/employees';
import { Pph21TaxPeriodMonth } from '@/types/pph21/general';
import {
  PPh21PostPayloadRequest,
  Pph21MutationSchema,
} from '@/types/pph21/request';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

export default function NonEmployeeSupervisor() {
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
      employee_type: EmployeesType.PENGAWAS_NON_PEGAWAI,
      period_month: undefined,
      period_years: new Date().getFullYear(),
      gross_salary: {
        salary: 0,
      },
      pph21_calculations: [
        {
          tariff_percentage: 0.05,
          amount: 0,
          result: 0,
        },
        {
          tariff_percentage: 0.15,
          amount: 0,
          result: 0,
        },
        {
          tariff_percentage: 0.25,
          amount: 0,
          result: 0,
        },
        {
          tariff_percentage: 0.3,
          amount: 0,
          result: 0,
        },
        {
          tariff_percentage: 0.35,
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
        total_salary: 0,
        total_pph21: 0,
        net_receipts: 0,
      },
    },
  });

  const { setValue, formState, reset, watch, getValues } = form;

  useEffect(() => {
    if (periodMonth) {
      setValue('period_month', periodMonth);
    }
  }, [periodMonth, setValue]);

  useEffect(() => {
    if (selectedEmployee) {
      reset();
      setValue('employee_id', selectedEmployee.id);
      setFormDisabled(false);
    }
  }, [reset, selectedEmployee, setValue]);

  useEffect(() => {
    if (formState.errors.root) {
      toast({
        title: 'Kesalahan Input',
        description: 'Mohon periksa kembali data yang anda masukkan',
        variant: 'destructive',
      });
    }
  }, [formState.errors]);

  const grossSalaryWatcher = watch('gross_salary.salary');
  const pkpWatcher = watch('gross_salary.salary');

  const { update: updatePph21Field, remove: removePph21Field } = useFieldArray({
    control: form.control,
    name: 'pph21_calculations',
  });

  // menghitung pph21
  useEffect(() => {
    const maxPercentage5 = 60_000_000;
    const maxPercentage15 = 190_000_000;
    const maxPercentage25 = 250_000_000;
    const maxPercentage30 = 4_500_000_000;

    const percentage5 = getValues('pph21_calculations.0.tariff_percentage');
    const percentage15 = getValues('pph21_calculations.1.tariff_percentage');
    const percentage25 = getValues('pph21_calculations.2.tariff_percentage');
    const percentage30 = getValues('pph21_calculations.3.tariff_percentage');
    const percentage35 = getValues('pph21_calculations.4.tariff_percentage');

    const applyPercentage = (
      gross: number,
      index: number,
      percentage: number,
      maxGross?: number
    ) => {
      const basePath = `pph21_calculations.${index}` as const;

      const usedForPercentage = Math.min(gross, maxGross || gross);
      const result = usedForPercentage * percentage;
      setValue(`${basePath}.amount`, usedForPercentage);
      setValue(`${basePath}.result`, result);
      return usedForPercentage;
    };

    let tempTaxable = pkpWatcher || 0;

    setValue('pph21_calculations.0.amount', 0, { shouldDirty: false });
    setValue('pph21_calculations.0.result', 0, { shouldDirty: false });
    setValue('pph21_calculations.1.amount', 0, { shouldDirty: false });
    setValue('pph21_calculations.1.result', 0, { shouldDirty: false });
    setValue('pph21_calculations.2.amount', 0, { shouldDirty: false });
    setValue('pph21_calculations.2.result', 0, { shouldDirty: false });
    setValue('pph21_calculations.3.amount', 0, { shouldDirty: false });
    setValue('pph21_calculations.3.result', 0, { shouldDirty: false });
    setValue('pph21_calculations.4.amount', 0, { shouldDirty: false });
    setValue('pph21_calculations.4.result', 0, { shouldDirty: false });
    setValue('pph21_calculations.5.amount', 0, { shouldDirty: false });
    setValue('pph21_calculations.5.result', 0, { shouldDirty: false });
    setValue('result.total_salary', 0, { shouldDirty: false });
    setValue('result.total_pph21', 0, { shouldDirty: false });
    setValue('result.net_receipts', 0, { shouldDirty: false });

    updatePph21Field(0, {
      tariff_percentage: percentage5,
      amount: 0,
      result: 0,
    });
    updatePph21Field(1, {
      tariff_percentage: percentage15,
      amount: 0,
      result: 0,
    });
    updatePph21Field(2, {
      tariff_percentage: percentage25,
      amount: 0,
      result: 0,
    });
    updatePph21Field(3, {
      tariff_percentage: percentage30,
      amount: 0,
      result: 0,
    });
    updatePph21Field(4, {
      tariff_percentage: percentage35,
      amount: 0,
      result: 0,
    });

    const applyResultPercentage5 = applyPercentage(
      tempTaxable,
      0,
      percentage5,
      maxPercentage5
    );

    if (tempTaxable <= maxPercentage5) return;
    tempTaxable -= applyResultPercentage5;

    const applyResultPercentage15 = applyPercentage(
      tempTaxable,
      1,
      percentage15,
      maxPercentage15
    );

    if (tempTaxable <= maxPercentage15) return;
    tempTaxable -= applyResultPercentage15;

    const applyResultPercentage25 = applyPercentage(
      tempTaxable,
      2,
      percentage25,
      maxPercentage25
    );

    if (tempTaxable <= maxPercentage25) return;
    tempTaxable -= applyResultPercentage25;

    const applyResultPercentage30 = applyPercentage(
      tempTaxable,
      3,
      percentage30,
      maxPercentage30
    );

    if (tempTaxable <= maxPercentage30) return;
    tempTaxable -= applyResultPercentage30;

    applyPercentage(tempTaxable, 4, percentage35);
  }, [getValues, pkpWatcher, setValue, updatePph21Field]);

  const npwpPph21CalculationsResultWatcher = watch([
    'pph21_calculations.0.result',
    'pph21_calculations.1.result',
    'pph21_calculations.2.result',
    'pph21_calculations.3.result',
    'pph21_calculations.4.result',
  ]);

  const totalNpwpPph21CalculationsResult = useMemo(() => {
    return Object.values(npwpPph21CalculationsResultWatcher).reduce(
      (acc: number, curr) => acc + curr,
      0
    );
  }, [npwpPph21CalculationsResultWatcher]);

  useEffect(() => {
    if (!selectedEmployee) return;

    const hasnpwp = !!selectedEmployee.npwp;
    if (hasnpwp) {
      setValue('pph21_calculations.5.tariff_percentage', 0);
      setValue('pph21_calculations.5.amount', 0);
      setValue('pph21_calculations.5.result', 0);
    } else {
      const tariffPercentage = getValues(
        'pph21_calculations.5.tariff_percentage'
      );
      const result = totalNpwpPph21CalculationsResult * tariffPercentage;

      setValue('pph21_calculations.5.amount', totalNpwpPph21CalculationsResult);
      setValue('pph21_calculations.5.result', result);
    }
  }, [getValues, setValue, totalNpwpPph21CalculationsResult, selectedEmployee]);

  const noNpwpPph21CalculationsResultWatcher = watch(
    'pph21_calculations.5.result'
  );

  useEffect(() => {
    if (!selectedEmployee) return;

    const totalPph21 = !!selectedEmployee.npwp
      ? totalNpwpPph21CalculationsResult
      : noNpwpPph21CalculationsResultWatcher;

    if (grossSalaryWatcher) {
      const totalSalary = grossSalaryWatcher;
      const netReceipts = totalSalary - totalPph21;

      setValue('result.total_salary', totalSalary);
      setValue('result.total_pph21', totalPph21);
      setValue('result.net_receipts', netReceipts);
    }
  }, [
    npwpPph21CalculationsResultWatcher,
    setValue,
    getValues,
    selectedEmployee,
    totalNpwpPph21CalculationsResult,
    grossSalaryWatcher,
    noNpwpPph21CalculationsResultWatcher,
  ]);

  const { mutateAsync: mutatePph21, isPending: isMutatePph21Pending } =
    useAddPph21OtherNonEmployeeSupervisor();

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
      data.pph21_calculations.pop();
    } else {
      removePph21Field([0, 1, 2, 3, 4]);
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
  }, [form.formState.isSubmitting, isMutatePph21Pending]);

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
              {/* <EmployeeData12Months
                selectedEmployee={selectedEmployee}
                setSelectedEmployee={setSelectedEmployee}
                getEmployees={getEmployees}
                isGetEmployeesLoading={isGetEmployeesLoading}
                setPeriod={setPeriodMonth}
              /> */}
              <Pph21EmployeeData
                selectedEmployee={selectedEmployee}
                setSelectedEmployee={setSelectedEmployee}
                getEmployees={getEmployees}
                isGetEmployeesLoading={isGetEmployeesLoading}
                setPeriodMonth={setPeriodMonth}
                periodMonth={periodMonth}
              />
              <PPh21OtherNonEmployeeSupervisorSalary form={form} />
              <PPh21OtherNonEmployeeSupervisorPPh21Calculation form={form} />
              {/* <PPh21OtherNonEmployeeSupervisorResults
                form={form}
                total_salary="result.total_salary"
                total_pph21="result.total_pph21"
                net_receipts="result.net_receipts"
              /> */}
              <Results form={form} />
              <div className="flex justify-center mt-10 mb-10 mr-8 gap-10">
                <Button type="submit" disabled={isLoading}>
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
