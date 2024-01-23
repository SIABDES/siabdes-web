"use client";

import Layout from "@/components/layout/layout";
import LaborData from "@/components/pages/pph21/general/labor-data";
import PermanentEmployeeDes from "@/components/pages/pph21/permanent-employee/December/des";
import PermanentEmployeeJanNov from "@/components/pages/pph21/permanent-employee/January-November/jan-nov";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ComboBox } from "@/components/ui/combobox";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useGetEmployees from "@/hooks/employee/useGetEmployees";
import {
  EmployeeSearchFormDataType,
  EmployeeSearchSchema,
} from "@/types/employees/dto";
import {
  PermanentEmployeeFormData,
  PermanentEmployeeSchema,
} from "@/types/pph21/permanent-employee/permanent-employee";
import { PPh21SelectedEmployee } from "@/types/pph21/pph21-employee";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function PermanentEmployee() {
  const form = useForm<PermanentEmployeeFormData>({
    resolver: zodResolver(PermanentEmployeeSchema),
    defaultValues: {
      constants: {
        tariff_tax_non_npwp: 20, // 0,2 = 20%
        tariff_ter: 5, // 0,05 5%
      },
      calculations: {
        pph21_has_npwp: 0,
        pph21_non_npwp: 0,
      },
      result: {
        net_receipts: 0,
        total_pph21: 0,
        total_salary: 0,
        total_salary_dec: 0,
        total_pph21_dec: 0,
        net_receipts_dec: 0,
      },
      gross_salary: {
        salary: 0,
        allowance: 0,
        assurance: 0,
        bonus: 0,
        gross_income: 0,
        overtime_salary: 0,
        thr: 0,
        salary_dec: 0,
        allowance_dec: 0,
        thr_dec: 0,
        bonus_dec: 0,
        overtime_salary_dec: 0,
        assurance_dec: 0,
        gross_total: 0,
      },
      net_calculations: {
        position_allowance: 0,
        annual_fee: 0,
        assurance: 0,
        net_income: 0,
      },
      pkp_calculations: {
        non_taxable_income: 0,
        taxable_income: 0,
      },
      pph21_cut_in_december: {
        pph21_payable: 0,
        pph21_deducted_until_november: 0,
        pph21_deducted_until_december: 0,
      },
      period: {
        month: 1,
        years: 2024,
      },
    },
  });

  const { data: employees, isLoading: isEmployeesLoading } = useGetEmployees();

  const [selectedEmployee, setSelectedEmployee] = useState<
    PPh21SelectedEmployee | undefined
  >(undefined);

  const onSubmit = (data: PermanentEmployeeFormData) => {
    console.log(data);
  };

  const grossSalaryJanNovWatcher = form.watch([
    "gross_salary.salary",
    "gross_salary.allowance",
    "gross_salary.bonus",
    "gross_salary.gross_income",
    "gross_salary.thr",
    "gross_salary.overtime_salary",
    "gross_salary.assurance",
  ]);

  const grossSalaryDecWatcher = form.watch([
    "gross_salary.salary_dec",
    "gross_salary.allowance_dec",
    "gross_salary.thr_dec",
    "gross_salary.bonus_dec",
    "gross_salary.overtime_salary_dec",
    "gross_salary.assurance_dec",
    // 'gross_salary.gross_total',
  ]);

  useEffect(() => {
    // Calculate for Jan - Nov
    const totalJanNov = Object.values(grossSalaryJanNovWatcher).reduce(
      (acc, curr) => Number(acc) + Number(curr)
    );
    const totalPPh21HasNPWP = totalJanNov * (5 / 100);
    const totalPPh21NonNPWP = totalPPh21HasNPWP * (20 / 100);
    const totalNetReceipts = totalJanNov - totalPPh21NonNPWP;

    form.setValue("result.total_salary", totalJanNov);
    form.setValue("calculations.pph21_has_npwp", totalPPh21HasNPWP);
    form.setValue("calculations.pph21_non_npwp", totalPPh21NonNPWP);
    form.setValue("result.total_pph21", totalPPh21NonNPWP);
    form.setValue("result.net_receipts", totalNetReceipts);

    // Calculate for Dec
    const totalDec = Object.values(grossSalaryDecWatcher).reduce(
      (acc, curr) => Number(acc) + Number(curr)
    );

    form.setValue("result.total_salary_dec", totalDec);
  }, [grossSalaryJanNovWatcher, grossSalaryDecWatcher, form]);

  const handleSelectEmployee = (value: string) => {};

  console.log(employees);

  return (
    <Layout>
      <section>
        <div className="flex justify-between mb-6">
          <h1 className="underline font-bold text-lg mt-1">
            Kalkulator Pajak Penghasilan Pasal 21
          </h1>
          <div className="flex space-x-6">
            <Button>Lampiran</Button>
            <Link href="/unit/tax/pph21">
              <Button>Kembali</Button>
            </Link>
          </div>
        </div>
        <Tabs defaultValue="januariNovember">
          <TabsList className="grid w-96 grid-cols-2">
            <TabsTrigger value="januariNovember">
              Januari - November
            </TabsTrigger>
            <TabsTrigger value="desember">Desember</TabsTrigger>
          </TabsList>
          <TabsContent value="januariNovember">
            {/* <LaborData form={form} /> */}

            <Card>
              <CardContent className="py-4">
                <h4 className="text-sm font-medium">Data Tenaga Kerja</h4>

                <div className="w-full flex gap-y-4 flex-col">
                  <Label>Nomor Induk Kependudukan (NIK)</Label>
                  <ComboBox
                    items={[]}
                    setValue={handleSelectEmployee}
                    value={undefined}
                    notFoundText="Data pegawai tidak ditemukan..."
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>

            <PermanentEmployeeJanNov form={form} onSubmit={onSubmit} />
          </TabsContent>
          <TabsContent value="desember">
            <PermanentEmployeeDes form={form} onSubmit={onSubmit} />
          </TabsContent>
        </Tabs>

        {/* <section className="grid grid-cols-2 gap-4">
          <div>
            <LaborData data={laborData} />
            <Premi data={premi} />
            <Dues data={dues} />
          </div>
          <div>
            <PPh21Calculation data={pph21Calculation} />
            <PPh21RateAYear />
          </div>
        </section> */}
      </section>
      <div className="flex justify-center mt-10 mb-10 mr-8 gap-10">
        <Button>Hitung</Button>
        <Button>Simpan</Button>
      </div>
    </Layout>
  );
}
