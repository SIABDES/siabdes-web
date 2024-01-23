"use client";

import Layout from "@/components/layout/layout";
import Pph21EmployeeData from "@/components/pages/pph21/general/pph21-employee-data";
import PermanentEmployeeJanNov from "@/components/pages/pph21/permanent-employee/January-November/jan-nov";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useGetEmployees from "@/hooks/employee/useGetEmployees";
import { Employee } from "@/types/employees/employees";
import { Pph21TaxPeriodMonth } from "@/types/pph21/general";
import Link from "next/link";
import { useState } from "react";

export default function PermanentEmployee() {
  const [periodMonth, setPeriodMonth] = useState<Pph21TaxPeriodMonth>(
    Pph21TaxPeriodMonth.JANUARY
  );

  const { data: getEmployees, isLoading: isGetEmployeesLoading } =
    useGetEmployees();

  const [selectedEmployee, setSelectedEmployee] = useState<
    Employee | undefined
  >(undefined);

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
            <Card>
              <CardContent>
                <h1 className="mt-3 mb-4 text-center font-bold text-lg">
                  Pegawai Tetap Bulanan Masa Pajak Januari - November
                </h1>

                <Pph21EmployeeData
                  selectedEmployee={selectedEmployee}
                  setSelectedEmployee={setSelectedEmployee}
                  getEmployees={getEmployees}
                  isGetEmployeesLoading={isGetEmployeesLoading}
                  setPeriod={setPeriodMonth}
                />

                <PermanentEmployeeJanNov
                  selectedEmployee={selectedEmployee}
                  periodMonth={periodMonth}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="desember">
            {/* Yang desember w komen dulu, ntar w benerin (?) */}
            {/* <PermanentEmployeeDes form={form} onSubmit={onSubmit} /> */}
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
    </Layout>
  );
}
