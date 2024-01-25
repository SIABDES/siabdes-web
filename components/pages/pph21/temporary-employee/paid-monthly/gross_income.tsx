import { Card, CardContent } from '@/components/ui/card';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { NonPermanentEmployeeMonthlyFormData } from '@/types/pph21/temporary-employee/temporary-employee';
import React from 'react';
import { useForm } from 'react-hook-form';

interface TemporaryEmployeeGrossIncomeProps {
  form: ReturnType<typeof useForm<NonPermanentEmployeeMonthlyFormData>>;
}
export default function TemporaryEmployeeMonthlyGrossIncome({
  form,
}: TemporaryEmployeeGrossIncomeProps) {
  return (
    <Card className="col-span-4 border border-gray-300 shadow-md">
      <h1 className="text-center font-bold text-sm mb-3 pt-3">
        Penghasilan Bruto
      </h1>
      <CardContent>
        <FormField
          control={form.control}
          name="gross_salary.daily_salary"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center">
              <FormLabel htmlFor={field.name}>Penghasilan Sehari</FormLabel>
              <FormControl>
                <Input className="border border-gray-400" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gross_salary.working_days"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center">
              <FormLabel htmlFor={field.name}>
                Jumlah Hari Kerja Sebulan
              </FormLabel>
              <FormControl>
                <Input className="border border-gray-400" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gross_salary.monthly_salary"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center">
              <FormLabel htmlFor={field.name}>Penghasilan Sebulan</FormLabel>
              <FormControl>
                <Input className="border border-gray-400" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
