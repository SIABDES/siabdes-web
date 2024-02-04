"use client";

import Layout from "@/components/layout/layout";
import Pph21EmployeeData from "@/components/pages/pph21/general/pph21-employee-data";
import PermanentEmployeeDes from "@/components/pages/pph21/permanent-employee/December/des";
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

        <Tabs
          defaultValue="januariNovember"
          onValueChange={(value) => {
            if (value === "januariNovember") {
              setPeriodMonth(Pph21TaxPeriodMonth.JANUARY);
            } else if (value === "desember") {
              setPeriodMonth(Pph21TaxPeriodMonth.DECEMBER);
            }
          }}
        >
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
                  setPeriodMonth={setPeriodMonth}
                  periodMonth={periodMonth}
                  defaultPeriodMonth={Pph21TaxPeriodMonth.JANUARY}
                  blacklistPeriodMonths={[Pph21TaxPeriodMonth.DECEMBER]}
                />

                <PermanentEmployeeJanNov
                  selectedEmployee={selectedEmployee}
                  periodMonth={periodMonth}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="desember">
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
                  setPeriodMonth={setPeriodMonth}
                  periodMonth={periodMonth}
                  defaultPeriodMonth={Pph21TaxPeriodMonth.DECEMBER}
                  blacklistPeriodMonths={[
                    Pph21TaxPeriodMonth.JANUARY,
                    Pph21TaxPeriodMonth.FEBRUARY,
                    Pph21TaxPeriodMonth.MARCH,
                    Pph21TaxPeriodMonth.APRIL,
                    Pph21TaxPeriodMonth.MAY,
                    Pph21TaxPeriodMonth.JUNE,
                    Pph21TaxPeriodMonth.JULY,
                    Pph21TaxPeriodMonth.AUGUST,
                    Pph21TaxPeriodMonth.SEPTEMBER,
                    Pph21TaxPeriodMonth.OCTOBER,
                    Pph21TaxPeriodMonth.NOVEMBER,
                  ]}
                  periodMonthDisabled
                />

                <PermanentEmployeeDes
                  selectedEmployee={selectedEmployee}
                  periodMonth={periodMonth}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </Layout>
  );
}
