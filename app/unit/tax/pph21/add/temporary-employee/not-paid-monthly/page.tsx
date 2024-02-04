'use client';

import Layout from '@/components/layout/layout';
import LaborData from '@/components/pages/pph21/general/labor-data';
import Salary from '@/components/pages/pph21/temporary-employee/not-paid-monthly/salary';
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
import EmployeeData12Months from '@/components/pages/pph21/general/employee-data-12-months';
import { Pph21TaxPeriodMonth } from '@/types/pph21/general';
import { PermanentEmployeeFormData } from '@/types/pph21/permanent-employee/permanent-employee';
import {
  NonPermanentEmployeeNotMonthlyFormData,
  NonPermanentEmployeeNotMonthlyScema,
} from '@/types/pph21/temporary-employee/temporary-employee';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import TemporaryEmployeeNotMonthlySalary from '@/components/pages/pph21/temporary-employee/not-paid-monthly/salary';
import TemporaryEmployeeNotMonthlyPPh21Calculation from '@/components/pages/pph21/temporary-employee/not-paid-monthly/pph21-calculation';
import TemporaryEmployeeNotMonthlyResults from '@/components/pages/pph21/temporary-employee/not-paid-monthly/result';
import { formatRupiah } from '@/common/helpers/number-format';
import useAddPph21PermanentEmployee from '@/hooks/pph21/useAddPph21PermanentEmployee';
import { toast } from '@/components/ui/use-toast';
import { AxiosError } from 'axios';
import router from 'next/router';
import { useRouter } from 'next/navigation';
import useAddPph21TemporaryEmployeeNotPaidMonthly from '@/hooks/pph21/useAddPph21TemporaryEmployeeNotPaidMonthly';

