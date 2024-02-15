import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import useAddPph21PermanentEmployee from "@/hooks/pph21/useAddPph21PermanentEmployee";
import { Employee, EmployeesType } from "@/types/employees/employees";
import {
  PPh21EmployeeUnionFormData,
  Pph21TaxPeriodMonth,
} from "@/types/pph21/general";
import {
  PermanentEmployeeBeforeDecemberFormData,
  PermanentEmployeeBeforeDecemberSchema,
} from "@/types/pph21/permanent-employee/permanent-employee";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { UseFormReturn, useFieldArray, useForm } from "react-hook-form";
import Results from "../../general/results";
import GrossIncome from "./gross_income";
import PPh21Calculation from "./pph21-calculation";
import {
  PPh21PostPayloadRequest,
  Pph21MutationSchema,
} from "@/types/pph21/request";

interface PermanentEmployeeJanNovProps {
  selectedEmployee: Employee | undefined;
  periodMonth: Pph21TaxPeriodMonth;
}

export default function PermanentEmployeeJanNov({
  selectedEmployee,
  periodMonth,
}: PermanentEmployeeJanNovProps) {
  const router = useRouter();

  const [formDisabled, setFormDisabled] = useState(false);
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
  const { setValue: setFormValue, getValues: getFormValues } = form;

  useEffect(() => {
    if (periodMonth) {
      if (periodMonth === Pph21TaxPeriodMonth.DECEMBER) return;

      setFormValue("period_month", periodMonth);
    }
  }, [periodMonth, setFormValue]);

  useEffect(() => {
    if (selectedEmployee) {
      setFormValue("employee_id", selectedEmployee.id);
      setFormDisabled(false);
    }
  }, [selectedEmployee, setFormValue]);

  const { mutateAsync: mutatePph21, isPending: isMutatePph21Pending } =
    useAddPph21PermanentEmployee();

  const onSubmit = async (data: PPh21PostPayloadRequest) => {
    try {
      if (!selectedEmployee) {
        toast({
          title: "Kesalahan Input",
          description: "Mohon pilih pegawai terlebih dahulu",
          variant: "destructive",
          duration: 5000,
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
          variant: "destructive",
        });
      }
    }
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

  // Apply total gross salary result to form field
  useEffect(() => {
    if (!selectedEmployee) return;

    setFormValue("pph21_calculations.0.amount", totalGrossSalary);
    setFormValue("pph21_calculations.1.amount", totalGrossSalary);

    const npwpTariffPercentage = getFormValues(
      "pph21_calculations.0.tariff_percentage"
    );
    const npwpTariffResult = totalGrossSalary * npwpTariffPercentage;

    const noNpwpTariffPercentage = getFormValues(
      "pph21_calculations.1.tariff_percentage"
    );
    const noNpwpTariffResult = npwpTariffResult * noNpwpTariffPercentage;

    const totalPph21 = !!selectedEmployee.npwp
      ? npwpTariffResult
      : noNpwpTariffResult;

    setFormValue("pph21_calculations.0.result", npwpTariffResult);
    setFormValue("pph21_calculations.1.result", noNpwpTariffResult);

    setFormValue("result.total_salary", totalGrossSalary);
    setFormValue("result.total_pph21", totalPph21);
    setFormValue("result.net_receipts", totalGrossSalary - totalPph21);
  }, [getFormValues, selectedEmployee, setFormValue, totalGrossSalary]);

  // Show validation error toast if form has error
  useEffect(() => {
    if (form.formState.errors.root) {
      toast({
        title: "Kesalahan Input",
        description: "Mohon periksa kembali data yang anda masukkan",
        variant: "destructive",
      });
    }
  }, [form.formState.errors]);

  const isLoading = useMemo(() => {
    return isMutatePph21Pending || form.formState.isSubmitting;
  }, [form.formState.isSubmitting, isMutatePph21Pending]);

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
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Menyimpan..." : "Simpan Data Perpajakan Pegawai"}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
