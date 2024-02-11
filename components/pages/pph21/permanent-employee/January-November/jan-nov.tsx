import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import useAddPph21PermanentEmployee from "@/hooks/pph21/useAddPph21PermanentEmployee";
import { Employee } from "@/types/employees/employees";
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
import { useEffect, useState } from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import Results from "../../general/results";
import GrossIncome from "./gross_income";
import PPh21Calculation from "./pph21-calculation";

interface PermanentEmployeeJanNovProps {
  selectedEmployee: Employee | undefined;
  periodMonth: Pph21TaxPeriodMonth;
}

export default function PermanentEmployeeJanNov({
  selectedEmployee,
  periodMonth,
}: PermanentEmployeeJanNovProps) {
  const router = useRouter();

  const [formDisabled, setFormDisabled] = useState(true);
  const form = useForm<PermanentEmployeeBeforeDecemberFormData>({
    resolver: zodResolver(PermanentEmployeeBeforeDecemberSchema),
    disabled: formDisabled,
    defaultValues: {
      employee_id: "",
      period: {
        month: Pph21TaxPeriodMonth.JANUARY,
        years: new Date().getFullYear(),
      },
      constants: {
        tariff_tax_non_npwp: 1.2,
        tariff_ter: 0,
      },
      calculations: {
        pph21_has_npwp: 0,
        pph21_non_npwp: 0,
      },
      result: {
        net_receipts: 0,
        total_pph21: 0,
        total_salary: 0,
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
      gross_salary: {
        allowance: 0,
        assurance: 0,
        bonus: 0,
        gross_income: 0,
        overtime_salary: 0,
        salary: 0,
        thr: 0,
      },
    },
  });

  useEffect(() => {
    if (periodMonth) {
      if (periodMonth === Pph21TaxPeriodMonth.DECEMBER) return;

      form.setValue("period.month", periodMonth);
    }
  }, [form, periodMonth]);

  useEffect(() => {
    if (selectedEmployee) {
      form.setValue("employee_id", selectedEmployee.id);
      form.setValue("constants.tariff_ter", selectedEmployee.ter?.percentage);
      setFormDisabled(false);
    }
  }, [form, selectedEmployee]);

  const { mutateAsync: mutatePph21, isPending: isMutatePph21Pending } =
    useAddPph21PermanentEmployee();

  console.log(form.getValues());
  const onSubmit = async (data: PermanentEmployeeBeforeDecemberFormData) => {
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

  const grossSalaryJanNovWatcher = form.watch([
    "gross_salary.salary",
    "gross_salary.allowance",
    "gross_salary.bonus",
    "gross_salary.gross_income",
    "gross_salary.thr",
    "gross_salary.overtime_salary",
    "gross_salary.assurance",
  ]);

  useEffect(() => {
    // Calculate for Jan - Nov
    const totalJanNov = Object.values(grossSalaryJanNovWatcher).reduce(
      (acc, curr) => Number(acc) + Number(curr)
    );
    const totalPPh21HasNPWP =
      totalJanNov * form.getValues("constants.tariff_ter");

    const totalPPh21NonNPWP =
      totalPPh21HasNPWP * form.getValues("constants.tariff_tax_non_npwp");

    const totalNetReceipts = totalJanNov - totalPPh21NonNPWP;

    form.setValue("result.total_salary", totalJanNov);
    form.setValue("calculations.pph21_has_npwp", totalPPh21HasNPWP);
    form.setValue("calculations.pph21_non_npwp", totalPPh21NonNPWP);
    form.setValue("result.total_pph21", totalPPh21NonNPWP);
    form.setValue("result.net_receipts", totalNetReceipts);
  }, [grossSalaryJanNovWatcher, form]);

  useEffect(() => {
    if (form.formState.errors.root) {
      toast({
        title: "Kesalahan Input",
        description: "Mohon periksa kembali data yang anda masukkan",
        variant: "destructive",
      });
    }
  }, [form.formState.errors]);

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-9 gap-x-12 gap-y-8 mt-9">
            <GrossIncome form={form} />
            <PPh21Calculation form={form} />
          </div>

          <Results form={form as UseFormReturn<PPh21EmployeeUnionFormData>} />

          <div className="flex justify-center mt-10 mb-10 mr-8 gap-10">
            <Button
              type="submit"
              disabled={!form.formState.isValid || isMutatePph21Pending}
            >
              {isMutatePph21Pending
                ? "Menyimpan..."
                : "Simpan Data Perpajakan Pegawai"}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
