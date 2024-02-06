import { Card } from '@/components/ui/card';
import { SeverencePayPeriodicFormData } from '@/types/pph21/severance-pay/severence-pay';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  formatRupiah,
  reverseFormat,
  reverseFormatRupiah,
} from '@/common/helpers/number-format';
import { PPh21OtherNonEmployeeSupervisorFormData } from '@/types/pph21/pph21/other-pph21';
import FormNumberInput from '@/components/patan-ui/form/form-number-input';

interface SalaryProps {
  form: ReturnType<typeof useForm<PPh21OtherNonEmployeeSupervisorFormData>>;
}

export default function PPh21OtherNonEmployeeSupervisorSalary({
  form,
}: SalaryProps) {
  return (
    <Card className="w-1/2 mb-9 mt-12">
      {/* <FormField
        control={form.control}
        name="gross_salary.gross_salary"
        render={({ field }) => (
          <FormItem className="w-full grid grid-cols-2 items-center bg-blue-300 px-6 py-2 rounded-lg">
            <FormLabel htmlFor={field.name}>Upah harian</FormLabel>
            <FormControl>
              <Input
                className="border border-gray-400 bg-[#E5F5FC]"
                {...field}
                value={formatRupiah(field.value)}
                onChange={(e) => {
                  const value = reverseFormat(e.target.value);
                  field.onChange(value);
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      /> */}
      <FormNumberInput
        control={form.control}
        name="gross_salary.salary"
        label="Upah Harian"
        transform={{
          input: (value) => {
            return isNaN(value) ? '' : formatRupiah(value);
          },
          output: (event) => {
            const unformatted = event.target.value;

            const value = reverseFormatRupiah(unformatted);

            const output = Number(value);

            return isNaN(output) ? 0 : output;
          },
        }}
      />
    </Card>
  );
}
