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
import { PermanentEmployeeFormData } from '@/types/pph21/permanent-employee/permanent-employee';
import { useForm } from 'react-hook-form';

interface GrossIncomeProps {
  form: ReturnType<typeof useForm<PermanentEmployeeFormData>>;
}

export default function GrossIncome({ form }: GrossIncomeProps) {
  return (
    <Card className="col-span-4 border border-gray-300 shadow-md">
      <h1 className="text-center font-bold text-sm mb-3 pt-3">
        Penghasilan Bruto
      </h1>
      <CardContent>
        <FormField
          control={form.control}
          name="gross_salary.salary"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center">
              <FormLabel htmlFor={field.name}>Gaji</FormLabel>
              <FormControl>
                <Input
                  className="border border-gray-400"
                  {...field}
                  placeholder="Rp"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gross_salary.allowance"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center">
              <FormLabel htmlFor={field.name}>Tunjangan</FormLabel>
              <FormControl>
                <Input
                  className="border border-gray-400"
                  {...field}
                  placeholder="Rp"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gross_salary.thr"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center">
              <FormLabel htmlFor={field.name}>
                Tunjangan Hari raya (THR)
              </FormLabel>
              <FormControl>
                <Input
                  className="border border-gray-400"
                  {...field}
                  placeholder="Rp"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gross_salary.bonus"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center">
              <FormLabel htmlFor={field.name}>Bonus</FormLabel>
              <FormControl>
                <Input
                  className="border border-gray-400"
                  {...field}
                  placeholder="Rp"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gross_salary.overtime_salary"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center">
              <FormLabel htmlFor={field.name}>Lembur</FormLabel>
              <FormControl>
                <Input
                  className="border border-gray-400"
                  {...field}
                  placeholder="Rp"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gross_salary.assurance"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center">
              <FormLabel htmlFor={field.name}>
                Premi Dibayar Pemberi Kerja
              </FormLabel>
              <FormControl>
                <Input
                  className="border border-gray-400"
                  {...field}
                  placeholder="Rp"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="result.total_salary"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center">
              <FormLabel htmlFor={field.name}>Penghasilan Bruto</FormLabel>
              <FormControl>
                <Input
                  className="border border-gray-400"
                  {...field}
                  placeholder="Rp"
                  readOnly
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
