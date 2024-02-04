import { Card } from '@/components/ui/card';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SeverencePayPeriodicFormData } from '@/types/pph21/severance-pay/severence-pay';
import React from 'react';
import { useForm } from 'react-hook-form';
import { formatRupiah, reverseFormat } from '@/common/helpers/number-format';

interface SalaryProps {
  form: ReturnType<typeof useForm<SeverencePayPeriodicFormData>>;
}

export default function SeverencePayPeriodicSalary({ form }: SalaryProps) {
  return (
    <Card className="w-1/2 mb-9 mt-12">
      <FormField
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
      />
    </Card>
  );
}