export default function NotPaidMonthly() {
  const [periodMonth, setPeriodMonth] = useState<Pph21TaxPeriodMonth>();

  const { data: getEmployees, isLoading: isGetEmployeesLoading } =
    useGetEmployees();

  const [selectedEmployee, setSelectedEmployee] = useState<
    Employee | undefined
  >(undefined);

  const router = useRouter();

  const form = useForm<NonPermanentEmployeeNotMonthlyFormData>({
    resolver: zodResolver(NonPermanentEmployeeNotMonthlyScema),
    defaultValues: {
      employee_id: '',
      period: {
        month: Pph21TaxPeriodMonth.JANUARY,
        years: new Date().getFullYear(),
      },
      constants: {
        tariff_ter: 0,
        tariff_chapter_17_5_percent: 0,
        tariff_chapter_17_15_percent: 0,
        tariff_chapter_17_25_percent: 0,
        tariff_chapter_17_30_percent: 0,
        tariff_chapter_17_35_percent: 0,
        tariff_tax_non_npwp: 0,
      },
      calculations: {
        salary_less_450: 0,
        salary_more_450: 0,
        salary_more_2500: 0,
        pph21_has_npwp_less_then_450: 0,
        pph21_has_npwp_more_then_450: 0,
        pph21_has_npwp_more_then_2500: 0,
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
      gross_salary: {
        salary: 0,
      },
      result: {
        net_receipts: 0,
        total_pph21: 0,
        total_salary: 0,
      },
    },
  });

  const handleSalaryLessThan450 = (salary: number) => {
    // tarifnya 2%
    const tarif = 0;
    form.setValue('constants.tariff_ter', tarif);

    // upoh harian 450
    const salaryLess450 = salary;
    form.setValue('calculations.salary_less_450', salaryLess450);

    // pph21 nya
    const pph21LessThen450 = tarif * salaryLess450;
    form.setValue(
      'calculations.pph21_has_npwp_less_then_450',
      pph21LessThen450
    );

    // total pph21
    form.setValue('result.total_salary', salaryLess450);
    form.setValue('result.total_pph21', pph21LessThen450);
    form.setValue('result.net_receipts', salaryLess450 - pph21LessThen450);

    // jika tidak punya npwp
    if (!selectedEmployee?.npwp) {
      // tarif
      const tarif = 1.2;
      form.setValue('constants.tariff_tax_non_npwp', tarif);

      // pph21 nya
      const pph21 = form.getValues('calculations.pph21_has_npwp_less_then_450');
      form.setValue('calculations.pph21_non_npwp', pph21);

      // total pph21
      const totalPPh21 = tarif * pph21;
      form.setValue('calculations.total_pph21_non_npwp', totalPPh21);

      // total pph21
      form.setValue('result.total_salary', salaryLess450);
      form.setValue('result.total_pph21', totalPPh21);
      form.setValue('result.net_receipts', salaryLess450 - totalPPh21);
    }
  };

  const handleSalaryMoreThan450 = (salary: number) => {
    // tarifnya 5%
    const tarif = 0.005;
    form.setValue('constants.tariff_ter', tarif);

    // upoh harian lebih dari 450
    const salaryMore450 = salary;
    form.setValue('calculations.salary_more_450', salaryMore450);

    // pph21 nya
    const pph21MoreThen450 = tarif * salaryMore450;
    form.setValue(
      'calculations.pph21_has_npwp_more_then_450',
      pph21MoreThen450
    );

    // total pph21
    form.setValue('result.total_salary', salaryMore450);
    form.setValue('result.total_pph21', pph21MoreThen450);
    form.setValue('result.net_receipts', salaryMore450 - pph21MoreThen450);

    // jika tidak punya npwp
    if (!selectedEmployee?.npwp) {
      // tarif
      const tarif = 1.2;
      form.setValue('constants.tariff_tax_non_npwp', tarif);

      // pph21 nya
      const pph21 = form.getValues('calculations.pph21_has_npwp_more_then_450');
      form.setValue('calculations.pph21_non_npwp', pph21);

      // total pph21
      const totalPPh21 = tarif * pph21;
      form.setValue('calculations.total_pph21_non_npwp', totalPPh21);

      // total pph21
      form.setValue('result.total_salary', salaryMore450);
      form.setValue('result.total_pph21', totalPPh21);
      form.setValue('result.net_receipts', salaryMore450 - totalPPh21);
    }
  };

  const handleSalaryMoreThan2500 = (salary: number) => {
    // tarifnya 15%
    const tarif = 0.5;
    form.setValue('constants.tariff_ter', tarif);

    // upoh harian lebih dari 2500
    const salaryMore2500 = salary;
    form.setValue('calculations.salary_more_2500', salaryMore2500);

    // pph21 nya
    const pph21MoreThen2500 = tarif * salaryMore2500;
    form.setValue(
      'calculations.pph21_has_npwp_more_then_2500',
      pph21MoreThen2500
    );

    // perhitungan tarif pasal 17
    if (pph21MoreThen2500 <= 60000000) {
      handleTariff5Percent(pph21MoreThen2500, salaryMore2500);
      form.setValue('calculations.pph21_chapter_17_15_percent', 0);
      form.setValue('calculations.pph21_chapter_17_25_percent', 0);
      form.setValue('calculations.pph21_chapter_17_30_percent', 0);
      form.setValue('calculations.pph21_chapter_17_35_percent', 0);
      form.setValue('calculations.total_pph21_chapter_17_15_percent', 0);
      form.setValue('calculations.total_pph21_chapter_17_25_percent', 0);
      form.setValue('calculations.total_pph21_chapter_17_30_percent', 0);
      form.setValue('calculations.total_pph21_chapter_17_35_percent', 0);
    } else if (pph21MoreThen2500 <= 250000000) {
      handleTariff15Percent(pph21MoreThen2500, salaryMore2500);
      form.setValue('calculations.pph21_chapter_17_25_percent', 0);
      form.setValue('calculations.pph21_chapter_17_30_percent', 0);
      form.setValue('calculations.pph21_chapter_17_35_percent', 0);
      form.setValue('calculations.total_pph21_chapter_17_25_percent', 0);
      form.setValue('calculations.total_pph21_chapter_17_30_percent', 0);
      form.setValue('calculations.total_pph21_chapter_17_35_percent', 0);
    } else if (pph21MoreThen2500 <= 500000000) {
      handleTariff25Percent(pph21MoreThen2500, salaryMore2500);
      form.setValue('calculations.pph21_chapter_17_30_percent', 0);
      form.setValue('calculations.pph21_chapter_17_35_percent', 0);
      form.setValue('calculations.total_pph21_chapter_17_30_percent', 0);
      form.setValue('calculations.total_pph21_chapter_17_35_percent', 0);
    } else if (pph21MoreThen2500 <= 5000000000) {
      handleTariff30Percent(pph21MoreThen2500, salaryMore2500);
      form.setValue('calculations.pph21_chapter_17_35_percent', 0);
      form.setValue('calculations.total_pph21_chapter_17_35_percent', 0);
    } else {
      handleTariff35Percent(pph21MoreThen2500, salaryMore2500);
    }
  };

  const tariff5 = 0.05;
  const tariff15 = 0.15;
  const tariff25 = 0.25;
  const tariff30 = 0.3;
  const tariff35 = 0.35;

  const limit5 = 60000000;
  const limit15 = 190000000;
  const limit25 = 250000000;
  const limit30 = 5000000000;

  const handleTariff5Percent = (
    pph21MoreThen2500: number,
    salaryMore2500: number
  ) => {
    // tarifnya 5%
    form.setValue('constants.tariff_chapter_17_5_percent', tariff5);

    // range
    const rangeValue = pph21MoreThen2500;
    form.setValue('calculations.pph21_chapter_17_5_percent', rangeValue);

    // total pph21
    form.setValue(
      'calculations.total_pph21_chapter_17_5_percent',
      tariff5 * rangeValue
    );
    const totalPPh21 = form.getValues(
      'calculations.total_pph21_chapter_17_5_percent'
    );

    form.setValue('result.total_salary', salaryMore2500);
    form.setValue('result.total_pph21', totalPPh21);
    form.setValue('result.net_receipts', salaryMore2500 - totalPPh21);

    if (!selectedEmployee?.npwp) {
      // tarif
      const tarif = 1.2;
      form.setValue('constants.tariff_tax_non_npwp', tarif);

      // pph21 nya
      form.setValue('calculations.pph21_non_npwp', totalPPh21);

      // total pph21
      form.setValue('calculations.total_pph21_non_npwp', tarif * totalPPh21);
      const totalPPh21NonNPWP = form.getValues(
        'calculations.total_pph21_non_npwp'
      );

      // total pph21
      form.setValue('result.total_salary', salaryMore2500);
      form.setValue('result.total_pph21', totalPPh21NonNPWP);
      form.setValue('result.net_receipts', salaryMore2500 - totalPPh21);
    }
  };

  const handleTariff15Percent = (
    pph21MoreThen2500: number,
    salaryMore2500: number
  ) => {
    // untuk tarif 5%
    form.setValue('constants.tariff_chapter_17_5_percent', tariff5);

    // range
    form.setValue('calculations.pph21_chapter_17_5_percent', limit5);

    // total pph21
    form.setValue(
      'calculations.total_pph21_chapter_17_5_percent',
      tariff5 * limit5
    );

    // untuk tarif 15%
    form.setValue('constants.tariff_chapter_17_15_percent', tariff15);

    // range
    const rangeValue = pph21MoreThen2500 - limit5;
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
    form.setValue('result.total_salary', salaryMore2500);
    form.setValue('result.total_pph21', totalPPh21);
    form.setValue('result.net_receipts', salaryMore2500 - totalPPh21);

    if (!selectedEmployee?.npwp) {
      // tarif
      const tarif = 1.2;
      form.setValue('constants.tariff_tax_non_npwp', tarif);

      // pph21 nya
      form.setValue('calculations.pph21_non_npwp', totalPPh21);

      // total pph21
      form.setValue('calculations.total_pph21_non_npwp', tarif * totalPPh21);
      const totalPPh21NonNPWP = form.getValues(
        'calculations.total_pph21_non_npwp'
      );

      // total pph21
      form.setValue('result.total_salary', salaryMore2500);
      form.setValue('result.total_pph21', totalPPh21NonNPWP);
      form.setValue('result.net_receipts', salaryMore2500 - totalPPh21NonNPWP);
    }
  };

  const handleTariff25Percent = (
    pph21MoreThen2500: number,
    salaryMore2500: number
  ) => {
    // untuk tarif 5%
    form.setValue('constants.tariff_chapter_17_5_percent', tariff5);

    // range
    form.setValue('calculations.pph21_chapter_17_5_percent', limit5);

    // total pph21
    form.setValue(
      'calculations.total_pph21_chapter_17_5_percent',
      tariff5 * limit5
    );

    // untuk tarif 15%
    form.setValue('constants.tariff_chapter_17_15_percent', tariff15);

    // range
    form.setValue('calculations.pph21_chapter_17_15_percent', limit15);

    // total pph21
    form.setValue(
      'calculations.total_pph21_chapter_17_15_percent',
      tariff15 * limit15
    );

    // untuk tarif 25%
    form.setValue('constants.tariff_chapter_17_25_percent', tariff25);

    // range
    const rangeValue = pph21MoreThen2500 - limit15 - limit5;
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
    const totalPPh21 = totalPPh5Percent + totalPPh15Percent + totalPPh25Percent;

    // footer
    form.setValue('result.total_salary', salaryMore2500);
    form.setValue('result.total_pph21', totalPPh21);
    form.setValue('result.net_receipts', salaryMore2500 - totalPPh21);

    if (!selectedEmployee?.npwp) {
      // tarif
      const tarif = 1.2;
      form.setValue('constants.tariff_tax_non_npwp', tarif);

      // pph21 nya
      form.setValue('calculations.pph21_non_npwp', totalPPh21);

      // total pph21
      form.setValue('calculations.total_pph21_non_npwp', tarif * totalPPh21);
      const totalPPh21NonNPWP = form.getValues(
        'calculations.total_pph21_non_npwp'
      );

      // total pph21
      form.setValue('result.total_salary', salaryMore2500);
      form.setValue('result.total_pph21', totalPPh21NonNPWP);
      form.setValue('result.net_receipts', salaryMore2500 - totalPPh21NonNPWP);
    }
  };

  const handleTariff30Percent = (
    pph21MoreThen2500: number,
    salaryMore2500: number
  ) => {
    // untuk tarif 5%
    form.setValue('constants.tariff_chapter_17_5_percent', tariff5);

    // range
    form.setValue('calculations.pph21_chapter_17_5_percent', limit5);

    // total pph21
    form.setValue(
      'calculations.total_pph21_chapter_17_5_percent',
      tariff5 * limit5
    );

    // untuk tarif 15%
    form.setValue('constants.tariff_chapter_17_15_percent', tariff15);

    // range
    form.setValue('calculations.pph21_chapter_17_15_percent', limit15);

    // total pph21
    form.setValue(
      'calculations.total_pph21_chapter_17_15_percent',
      tariff15 * limit15
    );

    // untuk tarif 25%
    form.setValue('constants.tariff_chapter_17_25_percent', tariff25);

    // range
    form.setValue('calculations.pph21_chapter_17_25_percent', limit25);

    // total pph21
    form.setValue(
      'calculations.total_pph21_chapter_17_25_percent',
      tariff25 * limit25
    );

    // untuk tarif 30%
    form.setValue('constants.tariff_chapter_17_30_percent', tariff30);

    // range
    const rangeValue = pph21MoreThen2500 - limit25 - limit15 - limit5;
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
    form.setValue('result.total_salary', salaryMore2500);
    form.setValue('result.total_pph21', totalPPh21);
    form.setValue('result.net_receipts', salaryMore2500 - totalPPh21);

    if (!selectedEmployee?.npwp) {
      // tarif
      const tarif = 1.2;
      form.setValue('constants.tariff_tax_non_npwp', tarif);

      // pph21 nya
      form.setValue('calculations.pph21_non_npwp', totalPPh21);

      // total pph21
      form.setValue('calculations.total_pph21_non_npwp', tarif * totalPPh21);
      const totalPPh21NonNPWP = form.getValues(
        'calculations.total_pph21_non_npwp'
      );

      // total pph21
      form.setValue('result.total_salary', salaryMore2500);
      form.setValue('result.total_pph21', totalPPh21NonNPWP);
      form.setValue('result.net_receipts', salaryMore2500 - totalPPh21NonNPWP);
    }
  };

  const handleTariff35Percent = (
    pph21MoreThen2500: number,
    salaryMore2500: number
  ) => {
    // untuk tarif 5%
    form.setValue('constants.tariff_chapter_17_5_percent', tariff5);

    // range
    form.setValue('calculations.pph21_chapter_17_5_percent', limit5);

    // total pph21
    form.setValue(
      'calculations.total_pph21_chapter_17_5_percent',
      tariff5 * limit5
    );

    // untuk tarif 15%
    form.setValue('constants.tariff_chapter_17_15_percent', tariff15);

    // range
    form.setValue('calculations.pph21_chapter_17_15_percent', limit15);

    // total pph21
    form.setValue(
      'calculations.total_pph21_chapter_17_15_percent',
      tariff15 * limit15
    );

    // untuk tarif 25%
    form.setValue('constants.tariff_chapter_17_25_percent', tariff25);

    // range
    form.setValue('calculations.pph21_chapter_17_25_percent', limit25);

    // total pph21
    form.setValue(
      'calculations.total_pph21_chapter_17_25_percent',
      tariff25 * limit25
    );

    // untuk tarif 30%
    form.setValue('constants.tariff_chapter_17_30_percent', tariff30);

    // range
    form.setValue('calculations.pph21_chapter_17_30_percent', limit30);

    // total pph21
    form.setValue(
      'calculations.total_pph21_chapter_17_30_percent',
      tariff30 * limit30
    );

    // untuk tarif 35%
    form.setValue('constants.tariff_chapter_17_35_percent', tariff35);

    // range
    const rangeValue = pph21MoreThen2500 - limit30 - limit25 - limit15 - limit5;
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
    form.setValue('result.total_salary', salaryMore2500);
    form.setValue('result.total_pph21', totalPPh21);
    form.setValue('result.net_receipts', salaryMore2500 - totalPPh21);

    if (!selectedEmployee?.npwp) {
      // tarif
      const tarif = 1.2;
      form.setValue('constants.tariff_tax_non_npwp', tarif);

      // pph21 nya
      form.setValue('calculations.pph21_non_npwp', totalPPh21);

      // total pph21
      form.setValue('calculations.total_pph21_non_npwp', tarif * totalPPh21);
      const totalPPh21NonNPWP = form.getValues(
        'calculations.total_pph21_non_npwp'
      );

      // total pph21
      form.setValue('result.total_salary', salaryMore2500);
      form.setValue('result.total_pph21', totalPPh21NonNPWP);
      form.setValue('result.net_receipts', salaryMore2500 - totalPPh21NonNPWP);
    }
  };

  const grossSalary = form.watch('gross_salary.salary');

  useEffect(() => {
    form.setValue('calculations.salary_less_450', 0);
    form.setValue('calculations.salary_more_450', 0);
    form.setValue('calculations.salary_more_2500', 0);
    form.setValue('calculations.pph21_has_npwp_less_then_450', 0);
    form.setValue('calculations.pph21_has_npwp_more_then_450', 0);
    form.setValue('calculations.pph21_has_npwp_more_then_2500', 0);

    if (grossSalary <= 450000) {
      handleSalaryLessThan450(grossSalary);
    } else if (grossSalary > 450000 && grossSalary < 2500000) {
      handleSalaryMoreThan450(grossSalary);
    } else if (grossSalary >= 2500000) {
      handleSalaryMoreThan2500(grossSalary);
    }
  }, [grossSalary, form]);

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
    }
  }, [form, selectedEmployee]);

  const { mutateAsync: mutatePph21, isPending: isMutatePph21Pending } =
    useAddPph21TemporaryEmployeeNotPaidMonthly();

  console.log(form.getValues());
  const onSubmit = async (data: NonPermanentEmployeeNotMonthlyFormData) => {
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
            Pegawai Tidak Tetap - Dibayar Harian / Tidak Dibayar Bulanan
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
              <TemporaryEmployeeNotMonthlySalary form={form} />
              <TemporaryEmployeeNotMonthlyPPh21Calculation form={form} />
              <TemporaryEmployeeNotMonthlyResults
                form={form}
                total_salary="result.total_salary"
                total_pph21="result.total_pph21"
                net_receipts="result.net_receipts"
              />

              <div className="flex justify-center mt-10 mb-10 mr-8 gap-10">
                {/* <Button>Hitung</Button>
            <Button>Simpan</Button> */}
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
