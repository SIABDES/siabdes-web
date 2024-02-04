import FormNumberInput from "@/components/patan-ui/form/form-number-input";
import { Card, CardContent } from "@/components/ui/card";
import { PermanentEmployeeDecemberFormData } from "@/types/pph21/permanent-employee/permanent-employee";
import { useForm } from "react-hook-form";

interface NetCalculationProps {
  form: ReturnType<typeof useForm<PermanentEmployeeDecemberFormData>>;
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
          name="net_calculations.position_allowance"
          variant="inline"
          readonly
        />

        <FormNumberInput
          label="Iuran Setahun Dibayar Pegawai"
          control={form.control}
          name="net_calculations.annual_fee"
          variant="inline"
        />

        <FormNumberInput
          label="Premi Setahun Dibayar Pegawai"
          control={form.control}
          name="net_calculations.assurance"
          variant="inline"
        />

        <FormNumberInput
          label="Penghasilan Neto Setahun"
          control={form.control}
          name="net_calculations.net_income"
          variant="inline"
          readonly
        />
      </CardContent>
    </Card>
  );
}
