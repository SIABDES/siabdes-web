"use client";

import Layout from "@/components/layout/layout";
import EmployeeData12Months from "@/components/pages/pph21/general/employee-data-12-months";
import SeverencePayOneTimePPh21Calculation from "@/components/pages/pph21/severance-pay/one-time/pph21-calculation";
import SeverencePayOneTimeResults from "@/components/pages/pph21/severance-pay/one-time/result";
import SeverencePayOneTimeSalary from "@/components/pages/pph21/severance-pay/one-time/salary";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import useGetEmployees from "@/hooks/employee/useGetEmployees";
import useAddPph21SeverancePayOneTime from "@/hooks/pph21/useAddPph21SeverancePayOneTime";
import { Employee, EmployeesType } from "@/types/employees/employees";
import { Pph21TaxPeriodMonth } from "@/types/pph21/general";
import {
  SeverencePayOneTimeFormData,
  SeverencePayOneTimeScema,
} from "@/types/pph21/severance-pay/severence-pay";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { reverseFormat } from "@/common/helpers/number-format";
import {
  PPh21PostPayloadRequest,
  Pph21MutationSchema,
} from "@/types/pph21/request";
import { max, set } from "date-fns";
import { Result } from "postcss";
import Results from "@/components/pages/pph21/general/results";
import Pph21EmployeeData from "@/components/pages/pph21/general/pph21-employee-data";
import { toast } from "sonner";
export default function OneTime() {
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
      employee_id: selectedEmployee?.id || "",
      employee_type: EmployeesType.DIBAYAR_SEKALIGUS,
      period_month: undefined,
      period_years: new Date().getFullYear(),
      gross_salary: {
        salary: 0,
      },
      pph21_calculations: [
        {
          tariff_percentage: 0,
          amount: 0,
          result: 0,
        },
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
      setValue("period_month", periodMonth);
    }
  }, [periodMonth, setValue]);

  useEffect(() => {
    if (selectedEmployee) {
      reset();
      setValue("employee_id", selectedEmployee.id);
      setFormDisabled(false);
    }
  }, [reset, selectedEmployee, setValue]);

  useEffect(() => {
    if (formState.errors.root) {
      toast.error("Kesalahan Input!", {
        description: formState.errors.root.message,
      });
    }
  }, [formState.errors]);

  const pkpWatcher = watch("gross_salary.salary");

  const { update: updatePph21Field, remove: removePph21Field } = useFieldArray({
    control: form.control,
    name: "pph21_calculations",
  });

  useEffect(() => {
    const maxPercentage0 = 50_000_000;
    const maxPercentage5 = 50_000_000;
    const maxPercentage15 = 400_000_000;

    const percentage0 = getValues("pph21_calculations.0.tariff_percentage");
    const percentage5 = getValues("pph21_calculations.1.tariff_percentage");
    const percentage15 = getValues("pph21_calculations.2.tariff_percentage");
    const percentage25 = getValues("pph21_calculations.3.tariff_percentage");

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

    setValue("pph21_calculations.0.amount", 0, { shouldDirty: false });
    setValue("pph21_calculations.0.result", 0, { shouldDirty: false });
    setValue("pph21_calculations.1.amount", 0, { shouldDirty: false });
    setValue("pph21_calculations.1.result", 0, { shouldDirty: false });
    setValue("pph21_calculations.2.amount", 0, { shouldDirty: false });
    setValue("pph21_calculations.2.result", 0, { shouldDirty: false });
    setValue("pph21_calculations.3.amount", 0, { shouldDirty: false });
    setValue("pph21_calculations.3.result", 0, { shouldDirty: false });
    setValue("result.total_pph21", 0, { shouldDirty: false });
    setValue("result.net_receipts", 0, { shouldDirty: false });
    setValue("result.total_salary", 0, { shouldDirty: false });
    updatePph21Field(0, {
      tariff_percentage: percentage0,
      amount: 0,
      result: 0,
    });
    updatePph21Field(1, {
      tariff_percentage: percentage5,
      amount: 0,
      result: 0,
    });
    updatePph21Field(2, {
      tariff_percentage: percentage15,
      amount: 0,
      result: 0,
    });
    updatePph21Field(3, {
      tariff_percentage: percentage25,
      amount: 0,
      result: 0,
    });

    const applyResultPerccentage0 = applyPercentage(
      tempTaxable,
      0,
      percentage0,
      maxPercentage0
    );

    if (tempTaxable <= maxPercentage0) return;
    tempTaxable -= applyResultPerccentage0;

    const applyResultPercentage5 = applyPercentage(
      tempTaxable,
      1,
      percentage5,
      maxPercentage5
    );

    if (tempTaxable <= maxPercentage5) return;
    tempTaxable -= applyResultPercentage5;

    const applyResultPercentage15 = applyPercentage(
      tempTaxable,
      2,
      percentage15,
      maxPercentage15
    );

    if (tempTaxable <= maxPercentage15) return;
    tempTaxable -= applyResultPercentage15;

    applyPercentage(tempTaxable, 3, percentage25);
  }, [pkpWatcher, updatePph21Field, setValue, getValues]);

  const npwpPph21CalculationsResultWatcher = watch([
    "pph21_calculations.0.result",
    "pph21_calculations.1.result",
    "pph21_calculations.2.result",
    "pph21_calculations.3.result",
  ]);

  const totalNpwpPph21CalculationsResult = useMemo(() => {
    return Object.values(npwpPph21CalculationsResultWatcher).reduce(
      (acc: number, curr) => acc + curr,
      0
    );
  }, [npwpPph21CalculationsResultWatcher]);

  useEffect(() => {
    if (!selectedEmployee) return;
    if (!pkpWatcher) return;

    setValue("result.total_salary", pkpWatcher);
    setValue("result.total_pph21", totalNpwpPph21CalculationsResult);
    setValue(
      "result.net_receipts",
      pkpWatcher - totalNpwpPph21CalculationsResult
    );
  }, [
    totalNpwpPph21CalculationsResult,
    pkpWatcher,
    setValue,
    selectedEmployee,
  ]);

  const { mutateAsync: mutatePph21, isPending: isMutatePph21Pending } =
    useAddPph21SeverancePayOneTime();

  const onSubmit = async (data: PPh21PostPayloadRequest) => {
    if (!selectedEmployee) {
      toast.error("Kesalahan Input!", {
        description: "Mohon pilih pegawai terlebih dahulu",
      });

      return;
    }

    await mutatePph21(data);

    router.push("/unit/tax/pph21");
  };

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
            <Button>Lampiran</Button>
            <Link href={"/unit/tax/pph21"}>
              <Button>Kembali</Button>
            </Link>
          </div>
        </div>
        <Card className="bg-white border border-gray-300 p-3 rounded-xl mt-5 pb-5">
          <h1 className="mt-3 mb-4 text-center font-bold text-lg">
            Pesangon - Dibayar Sekaligus ({">"} 2 tahun)
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
              <SeverencePayOneTimeSalary form={form} />
              <SeverencePayOneTimePPh21Calculation form={form} />
              {/* <Results form={form} /> */}
              {/* <SeverencePayOneTimeResults
                form={form}
                total_salary="result.total_salary"
                total_pph21="result.total_pph21"
                net_receipts="result.net_receipts"
              /> */}
              <Results form={form} />
              <div className="flex justify-center mt-10 mb-10 mr-8 gap-10">
                <Button type="submit" disabled={isLoading}>
                  {isLoading
                    ? "Menyimpan..."
                    : "Simpan Data Perpajakan Pegawai"}
                </Button>
              </div>
            </form>
          </Form>
        </Card>
      </section>
    </Layout>
  );
}
