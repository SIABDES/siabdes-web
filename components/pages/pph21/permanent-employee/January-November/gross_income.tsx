import FormNumberInput from "@/components/patan-ui/form/form-number-input";
import { Card, CardContent } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PermanentEmployeeBeforeDecemberFormData } from "@/types/pph21/permanent-employee/permanent-employee";
import { useForm } from "react-hook-form";

interface GrossIncomeProps {
  form: ReturnType<typeof useForm<PermanentEmployeeBeforeDecemberFormData>>;
}

export default function GrossIncome({ form }: GrossIncomeProps) {
  return (
    <Card className="col-span-4 border border-gray-300">
      <h1 className="text-center font-bold text-sm mb-3 pt-3">
        Penghasilan Bruto
      </h1>
      <CardContent>
        <FormNumberInput
          control={form.control}
          name="gross_salary.salary"
          label="Gaji"
          variant="inline"
          defaultValue={0}
          placeholder="Gaji"
        />

        <FormNumberInput
          control={form.control}
          name="gross_salary.allowance"
          label="Tunjangan"
          variant="inline"
          defaultValue={0}
          placeholder="Tunjangan"
        />

        <FormNumberInput
          control={form.control}
          name="gross_salary.thr"
          label="Tunjangan Hari raya (THR)"
          variant="inline"
          defaultValue={0}
          placeholder="Tunjangan Hari Raya"
        />

        <FormNumberInput
          control={form.control}
          name="gross_salary.bonus"
          label="Bonus"
          variant="inline"
          defaultValue={0}
          placeholder="Bonus"
        />

        <FormNumberInput
          control={form.control}
          name="gross_salary.overtime_salary"
          label="Lembur"
          variant="inline"
          defaultValue={0}
          placeholder="Lembur"
        />

        <FormNumberInput
          control={form.control}
          name="gross_salary.assurance"
          label="Premi Dibayar Pemberi Kerja"
          variant="inline"
          defaultValue={0}
          placeholder="Premi Dibayar Pemberi Kerja"
        />

        <FormNumberInput
          control={form.control}
          name="result.total_salary"
          label="Penghasilan Bruto"
          variant="inline"
          defaultValue={0}
          placeholder="Penghasilan Bruto"
          readonly
        />
      </CardContent>
    </Card>
  );
}
