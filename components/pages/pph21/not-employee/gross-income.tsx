import React from 'react';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { NotEmployeeFormData } from '@/types/pph21/not-employee/not-employee';

interface NotEmployeeGrossIncomeProps {
  form: ReturnType<typeof useForm<NotEmployeeFormData>>;
}
export default function NotEmployeeGrossIncome({
  form,
}: NotEmployeeGrossIncomeProps) {
  return (
    <Card className="p-3 border border-gray-300 shadow-md">
      <h2 className="text-center font-medium text-sm py-2  rounded-md w-80 mx-auto">
        Penghasilan Bruto
      </h2>
      <div className="space-y-3 mt-3">
        <FormField
          control={form.control}
          name="gross_salary.salary"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center">
              <FormLabel htmlFor={field.name}>Penghasilan Bruto</FormLabel>
              <FormControl>
                <Input className="border border-gray-400" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <h2 className="text-center font-medium text-sm py-2  rounded-md w-80 mx-auto mt-12">
        Penghasilan Kena Pajak
      </h2>
      <div className="grid grid-cols-9 mt-3">
        <FormField
          control={form.control}
          name="constants.tariff_pkp"
          render={({ field }) => (
            <FormItem className="w-full flex items-end">
              <FormControl>
                <Input className="border border-gray-400" {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center items-end col-span-1">
          <span className="text-lg mb-2">x</span>
        </div>
        <FormField
          control={form.control}
          name="gross_salary.salary"
          render={({ field }) => (
            <FormItem className="w-full col-span-3">
              <FormLabel htmlFor={field.name}>Penghasilan Bruto</FormLabel>
              <FormControl>
                <Input className="border border-gray-400" {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center items-end col-span-1">
          <span className="text-lg mb-2">=</span>
        </div>
        <FormField
          control={form.control}
          name="calculations.pph21_pkp"
          render={({ field }) => (
            <FormItem className="w-full col-span-3">
              <FormLabel htmlFor={field.name}>PKP</FormLabel>
              <FormControl>
                <Input className="border border-gray-400" {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </Card>
  );
}