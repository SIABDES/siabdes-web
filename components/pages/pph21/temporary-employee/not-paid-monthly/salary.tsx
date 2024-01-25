import { Card } from '@/components/ui/card';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { NonPermanentEmployeeNotMonthlyFormData } from '@/types/pph21/temporary-employee/temporary-employee';
import React from 'react';
import { useForm } from 'react-hook-form';

interface SalaryProps {
  form: ReturnType<typeof useForm<NonPermanentEmployeeNotMonthlyFormData>>;
}
export default function TemporaryEmployeeNotMonthlySalary({
  form,
}: SalaryProps) {
  return (
    <Card className="w-1/3 mb-9 mt-12">
      <FormField
        control={form.control}
        name="gross_salary.salary"
        render={({ field }) => (
          <FormItem className="w-full grid grid-cols-2 items-center bg-blue-300 px-6 py-2 rounded-lg">
            <FormLabel htmlFor={field.name}>Upah harian</FormLabel>
            <FormControl>
              <Input
                className="border border-gray-400 bg-[#E5F5FC]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </Card>
  );
}
