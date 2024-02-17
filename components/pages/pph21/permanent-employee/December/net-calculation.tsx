import FormNumberInput from "@/components/patan-ui/form/form-number-input";
import { Card, CardContent } from "@/components/ui/card";
import { PermanentEmployeeDecemberFormData } from "@/types/pph21/permanent-employee/permanent-employee";
import { PPh21PostPayloadRequest } from "@/types/pph21/request";
import { useForm } from "react-hook-form";

interface NetCalculationProps {
  form: ReturnType<typeof useForm<PPh21PostPayloadRequest>>;
}

export default function NetCalculation({ form }: NetCalculationProps) {
  return (
    <Card className="border border-gray-300 shadow-md">
      <h1 className="text-center font-bold text-sm mb-3 pt-3">
        Perhitungan Neto
      </h1>
      <CardContent>
        <FormNumberInput
          label="Biaya Jabatan"
          control={form.control}
          name="net_calculations.position_deduction"
          variant="inline"
          readonly
        />

        <FormNumberInput
          label="Iuran Setahun Dibayar Pegawai"
          control={form.control}
          name="net_calculations.annual_contribution"
          variant="inline"
        />

        <FormNumberInput
          label="Premi Setahun Dibayar Pegawai"
          control={form.control}
          name="net_calculations.annual_assurance"
          variant="inline"
        />

        <FormNumberInput
          label="Penghasilan Neto Setahun"
          control={form.control}
          name="net_calculations.result"
          variant="inline"
          readonly
        />
      </CardContent>
    </Card>
  );
}
