import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import useGetEmployeeTer from "@/hooks/employee/useGetEmployeeTer";
import useAddPph21PermanentEmployee from "@/hooks/pph21/useAddPph21PermanentEmployee";
import { Employee, EmployeesType } from "@/types/employees/employees";
import { Pph21TaxPeriodMonth } from "@/types/pph21/general";
import {
  PPh21PostPayloadRequest,
  Pph21MutationSchema,
} from "@/types/pph21/request";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useDebounceValue } from "usehooks-ts";
import Results from "../../general/results";
import GrossIncome from "./gross_income";
import PPh21Calculation from "./pph21-calculation";

interface PermanentEmployeeJanNovProps {
  selectedEmployee: Employee | undefined;
  periodMonth: Pph21TaxPeriodMonth | null;
}

export default function PermanentEmployeeJanNov({
  selectedEmployee,
  periodMonth,
}: PermanentEmployeeJanNovProps) {
  const router = useRouter();

  const [formDisabled, setFormDisabled] = useState(true);
  const form = useForm<PPh21PostPayloadRequest>({
    resolver: zodResolver(Pph21MutationSchema),
    disabled: formDisabled,
    defaultValues: {
      period_month: undefined,
      period_years: new Date().getFullYear(),
      employee_type: EmployeesType.PEGAWAI_TETAP,
      employee_id: selectedEmployee?.id || "",
      gross_salary: {
        salary: 0,
        allowance: 0,
        assurance: 0,
        bonus: 0,
        overtime_salary: 0,
        thr: 0,
      },
      pph21_calculations: [
        {
          tariff_percentage: 0,
          amount: 0,
          result: 0,
        },
        {
          tariff_percentage: 1.2,
          amount: 0,
          result: 0,
        },
      ],
      result: {
        total_salary: 0,
        total_pph21: 0,
        net_receipts: 0,
      },
    },
  });
  const {
    setValue: setFormValue,
    getValues: getFormValues,
    formState,
    reset: resetForm,
  } = form;

  const formWatcher = form.watch();

  useEffect(() => {
    console.log(formState.errors);
    console.log(formWatcher);
  }, [formState.errors, formWatcher]);

  useEffect(() => {
    if (!periodMonth) return;
    if (periodMonth === Pph21TaxPeriodMonth.DECEMBER) return;

    setFormValue("period_month", periodMonth);
  }, [periodMonth, setFormValue]);

  useEffect(() => {
    if (selectedEmployee) {
      resetForm({
        period_month: periodMonth,
        period_years: new Date().getFullYear(),
        employee_type: EmployeesType.PEGAWAI_TETAP,
        pph21_calculations: [
          {
            tariff_percentage: 0,
            amount: 0,
            result: 0,
          },
          {
            tariff_percentage: 1.2,
            amount: 0,
            result: 0,
          },
        ],
      });
      setFormValue("employee_id", selectedEmployee.id);
      setFormDisabled(false);
    }
  }, [periodMonth, resetForm, selectedEmployee, setFormValue]);

  const { mutateAsync: mutatePph21, isPending: isMutatePph21Pending } =
    useAddPph21PermanentEmployee();

  const onSubmit = async (data: PPh21PostPayloadRequest) => {
    if (!selectedEmployee) {
      toast({
        title: "Kesalahan Input",
        description: "Mohon pilih pegawai terlebih dahulu",
        variant: "destructive",
      });

      return;
    }

    if (!periodMonth) {
      toast({
        title: "Kesalahan Input",
        description: "Mohon pilih bulan terlebih dahulu",
        variant: "destructive",
      });
      return;
    }

    const hasNpwp = !!selectedEmployee.npwp;

    if (hasNpwp) {
      // remove index 1
      data.pph21_calculations.pop();
    } else {
      // remove index 0
      data.pph21_calculations.shift();
    }

    await mutatePph21(data);

    router.push("/unit/tax/pph21");
  };

  const grossSalaryWatcher = form.watch([
    "gross_salary.salary",
    "gross_salary.allowance",
    "gross_salary.bonus",
    "gross_salary.thr",
    "gross_salary.overtime_salary",
    "gross_salary.assurance",
  ]);

  const totalGrossSalary = useMemo(() => {
    return (
      Object.values(grossSalaryWatcher).reduce(
        (acc, curr) => Number(acc) + Number(curr)
      ) ?? 0
    );
  }, [grossSalaryWatcher]);

  // Debounce total gross salary
  const [debounceTotalSalary, setDebounceTotalSalary] = useDebounceValue(
    totalGrossSalary,
    1000
  );

  // Fetch TER data
  const {
    mutateAsync: fetchTer,
    data: employeeTer,
    isPending: isEmployeeTerLoading,
  } = useGetEmployeeTer();

  // Fetch TER data when total gross salary changes
  useEffect(() => {
    if (!selectedEmployee) return;
    if (!selectedEmployee.ter) return;

    const period_month = getFormValues("period_month");
    if (!period_month) return;

    void fetchTer({
      employee_id: selectedEmployee.id,
      gross_salary: debounceTotalSalary,
      period_years: new Date().getFullYear(),
      period_month,
    });
  }, [debounceTotalSalary, fetchTer, getFormValues, selectedEmployee]);

  // Callback for applying PPh21 calculations
  const applyPph21Calculations = useCallback(() => {
    if (!selectedEmployee) return;

    const npwpTariffPercentage = getFormValues(
      "pph21_calculations.0.tariff_percentage"
    );
    const npwpTariffResult = totalGrossSalary * npwpTariffPercentage;

    const hasNpwp = !!selectedEmployee.npwp;
    const noNpwpTariffPercentage = getFormValues(
      "pph21_calculations.1.tariff_percentage"
    );
    const noNpwpTariffResult = hasNpwp
      ? 0
      : npwpTariffResult * noNpwpTariffPercentage;

    const totalPph21 = !!selectedEmployee.npwp
      ? npwpTariffResult
      : noNpwpTariffResult;

    setFormValue("pph21_calculations.0.result", npwpTariffResult);
    setFormValue("pph21_calculations.1.result", noNpwpTariffResult);

    setFormValue("result.total_salary", totalGrossSalary);
    setFormValue("result.total_pph21", totalPph21);
    setFormValue("result.net_receipts", totalGrossSalary - totalPph21);
  }, [getFormValues, selectedEmployee, setFormValue, totalGrossSalary]);

  // Apply TER result to form field
  useEffect(() => {
    if (!employeeTer) return;

    setFormValue(
      "pph21_calculations.0.tariff_percentage",
      employeeTer?.percentage
    );
    applyPph21Calculations();
  }, [applyPph21Calculations, employeeTer, setFormValue]);

  const npwpTariffResultWatcher = form.watch("pph21_calculations.0.result");

  // Apply total gross salary result to form field
  useEffect(() => {
    if (!selectedEmployee) return;

    setFormValue("pph21_calculations.0.amount", totalGrossSalary);

    const hasNpwp = !!selectedEmployee.npwp;
    const noNpwpAmount = hasNpwp ? 0 : npwpTariffResultWatcher;

    setFormValue("pph21_calculations.1.amount", noNpwpAmount);

    applyPph21Calculations();
  }, [
    applyPph21Calculations,
    npwpTariffResultWatcher,
    selectedEmployee,
    setFormValue,
    totalGrossSalary,
  ]);

  // Show validation error toast if form has error
  useEffect(() => {
    if (formState.errors.root) {
      toast({
        title: "Kesalahan Input",
        description: "Mohon periksa kembali data yang anda masukkan",
        variant: "destructive",
      });
    }
  }, [formState.errors]);

  const isLoading = useMemo(() => {
    return isMutatePph21Pending || formState.isSubmitting;
  }, [formState.isSubmitting, isMutatePph21Pending]);

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-9 gap-x-12 gap-y-8 mt-9">
            <GrossIncome form={form} />
            <PPh21Calculation form={form} />
          </div>

          <Results form={form} />

          <div className="flex justify-center mt-10 mb-10 mr-8 gap-10">
            <Button type="submit" disabled={isLoading || isEmployeeTerLoading}>
              {isLoading ? "Menyimpan..." : "Simpan Data Perpajakan Pegawai"}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
