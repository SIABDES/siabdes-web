import FormNumberInput from '@/components/patan-ui/form/form-number-input';
import { Card } from '@/components/ui/card';
import { PPh21PostPayloadRequest } from '@/types/pph21/request';
import { useForm } from 'react-hook-form';

interface SalaryProps {
  form: ReturnType<typeof useForm<PPh21PostPayloadRequest>>;
}
export default function TemporaryEmployeeNotMonthlySalary({
  form,
}: SalaryProps) {
  return (
    <Card className="w-1/2 mb-9 mt-12">
      <FormNumberInput
        control={form.control}
        name="gross_salary.salary"
        label="Upah Harian"
        variant="inline"
        defaultValue={0}
        placeholder="Penghasilan Sehari"
        className="px-6 py-3"
      />
    </Card>
  );
}
