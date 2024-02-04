import { Form } from "@/components/ui/form";
import { Employee } from "@/types/employees/employees";
import {
  PPh21EmployeeBaseFormData,
  PPh21EmployeeUnionFormData,
  Pph21TaxPeriodMonth,
} from "@/types/pph21/general";
import {
  PermanentEmployeeDecemberFormData,
  PermanentEmployeeDecemberSchema,
} from "@/types/pph21/permanent-employee/permanent-employee";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";
import Results from "../../general/results";
import GrossIncomeDes from "./gross-income";
import NetCalculation from "./net-calculation";
import PKPCalculation from "./pkp-calculation";
import PPh21Calculation from "./pph21-calculation";
import PPh21CutInDecember from "./pph21-cut-in-december";
import { useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

interface PermanentEmployeeDesProps {
  selectedEmployee: Employee | undefined;
  periodMonth: Pph21TaxPeriodMonth;
}

export default function PermanentEmployeeDes({
  selectedEmployee,
  periodMonth,
}: PermanentEmployeeDesProps) {
  const form = useForm<PermanentEmployeeDecemberFormData>({
    resolver: zodResolver(PermanentEmployeeDecemberSchema),
    defaultValues: {
      employee_id: "",
      result: {
        net_receipts: 0,
        total_pph21: 0,
        total_salary: 0,
      },
      period: {
        month: Pph21TaxPeriodMonth.DECEMBER,
        years: new Date().getFullYear(),
      },
      net_calculations: {
        annual_fee: 0,
        assurance: 0,
        net_income: 0,
        position_allowance: 0,
      },
      gross_salary: {
        allowance: 0,
        bonus: 0,
        gross_total_before_december: 0,
        overtime_salary: 0,
        salary: 0,
        thr: 0,
        assurance: 0,
      },
      pph21_cut_in_december: {
        pph21_deducted_until_december: 0,
        pph21_deducted_until_november: 0,
        pph21_payable: 0,
      },
      pkp_calculations: {
        non_taxable_income: 0,
        taxable_income: 0,
      },
    },
  });

  useEffect(() => {
    if (selectedEmployee) {
      form.setValue("employee_id", selectedEmployee.id);
      form.setValue(
        "pkp_calculations.non_taxable_income",
        selectedEmployee.ptkp.boundary_salary
      );
    }
  }, [form, selectedEmployee]);

  useEffect(() => {
    if (form.formState.errors.root) {
      toast({
        title: "Kesalahan Input",
        description: "Mohon periksa kembali data yang anda masukkan",
        variant: "destructive",
      });
    }
  }, [form.formState.errors]);

  const grossSalaryWatcher = form.watch([
    "gross_salary.gross_total_before_december",
    "gross_salary.salary",
    "gross_salary.allowance",
    "gross_salary.thr",
    "gross_salary.bonus",
    "gross_salary.overtime_salary",
    "gross_salary.assurance",
  ]);

  const netCalculationWatcher = form.watch([
    "net_calculations.annual_fee",
    "net_calculations.assurance",
    "net_calculations.position_allowance",
  ]);

  useEffect(() => {
    const totalGrossDecember = Object.values(grossSalaryWatcher).reduce(
      (acc, curr) => acc + curr,
      0
    );

    form.setValue("result.total_salary", totalGrossDecember);
  }, [form, grossSalaryWatcher]);

  useEffect(() => {
    const totalGrossDecember = Object.values(grossSalaryWatcher).reduce(
      (acc, curr) => acc + curr,
      0
    );

    const totalNetCalculation = Object.values(netCalculationWatcher).reduce(
      (acc, curr) => acc + curr,
      0
    );

    form.setValue(
      "net_calculations.net_income",
      totalGrossDecember - totalNetCalculation
    );
  }, [form, grossSalaryWatcher, netCalculationWatcher]);

  const onSubmit = async (data: PermanentEmployeeDecemberFormData) => {
    if (!data.employee_id) {
      return;
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-x-9 mt-8">
          <GrossIncomeDes form={form} />

          <div className="space-y-9">
            <NetCalculation form={form} />
            <PKPCalculation form={form} />
          </div>
        </div>

        <PPh21Calculation form={form} />

        <PPh21CutInDecember form={form} />

        <Results form={form as UseFormReturn<PPh21EmployeeUnionFormData>} />

        <Button type="submit">Simpan</Button>
      </form>
    </Form>
  );
}
