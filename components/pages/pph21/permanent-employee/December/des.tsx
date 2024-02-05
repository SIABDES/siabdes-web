import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Employee } from "@/types/employees/employees";
import {
  PPh21EmployeeUnionFormData,
  Pph21TaxPeriodMonth,
} from "@/types/pph21/general";
import {
  PermanentEmployeeDecemberFormData,
  PermanentEmployeeDecemberSchema,
} from "@/types/pph21/permanent-employee/permanent-employee";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useState } from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import Results from "../../general/results";
import GrossIncomeDes from "./gross-income";
import NetCalculation from "./net-calculation";
import PKPCalculation from "./pkp-calculation";
import PPh21Calculation from "./pph21-calculation";
import PPh21CutInDecember from "./pph21-cut-in-december";

interface PermanentEmployeeDesProps {
  selectedEmployee: Employee | undefined;
  periodMonth: Pph21TaxPeriodMonth;
}

export default function PermanentEmployeeDes({
  selectedEmployee,
  periodMonth,
}: PermanentEmployeeDesProps) {
  const [formDisabled, setFormDisabled] = useState(true);
  const form = useForm<PermanentEmployeeDecemberFormData>({
    resolver: zodResolver(PermanentEmployeeDecemberSchema),
    disabled: formDisabled,
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
  const { setValue, formState, reset, watch } = form;

  useEffect(() => {
    if (selectedEmployee) {
      reset();
      setValue("employee_id", selectedEmployee.id);
      setValue(
        "pkp_calculations.non_taxable_income",
        selectedEmployee.ptkp.boundary_salary
      );
      setFormDisabled(false);
    }
  }, [reset, selectedEmployee, setValue]);

  useEffect(() => {
    if (formState.errors.root) {
      toast({
        title: "Kesalahan Input",
        description: "Mohon periksa kembali data yang anda masukkan",
        variant: "destructive",
      });
    }
  }, [formState.errors]);

  const grossSalaryWatcher = watch([
    "gross_salary.gross_total_before_december",
    "gross_salary.salary",
    "gross_salary.allowance",
    "gross_salary.thr",
    "gross_salary.bonus",
    "gross_salary.overtime_salary",
    "gross_salary.assurance",
  ]);

  const netCalculationWatcher = watch([
    "net_calculations.annual_fee",
    "net_calculations.assurance",
    "net_calculations.position_allowance",
  ]);

  const totalGrossDecember = useMemo(() => {
    return Object.values(grossSalaryWatcher).reduce(
      (acc, curr) => acc + curr,
      0
    );
  }, [grossSalaryWatcher]);

  const totalNetCalculation = useMemo(() => {
    return Object.values(netCalculationWatcher).reduce(
      (acc, curr) => acc + curr,
      0
    );
  }, [netCalculationWatcher]);

  useEffect(() => {
    setValue("result.total_salary", totalGrossDecember);
  }, [setValue, totalGrossDecember]);

  useEffect(() => {
    setValue(
      "net_calculations.net_income",
      totalGrossDecember - totalNetCalculation
    );
  }, [setValue, totalGrossDecember, totalNetCalculation]);

  const onSubmit = async (data: PermanentEmployeeDecemberFormData) => {
    if (!data.employee_id) {
      return;
    }
  };

  return (
    <>
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

          <Button
            type="submit"
            disabled={!formState.isValid || form.formState.isSubmitting}
          >
            Simpan
          </Button>
        </form>
      </Form>
    </>
  );
}
