import FormNumberInput from '@/components/patan-ui/form/form-number-input';
import { Card, CardContent } from '@/components/ui/card';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PPh21EmployeeUnionFormData } from '@/types/pph21/general';
import { UseFormReturn } from 'react-hook-form';

interface ResultsProps {
  form: UseFormReturn<PPh21EmployeeUnionFormData>;
}

export default function Results({ form }: ResultsProps) {
  return (
    <div className="grid grid-cols-3 gap-x-9 mt-9">
      <Card>
        <CardContent>
          <FormNumberInput
            control={form.control}
            name="result.total_salary"
            label="Jumlah Penghasilan"
            className="mt-4"
            readonly
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <FormNumberInput
            control={form.control}
            name="result.total_pph21"
            label="Jumlah Pph 21"
            className="mt-4"
            readonly
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <FormNumberInput
            control={form.control}
            name="result.net_receipts"
            label="Penerimaan Bersih"
            className="mt-4"
            readonly
          />
        </CardContent>
      </Card>
    </div>
  );
}
