import FormNumberInput from "@/components/patan-ui/form/form-number-input";
import { Card, CardContent } from "@/components/ui/card";
import { PPh21PostPayloadRequest } from "@/types/pph21/request";
import { useForm } from "react-hook-form";

interface GrossIncomeProps {
  form: ReturnType<typeof useForm<PPh21PostPayloadRequest>>;
}

export default function GrossIncome({ form }: GrossIncomeProps) {
  const { setValue, getValues, watch, control } = form;

  return (
    <Card className="col-span-4 border border-gray-300">
      <h1 className="text-center font-bold text-sm mb-3 pt-3">
        Penghasilan Bruto
      </h1>
      <CardContent>
        <FormNumberInput
          control={control}
          name="gross_salary.salary"
          label="Gaji"
          variant="inline"
          defaultValue={0}
          placeholder="Gaji"
        />

        <FormNumberInput
          control={control}
          name="gross_salary.allowance"
          label="Tunjangan"
          variant="inline"
          defaultValue={0}
          placeholder="Tunjangan"
        />

        <FormNumberInput
          control={control}
          name="gross_salary.thr"
          label="Tunjangan Hari raya (THR)"
          variant="inline"
          defaultValue={0}
          placeholder="Tunjangan Hari Raya"
        />

        <FormNumberInput
          control={control}
          name="gross_salary.bonus"
          label="Bonus"
          variant="inline"
          defaultValue={0}
          placeholder="Bonus"
        />

        <FormNumberInput
          control={control}
          name="gross_salary.overtime_salary"
          label="Lembur"
          variant="inline"
          defaultValue={0}
          placeholder="Lembur"
        />

        <FormNumberInput
          control={control}
          name="gross_salary.assurance"
          label="Premi Dibayar Pemberi Kerja"
          variant="inline"
          defaultValue={0}
          placeholder="Premi Dibayar Pemberi Kerja"
        />

        <FormNumberInput
          control={control}
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
