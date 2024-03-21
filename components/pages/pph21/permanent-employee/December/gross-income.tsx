import FormNumberInput from "@/components/patan-ui/form/form-number-input";
import NumberInput from "@/components/patan-ui/form/number-input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { PermanentEmployeeDecemberFormData } from "@/types/pph21/permanent-employee/permanent-employee";
import { PPh21PostPayloadRequest } from "@/types/pph21/request";
import { useForm } from "react-hook-form";

interface PermanentEmployeeDesProps {
  form: ReturnType<typeof useForm<PPh21PostPayloadRequest>>;
  grossSalaryBeforeDecember: number;
}

export default function GrossIncomeDes({
  form,
  grossSalaryBeforeDecember,
}: PermanentEmployeeDesProps) {
  return (
    <Card className="border border-gray-300 shadow-md">
      <h1 className="text-center font-bold text-sm mb-3 pt-3">
        Penghasilan Bruto
      </h1>
      <CardContent>
        <NumberInput
          value={grossSalaryBeforeDecember}
          label="Penghasilan Bruto Kumulatif Jan-Nov"
          variant="inline"
          classNameContainer="mb-4"
          readonly
          disabled={form.formState.disabled}
        />

        <p className="text-sm font-medium">Penghasilan Bruto Desember :</p>

        <FormNumberInput
          label="Gaji"
          control={form.control}
          name="gross_salary.salary"
          variant="inline"
        />

        <FormNumberInput
          label="Tunjangan"
          control={form.control}
          name="gross_salary.allowance"
          variant="inline"
        />

        <FormNumberInput
          label="Tunjangan Hari Raya (THR)"
          control={form.control}
          name="gross_salary.thr"
          variant="inline"
        />

        <FormNumberInput
          label="Bonus"
          control={form.control}
          name="gross_salary.bonus"
          variant="inline"
        />

        <FormNumberInput
          label="Lembur"
          control={form.control}
          name="gross_salary.overtime_salary"
          variant="inline"
        />

        <FormNumberInput
          label="Premi JKK dan JKM Dibayar BUMDes"
          control={form.control}
          name="gross_salary.assurance"
          variant="inline"
        />

        <FormNumberInput
          label="Total Bruto Disetahunkan"
          control={form.control}
          name="result.total_salary"
          variant="inline"
          readonly
        />
      </CardContent>
    </Card>
  );
}
