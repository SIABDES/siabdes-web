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
import { PermanentEmployeeDecemberFormData } from "@/types/pph21/permanent-employee/permanent-employee";
import { PPh21PostPayloadRequest } from "@/types/pph21/request";
import { useForm } from "react-hook-form";

interface PPh21CutInDecemberProps {
  form: ReturnType<typeof useForm<PPh21PostPayloadRequest>>;
}
export default function PPh21CutInDecember({ form }: PPh21CutInDecemberProps) {
  return (
    <Card className="border border-gray-300 shadow-md">
      <h1 className="text-center font-bold text-sm mb-3 pt-3">
        PPh 21 Yang Harus Dipotong Di Bulan Desember
      </h1>
      <CardContent className="space-y-2.5">
        <FormNumberInput
          control={form.control}
          name="pph21_december_taxable_result.current_year_amount"
          variant="inline"
          defaultValue={0}
          label="PPh 21 Terutang Setahun"
          readonly
        />

        <FormNumberInput
          control={form.control}
          name="pph21_december_taxable_result.before_december_amount"
          variant="inline"
          defaultValue={0}
          label="PPh 21 Yang Telah Dipotong Sampai Dengan Bulan November"
          readonly
        />
      </CardContent>
    </Card>
  );
}
