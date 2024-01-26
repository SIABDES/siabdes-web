"use client";

import Layout from "@/components/layout/layout";
import EmployeeData12Months from "@/components/pages/pph21/general/employee-data-12-months";
import SeverencePayPeriodicPPh21Calculation from "@/components/pages/pph21/severance-pay/periodic/pph21-calculation";
import SeverencePayPeriodicResults from "@/components/pages/pph21/severance-pay/periodic/result";
import SeverencePayPeriodicSalary from "@/components/pages/pph21/severance-pay/periodic/salary";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import useGetEmployees from "@/hooks/employee/useGetEmployees";
import useAddPph21PermanentEmployee from "@/hooks/pph21/useAddPph21PermanentEmployee";
import { Employee } from "@/types/employees/employees";
import { Pph21TaxPeriodMonth } from "@/types/pph21/general";
import {
  SeverencePayPeriodicFormData,
  SeverencePayPeriodicScema,
} from "@/types/pph21/severance-pay/severence-pay";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Periodic() {
  const [periodMonth, setPeriodMonth] = useState<Pph21TaxPeriodMonth>();

  const { data: getEmployees, isLoading: isGetEmployeesLoading } =
    useGetEmployees();

  const [selectedEmployee, setSelectedEmployee] = useState<
    Employee | undefined
  >(undefined);

  const router = useRouter();

  const form = useForm<SeverencePayPeriodicFormData>({
    resolver: zodResolver(SeverencePayPeriodicScema),
    defaultValues: {
      employee_id: "",
      period: {
        month: new Date().getMonth() as Pph21TaxPeriodMonth,
        years: new Date().getFullYear(),
      },
      constants: {
        tariff_chapter_17_5_percent: 0.05,
        tariff_chapter_17_15_percent: 0.15,
        tariff_chapter_17_25_percent: 0.25,
        tariff_chapter_17_30_percent: 0.3,
        tariff_chapter_17_35_percent: 0.35,
        tariff_tax_non_npwp: 0.2,
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

  const { mutateAsync: mutatePph21, isPending: isMutatePph21Pending } =
    useAddPph21PermanentEmployee();

  const onSubmit = async (data: SeverencePayPeriodicFormData) => {
    try {
      // await mutatePph21(data);

      toast({
        title: "Berhasil",
        description: "Data PPh21 berhasil disimpan",
        duration: 5000,
      });

      router.push("/unit/tax/pph21");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast({
          title: "Gagal",
          description: error.response?.data.message,
          duration: 5000,
        });
      }
    }
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
            Pesangon - Dibayar Berkala
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
            <SeverencePayPeriodicSalary form={form} />
            <SeverencePayPeriodicPPh21Calculation form={form} />
            {/* <Results form={form} /> */}
            <SeverencePayPeriodicResults
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
