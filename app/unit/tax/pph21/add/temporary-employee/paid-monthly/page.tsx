"use client";

import Layout from "@/components/layout/layout";
import EmployeeData12Months from "@/components/pages/pph21/general/employee-data-12-months";
import TemporaryEmployeeMonthlyGrossIncome from "@/components/pages/pph21/temporary-employee/paid-monthly/gross_income";
import TemporaryEmployeeMonthlyPPh21Calculation from "@/components/pages/pph21/temporary-employee/paid-monthly/pph21-calculation";
import TemporaryEmployeeMonthlyResults from "@/components/pages/pph21/temporary-employee/paid-monthly/result";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import useGetEmployees from "@/hooks/employee/useGetEmployees";
import { Employee } from "@/types/employees/employees";
import { Pph21TaxPeriodMonth } from "@/types/pph21/general";
import {
  NonPermanentEmployeeMonthlyFormData,
  NonPermanentEmployeeMonthlyScema,
} from "@/types/pph21/temporary-employee/temporary-employee";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function PaidMonthly() {
  const [periodMonth, setPeriodMonth] = useState<Pph21TaxPeriodMonth>();

  const { data: getEmployees, isLoading: isGetEmployeesLoading } =
    useGetEmployees();

  const [selectedEmployee, setSelectedEmployee] = useState<
    Employee | undefined
  >(undefined);

  const form = useForm<NonPermanentEmployeeMonthlyFormData>({
    resolver: zodResolver(NonPermanentEmployeeMonthlyScema),
    defaultValues: {
      employee_id: "",
      period: {
        month: new Date().getMonth() as Pph21TaxPeriodMonth,
        years: new Date().getFullYear(),
      },
      constants: {
        tariff_tax_non_npwp: 0, // 0,2 = 20%
        tariff_ter: 0, // 0,05 5%
      },
      calculations: {
        pph21_has_npwp: 0,
        pph21_non_npwp: 0,
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

  useEffect(() => {
    if (selectedEmployee) {
      form.setValue("employee_id", selectedEmployee.id);
      form.setValue("constants.tariff_ter", selectedEmployee.ter?.percentage);
    }
  }, [form, selectedEmployee]);

  // const { mutateAsync: mutatePph21, isPending: isMutatePph21Loading } =

  const onSubmit = (data: NonPermanentEmployeeMonthlyFormData) => {
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
            <Link href={"/unit/tax/pph21"}>
              <Button>Kembali</Button>
            </Link>
          </div>
        </div>
        <Card className="bg-white border border-gray-300 p-3 rounded-xl mt-5 pb-5">
          <h1 className="mt-3 mb-4 text-center font-bold text-lg">
            Pegawai Tidak Tetap - Dibayar Bulanan
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
          </Form>
        </Card>
        <div className="flex justify-center mt-10 mb-10 mr-8 gap-10">
          <Button>Hitung</Button>
          <Button>Simpan</Button>
        </div>
      </section>
    </Layout>
  );
}
