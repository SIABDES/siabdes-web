import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Employee, EmployeesType } from "@/types/employees/employees";
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
import { UseFormReturn, useFieldArray, useForm } from "react-hook-form";
import Results from "../../general/results";
import GrossIncomeDes from "./gross-income";
import NetCalculation from "./net-calculation";
import PKPCalculation from "./pkp-calculation";
import PPh21Calculation from "./pph21-calculation";
import PPh21CutInDecember from "./pph21-cut-in-december";
import {
  PPh21PostPayloadRequest,
  Pph21MutationSchema,
} from "@/types/pph21/request";
import useAddPph21PermanentEmployee from "@/hooks/pph21/useAddPph21PermanentEmployee";
import { useRouter } from "next/navigation";

interface PermanentEmployeeDesProps {
  selectedEmployee: Employee | undefined;
  periodMonth: Pph21TaxPeriodMonth;
}

export default function PermanentEmployeeDes({
  selectedEmployee,
  periodMonth,
}: PermanentEmployeeDesProps) {
  const router = useRouter();
  const [formDisabled, setFormDisabled] = useState(true);
  const [grossSalaryBeforeDecember, setGrossSalaryBeforeDecember] = useState(0);

  const form = useForm<PPh21PostPayloadRequest>({
    resolver: zodResolver(Pph21MutationSchema),
    disabled: formDisabled,
    defaultValues: {
      employee_id: selectedEmployee?.id || "",
      period_month: periodMonth,
      period_years: new Date().getFullYear(),
      employee_type: EmployeesType.PEGAWAI_TETAP,
      gross_salary: {
        salary: 0,
        allowance: 0,
        bonus: 0,
        thr: 0,
        overtime_salary: 0,
        assurance: 0,
      },
      net_calculations: {
        position_deduction: 0,
        annual_assurance: 0,
        annual_contribution: 0,
        result: 0,
      },
      pkp_calculations: {
        amount: 0,
        result: 0,
        ptkp: selectedEmployee?.ptkp.boundary_salary || 0,
      },
      result: {
        total_salary: 0,
        total_pph21: 0,
        net_receipts: 0,
      },
      pph21_calculations: [
        // Has npwp
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
        // No Npwp
        {
          tariff_percentage: 1.2,
          amount: 0,
          result: 0,
        },
      ],
    },
  });

  const { setValue, formState, reset, watch, getValues } = form;

  useEffect(() => {
    if (selectedEmployee) {
      reset();
      setValue("employee_id", selectedEmployee.id);
      setValue("pkp_calculations.ptkp", selectedEmployee.ptkp.boundary_salary);
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
    "gross_salary.salary",
    "gross_salary.allowance",
    "gross_salary.thr",
    "gross_salary.bonus",
    "gross_salary.overtime_salary",
    "gross_salary.assurance",
  ]);

  const netCalculationWatcher = watch([
    "net_calculations.annual_assurance",
    "net_calculations.annual_contribution",
    "net_calculations.position_deduction",
  ]);

  const totalGrossDecember = useMemo(() => {
    const grossSalary =
      Object.values(grossSalaryWatcher).reduce(
        (acc, curr) => Number(acc) + Number(curr),
        0
      ) ?? 0;

    return grossSalary + grossSalaryBeforeDecember;
  }, [grossSalaryBeforeDecember, grossSalaryWatcher]);

  useEffect(() => {
    const positionDeduction = totalGrossDecember * 0.05;
    const maxPositionDeduction = 6_000_000;

    const result = Math.min(positionDeduction, maxPositionDeduction);

    setValue("net_calculations.position_deduction", result);
  }, [setValue, totalGrossDecember]);

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
      "net_calculations.result",
      totalGrossDecember - totalNetCalculation
    );
  }, [setValue, totalGrossDecember, totalNetCalculation]);

  const pkpWatcher = watch("pkp_calculations.result");

  const { update: updatePph21Field, remove: removePph21Field } = useFieldArray({
    control: form.control,
    name: "pph21_calculations",
  });

  // Apply pph21 calculations for has npwp
  useEffect(() => {
    const maxPercentage5 = 60_000_000;
    const maxPercentage15 = 190_000_000;
    const maxPercentage25 = 250_000_000;
    const maxPercentage30 = 4_500_000_000;

    const percentage5 = getValues("pph21_calculations.0.tariff_percentage");
    const percentage15 = getValues("pph21_calculations.1.tariff_percentage");
    const percentage25 = getValues("pph21_calculations.2.tariff_percentage");
    const percentage30 = getValues("pph21_calculations.3.tariff_percentage");
    const percentage35 = getValues("pph21_calculations.4.tariff_percentage");

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

    let tempTaxable = pkpWatcher;

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
  }, [getValues, pkpWatcher, setValue, totalGrossDecember, updatePph21Field]);

  const npwpPph21CalculationsResultWatcher = watch([
    "pph21_calculations.0.result",
    "pph21_calculations.1.result",
    "pph21_calculations.2.result",
    "pph21_calculations.3.result",
    "pph21_calculations.4.result",
  ]);

  const totalNpwpPph21CalculationsResult = useMemo(() => {
    return Object.values(npwpPph21CalculationsResultWatcher).reduce(
      (acc, curr) => acc + curr,
      0
    );
  }, [npwpPph21CalculationsResultWatcher]);

  useEffect(() => {
    const tariffPercentage = getValues(
      "pph21_calculations.5.tariff_percentage"
    );
    const result = totalNpwpPph21CalculationsResult * tariffPercentage;

    setValue("pph21_calculations.5.amount", totalNpwpPph21CalculationsResult);
    setValue("pph21_calculations.5.result", result);
  }, [getValues, setValue, totalNpwpPph21CalculationsResult]);

  const noNpwpPph21CalculationsResultWatcher = watch(
    "pph21_calculations.5.result"
  );

  useEffect(() => {
    if (!selectedEmployee) return;

    const totalPph21 = !!selectedEmployee.npwp
      ? totalNpwpPph21CalculationsResult
      : noNpwpPph21CalculationsResultWatcher;

    const netReceipts = totalGrossDecember - totalPph21;

    setValue("result.total_pph21", totalPph21);
    setValue("result.net_receipts", netReceipts);

    setValue("pph21_december_taxable_result.current_year_amount", totalPph21);
    setValue(
      "pph21_december_taxable_result.before_december_amount",
      grossSalaryBeforeDecember
    );
  }, [
    grossSalaryBeforeDecember,
    noNpwpPph21CalculationsResultWatcher,
    selectedEmployee,
    setValue,
    totalGrossDecember,
    totalNpwpPph21CalculationsResult,
  ]);

  useEffect(() => {
    if (formState.errors.root) {
      toast({
        title: "Kesalahan Input",
        description: "Mohon periksa kembali data yang anda masukkan",
        variant: "destructive",
      });
    }
  }, [formState.errors.root]);

  const { mutateAsync: mutateAddPph21, isPending: isAddPph21Loading } =
    useAddPph21PermanentEmployee();

  const onSubmit = async (data: PPh21PostPayloadRequest) => {
    if (!selectedEmployee || !data.employee_id) {
      toast({
        title: "Kesalahan Input",
        description: "Harap pilih pegawai terlebih dahulu",
        variant: "destructive",
      });
      return;
    }

    const hasNpwp = !!selectedEmployee.npwp;

    if (hasNpwp) {
      // trim no npwp pph21 calculations
      data.pph21_calculations.pop();
    } else {
      // trim npwp pph21 calculations
      removePph21Field([0, 1, 2, 3, 4]);
    }

    await mutateAddPph21(data);

    router.push("/unit/tax/pph21");
  };

  const isLoading = useMemo(() => {
    return formState.isSubmitting || isAddPph21Loading;
  }, [formState.isSubmitting, isAddPph21Loading]);

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-x-9 mt-8">
            <GrossIncomeDes
              form={form}
              grossSalaryBeforeDecember={grossSalaryBeforeDecember}
            />

            <div className="space-y-9">
              <NetCalculation form={form} />
              <PKPCalculation form={form} />
            </div>
          </div>

          <PPh21Calculation form={form} />

          <PPh21CutInDecember form={form} />

          <Results form={form} />

          <Button type="submit" className="mt-6" disabled={isLoading}>
            {isLoading ? "Menyimpan" : "Simpan Data Perpajakan Pegawai"}
          </Button>
        </form>
      </Form>
    </>
  );
}
