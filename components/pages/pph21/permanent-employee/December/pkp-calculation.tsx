import FormNumberInput from "@/components/patan-ui/form/form-number-input";
import { Card, CardContent } from "@/components/ui/card";
import { PermanentEmployeeDecemberFormData } from "@/types/pph21/permanent-employee/permanent-employee";
import { PPh21PostPayloadRequest } from "@/types/pph21/request";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";

interface PKPCalculationProps {
  form: ReturnType<typeof useForm<PPh21PostPayloadRequest>>;
}

export default function PKPCalculation({ form }: PKPCalculationProps) {
  const { watch, setValue, getValues, control } = form;
  const grossSalaryWatcher = watch([
    "gross_salary.salary",
    "gross_salary.allowance",
    "gross_salary.thr",
    "gross_salary.bonus",
    "gross_salary.overtime_salary",
    "gross_salary.assurance",
  ]);

  const totalGrossSalary = useMemo(() => {
    return (
      Object.values(grossSalaryWatcher).reduce(
        (acc, curr) => Number(acc) + Number(curr),
        0
      ) ?? 0
    );
  }, [grossSalaryWatcher]);

  useEffect(() => {
    const ptkp = getValues("pkp_calculations.ptkp") ?? 0;

    const taxableIncome = totalGrossSalary - ptkp;

    setValue("pkp_calculations.result", Math.max(0, taxableIncome));
  }, [getValues, setValue, totalGrossSalary]);

  return (
    <Card className="border border-gray-300 shadow-md">
      <h1 className="text-center font-bold text-sm mb-3 pt-3">
        Perhitungan Pajak Kena Pajak (PKP)
      </h1>
      <CardContent>
        <FormNumberInput
          label="Penghasilan Tidak Kena Pajak"
          control={control}
          name="pkp_calculations.ptkp"
          variant="inline"
          readonly
        />

        <FormNumberInput
          label="Penghasilan Kena Pajak Setahun"
          control={control}
          name="pkp_calculations.result"
          variant="inline"
          readonly
        />
      </CardContent>
    </Card>
  );
}
